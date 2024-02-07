import { useEffect, useRef, useState } from 'react';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import Card from '@leafygreen-ui/card';
import { css, cx } from '@leafygreen-ui/emotion';
import { usePrevious } from '@leafygreen-ui/hooks';
import LeafyGreenProvider, {
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';

import { KnobsTable } from './KnobsTable/KnobsTable';
import { isStateReady } from './useLiveExampleState/utils';
// import { CodeExample } from './CodeExample';
import {
  blockContainerStyle,
  liveExampleWrapperStyle,
  storyContainerStyle,
} from './LiveExample.styles';
import { LiveExampleDecorator } from './LiveExampleDecorator';
import {
  LiveExampleError,
  LiveExampleLoading,
  LiveExampleNotFound,
} from './LiveExampleStateComponents';
import { useLiveExampleState } from './useLiveExampleState';
// import { useStoryCode } from './useStoryCode';

// Use standard block flow for these packages
const useBlockWrapperFor = [
  'icon',
  'palette',
  'side-nav',
  'tokens',
  'typography',
];

// Currently disabling code examples for all components
// TODO: Fix code examples: https://jira.mongodb.org/browse/LG-3310
// const disableCodeExampleFor = ['icon', 'palette', 'tokens'];

export const LiveExample = ({
  componentName,
  tsDoc,
}: {
  componentName: string;
  tsDoc: Array<CustomComponentDoc> | null;
}) => {
  const prevComponentName = usePrevious(componentName);
  const [showCode, setShowCode] = useState(false);
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const storyWrapperRef = useRef<HTMLDivElement>(null);

  // Establish a page state
  // { meta, StoryFn, knobValues, knobsArray, storyCode } =
  const { context, updateKnobValue, resetContext, setErrorState, isState } =
    useLiveExampleState(componentName, tsDoc);

  const { darkMode } = useDarkMode(context.knobValues?.darkMode);

  /** When the component name changes, reset the page */
  useEffect(() => {
    if (componentName !== prevComponentName) {
      if (tsDoc) {
        resetContext(componentName, tsDoc);
      } else {
        setErrorState('TSDoc not found');
      }
    }
  }, [componentName, prevComponentName, tsDoc, resetContext, setErrorState]);

  // const storyCode = useStoryCode(context, showCode);

  /** Triggered on button click */
  const toggleShowCode = () => {
    setShowCode(sc => !sc);
  };

  const storyWrapperStyle = context.meta?.parameters?.wrapperStyle;

  // Commented out as this variable is not needed when code examples are not enabled.
  // This line was causing issues as the page no longer has access to `window`.
  // const storyContainerHeight = Math.min(
  //   Math.max(
  //     storyWrapperRef.current?.clientHeight ?? 0,
  //     window.innerHeight / 3,
  //   ),
  //   window.innerHeight * 0.8,
  // );

  // should match the total height of the story container
  // const exampleCodeHeight = storyContainerHeight + 48;

  // Currently disabling code examples for all components
  // TODO: Fix code examples: https://jira.mongodb.org/browse/LG-3310
  const codeExampleEnabled = true; //!disableCodeExampleFor.includes(componentName);

  return (
    <LeafyGreenProvider darkMode={darkMode}>
      <Card
        className={css`
          padding: 0;
        `}
      >
        <div className={liveExampleWrapperStyle}>
          <div
            id="story-container"
            ref={storyContainerRef}
            className={cx(storyContainerStyle, {
              [blockContainerStyle]: useBlockWrapperFor.includes(componentName),
            })}
          >
            {isStateReady(context) && (
              <div ref={storyWrapperRef} className={storyWrapperStyle}>
                <LiveExampleDecorator meta={context.meta}>
                  <context.StoryFn {...context.knobValues} />
                </LiveExampleDecorator>
              </div>
            )}
            {isState('loading') && <LiveExampleLoading />}
            {isState('not_found') && <LiveExampleNotFound />}
            {isState('error') && (
              <LiveExampleError message={context.errorMessage} />
            )}
          </div>
          {/* {codeExampleEnabled && (
            <CodeExample
              showCode={showCode}
              code={storyCode}
              height={exampleCodeHeight}
            />
          )} */}
        </div>
        {isStateReady(context) && (
          <KnobsTable
            showCode={showCode}
            codeExampleEnabled={codeExampleEnabled}
            handleShowCodeClick={toggleShowCode}
            knobsArray={context.knobsArray}
            knobValues={context.knobValues}
            updateKnobValue={updateKnobValue}
          />
        )}
      </Card>
    </LeafyGreenProvider>
  );
};
