import { useCallback, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { cloneDeep, kebabCase } from 'lodash';
import { getComponentStories } from 'utils/getComponentStories';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import Code from '@leafygreen-ui/code';
import { css, cx } from '@leafygreen-ui/emotion';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { H2 } from '@leafygreen-ui/typography';

import { KnobRow } from './KnobRow/KnobRow';
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
import { LiveExampleDecorator } from './LiveExampleDecorator';
import { LiveExampleState } from './types';
import { useAsyncEffect } from './useAsyncEffect';
import {
  defaultLiveExampleState,
  useLiveExampleState,
} from './useLiveExampleState';
import { getLiveExampleState, getStoryCode, matchTypes } from './utils';

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
  const [showCode, setShowCode] = useState(false);
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const storyWrapperRef = useRef<HTMLDivElement>(null);

  // Establish a page state
  const [{ meta, StoryFn, knobValues, knobsArray, storyCode }, setState] =
    useLiveExampleState();

  const { darkMode } = useDarkMode(knobValues?.darkMode);

  // Fetch Story if/when component changes.
  // This should only happen once
  useAsyncEffect(
    () => getComponentStories(kebabCase(componentName)),
    module => {
      if (module) {
        const { default: meta, ...stories } = module;

        const _state = cloneDeep(
          getLiveExampleState({
            componentName,
            meta,
            stories,
            tsDoc: tsDoc,
          }),
        );

        setState(_state);
      } else {
        setState(defaultLiveExampleState);
        setShowCode(false);
      }
    },
    err => {
      console.warn(err);
      setState(defaultLiveExampleState);
      setShowCode(false);
    },
    () => {},
    () => {},
    [componentName, tsDoc, setState],
  );

  const setCode = useCallback(
    (newCode: LiveExampleState['storyCode']) => {
      setState({ storyCode: newCode });
    },
    [setState],
  );

  // Updates the value of a knob
  const updateKnobValue = useCallback(
    (propName: string, newValue: any) => {
      const value = matchTypes(knobValues?.[propName], newValue);
      setState({
        knobValues: { ...knobValues, [propName]: value },
      });
    },
    [setState, knobValues],
  );

  const handleShowCodeClick = () => {
    setShowCode(sc => !sc);
    setCode(
      getStoryCode({
        componentName,
        meta: meta,
        StoryFn: StoryFn,
        knobValues: knobValues,
      }),
    );
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
      <div className={liveExampleWrapperStyle}>
        <div
          id="story-container"
          ref={storyContainerRef}
          className={cx(
            storyContainerStyle,
            {
              [blockContainerStyle]: useBlockWrapperFor.includes(componentName),
            },
            css`
              // at least as big as the story, but no more than 100vh
              min-height: ${storyContainerHeight}px;
            `,
          )}
        >
          <LiveExampleDecorator meta={meta}>
            {StoryFn ? (
              <div ref={storyWrapperRef} className={storyWrapperStyle}>
                <StoryFn {...knobValues} />
              </div>
            ) : (
              <H2>React Component coming soon ⚛️</H2>
            )}
          </LiveExampleDecorator>
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
                  {storyCode ?? 'No code found'}
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
    </Card>
  );
};
