import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { kebabCase } from 'lodash';
import { getComponentStory } from 'utils/getComponentStory';
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
import { LiveExampleState } from './types';
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

const initialLiveExampleState: LiveExampleState = {
  meta: undefined,
  StoryFn: undefined,
  storyCode: undefined,
  knobValues: undefined,
  knobsArray: undefined,
};

export const LiveExample = ({
  componentName,
  tsDoc,
}: {
  componentName: string;
  tsDoc: Array<CustomComponentDoc> | null;
}) => {
  const [showCode, setShowCode] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Establish a page state
  const [{ meta, knobValues, knobsArray, StoryFn, storyCode }, setState] =
    useReducer((state: LiveExampleState, newState: LiveExampleState) => {
      return {
        ...state,
        ...newState,
      };
    }, initialLiveExampleState);

  const { darkMode } = useDarkMode(knobValues?.darkMode);
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const storyWrapperRef = useRef<HTMLDivElement>(null);

  const setCode = useCallback(
    (newCode: LiveExampleState['storyCode']) =>
      setState({ meta, knobValues, knobsArray, StoryFn, storyCode: newCode }),
    [StoryFn, knobValues, knobsArray, meta],
  );

  // Updates the value of a knob
  const updateValue = useCallback(
    (propName: string, newValue: any) => {
      const value = matchTypes(knobValues?.[propName], newValue);

      setState({
        knobValues: { ...knobValues, [propName]: value },
      });
    },
    [knobValues],
  );

  // Fetch Story if/when component changes.
  // This should only happen once
  useEffect(() => {
    const kebabName = kebabCase(componentName);
    setIsLoading(true);
    getComponentStory(kebabName)
      .then(module => {
        if (module) {
          const { default: meta, ...stories } = module;

          const state = getLiveExampleState({
            componentName,
            meta,
            stories,
            tsDoc,
          });

          setState(state);
        } else {
          setState(initialLiveExampleState);
          setShowCode(false);
        }
      })
      .catch(err => {
        console.warn(err);
        setState(initialLiveExampleState);
        setShowCode(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [componentName, tsDoc]);

  // Update source code
  useEffect(() => {
    setCode(
      getStoryCode({
        componentName,
        meta,
        StoryFn,
        knobValues,
      }),
    );
  }, [StoryFn, componentName, knobValues, meta, setCode]);

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
          {isLoading ? (
            <H2>Loading...</H2>
          ) : (
            <>
              {StoryFn ? (
                <div ref={storyWrapperRef} className={storyWrapperStyle}>
                  <StoryFn {...knobValues} />
                </div>
              ) : (
                <H2>React Component coming soon ⚛️</H2>
              )}
            </>
          )}
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
              onClick={() => setShowCode(!showCode)}
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
              setKnobValue={updateValue}
            />
          ))}
      </div>
    </Card>
  );
};
