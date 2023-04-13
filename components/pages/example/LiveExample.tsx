import { useEffect, useMemo, useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Transition } from 'react-transition-group';
import { isEmpty, isUndefined } from 'lodash';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import Code from '@leafygreen-ui/code';
import { css, cx } from '@leafygreen-ui/emotion';
import { usePrevious } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { InlineCode } from '@leafygreen-ui/typography';

import { KnobRow } from './KnobRow/KnobRow';
import { getStoryCode } from './utils/getStoryCode';
import {
  blockContainerStyle,
  codeExampleWrapperStyle,
  codeStyle,
  codeWrapperStateStyle,
  exampleCodeButtonRowStyle,
  exampleCodeButtonStyle,
  liveExampleWrapperStyle,
  storyContainerStyle,
} from './LiveExample.styles';
import {
  isContextDefined,
  useLiveExampleStateMachine,
} from './LiveExampleStateMachine';
import {
  LiveExampleDecorator,
  LiveExampleErrorBoundaryFallback,
  LiveExampleLoading,
  LiveExampleNotFound,
} from './LiveExampleUtilityComponents';
import { useKnobValues } from './useKnobValues';

// Use standard block flow for these packages
const useBlockWrapperFor = [
  'icon',
  'palette',
  'side-nav',
  'tokens',
  'typography',
];
const disableCodeExampleFor = ['icon', 'palette', 'tokens'];

export const LiveExample = ({
  componentName,
  tsDoc,
}: {
  componentName: string;
  tsDoc: Array<CustomComponentDoc> | null;
}) => {
  const prevComponentName = usePrevious(componentName);

  const storyContainerRef = useRef<HTMLDivElement>(null);
  const storyWrapperRef = useRef<HTMLDivElement>(null);

  const [state, send] = useLiveExampleStateMachine({ componentName });
  const { meta, StoryFn } = state.context;

  const { knobsArray, knobValues, updateKnobValue, resetKnobs } = useKnobValues(
    {
      ...state.context,
      tsDoc,
    },
  );

  const { darkMode } = useDarkMode(knobValues?.darkMode);

  // Reset when component name changes, or when state.value is unset
  useEffect(() => {
    if (state.matches('init') || componentName !== prevComponentName) {
      send('RESET', { componentName });
      resetKnobs();
    }
  }, [componentName, prevComponentName, send, state, resetKnobs]);

  const [showCode, setShowCode] = useState(false);
  const exampleCode = useMemo(() => {
    if (showCode) {
      return getStoryCode({
        componentName,
        meta,
        StoryFn,
        knobValues,
      });
    }
  }, [componentName, meta, StoryFn, knobValues, showCode]);

  const handleShowCodeClick = () => {
    setShowCode(sc => !sc);
  };

  const storyWrapperStyle = meta?.parameters?.wrapperStyle;

  const storyContainerHeight = Math.min(
    Math.max(
      storyWrapperRef.current?.clientHeight ?? 0,
      window.innerHeight / 3,
    ),
    window.innerHeight * 0.8,
  );

  // should match the total height of the story container
  const exampleCodeHeight = storyContainerHeight + 48;

  return (
    <Card
      darkMode={darkMode}
      className={css`
        margin-block: 2em;
      `}
    >
      {/* @ts-expect-error - complex union */}
      <InlineCode>state: {state.value}</InlineCode>
      <br />
      <InlineCode>
        StoryFn: {isUndefined(StoryFn) ? 'undefined' : '(props) => {...}'}
      </InlineCode>
      <br />
      <InlineCode>knobValues: {JSON.stringify(knobValues)}</InlineCode>

      <ErrorBoundary FallbackComponent={LiveExampleErrorBoundaryFallback}>
        <div className={liveExampleWrapperStyle}>
          <div
            id="story-container"
            ref={storyContainerRef}
            className={cx(
              storyContainerStyle,
              {
                [blockContainerStyle]:
                  useBlockWrapperFor.includes(componentName),
              },
              css`
                // at least as big as the story, but no more than 100vh
                min-height: ${storyContainerHeight}px;
              `,
            )}
          >
            <div ref={storyWrapperRef} className={storyWrapperStyle}>
              {state.matches('loaded') &&
              isContextDefined(state.context) &&
              !isEmpty(knobValues) ? (
                <LiveExampleDecorator meta={meta}>
                  <StoryFn {...knobValues} />
                </LiveExampleDecorator>
              ) : state.matches('error') ? (
                <LiveExampleNotFound />
              ) : (
                <LiveExampleLoading />
              )}
            </div>
          </div>
          {!disableCodeExampleFor.includes(componentName) && (
            <Transition in={showCode} timeout={200}>
              {state => (
                <div
                  className={cx(
                    codeExampleWrapperStyle,
                    codeWrapperStateStyle[state],
                    css`
                      height: ${exampleCodeHeight}px;
                    `,
                  )}
                  id="example-code"
                >
                  <Code className={codeStyle} darkMode={darkMode} language="js">
                    {exampleCode ?? 'No code found'}
                  </Code>
                </div>
              )}
            </Transition>
          )}
        </div>
        <div id="knobs">
          {!disableCodeExampleFor.includes(componentName) && (
            <div className={exampleCodeButtonRowStyle}>
              <Button
                darkMode={darkMode}
                className={exampleCodeButtonStyle}
                variant="default"
                size="xsmall"
                onClick={handleShowCodeClick}
              >
                {showCode ? 'Hide' : 'Show'} Code
              </Button>
            </div>
          )}
          {knobsArray &&
            knobsArray.map(knob => (
              <KnobRow
                key={knob.name}
                darkMode={darkMode}
                knob={knob}
                knobValue={knobValues?.[knob.name]}
                setKnobValue={updateKnobValue}
              />
            ))}
        </div>
      </ErrorBoundary>
    </Card>
  );
};
