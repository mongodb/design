import React, {
  useCallback,
  useEffect,
  useReducer,
  ReactNode,
  useState,
} from 'react';
import { kebabCase } from 'lodash';
import pascalcase from 'pascalcase';
import { PropItem } from 'react-docgen-typescript';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { ComponentStoryFn, Meta } from '@storybook/react';
import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import Code from '@leafygreen-ui/code';
import { css, cx } from '@leafygreen-ui/emotion';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { spacing } from '@leafygreen-ui/tokens';
import { H2 } from '@leafygreen-ui/typography';
import { getComponentStory } from 'utils/getComponentStory';
import { BaseLayoutProps } from 'utils/types';
import { findComponentDoc, getComponentPropsArray } from 'utils/tsdoc.utils';
import { KnobRow } from './KnobRow';
import {
  getControlType,
  getDefaultValue,
  getInitialKnobValues,
  getKnobDescription,
  getKnobOptions,
  getPropItemFilterFunction,
  KnobType,
} from './utils';

const getStoryJSX = (element: ReactNode, displayName: string) =>
  reactElementToJSXString(element, {
    // @ts-expect-error
    displayName: child => child?.type?.displayName ?? pascalcase(displayName),
    showFunctions: true,
    useBooleanShorthandSyntax: false,
  });

const liveExampleWrapperStyle = css`
  display: flex;
  margin: -${spacing[4]}px;
  margin-bottom: initial;
  min-height: 33vh;
  max-height: 50vh;
`;

const storyWrapperStyle = css`
  flex: 2;
  padding: ${spacing[4]}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  overflow: auto;
`;

const codeExampleWrapperStyle = css`
  position: relative;
  flex: 0;
  max-height: 100%;
  margin-top: -1px;

  & > div {
    height: 100%;
    border-radius: 0 24px 0 0;

    & > * {
      height: 100%;
    }
  }
`;

const codeStyle = css`
  height: 100%;
  overflow: auto;
`;

const showHideCodeButtonStyle = css`
  position: absolute;
  bottom: ${spacing[3]}px;
  right: ${spacing[5] + spacing[4]}px;
  white-space: nowrap;
`;

export interface LiveExampleState {
  meta?: Meta<any>;
  knobValues?: { [arg: string]: any };
  knobsArray?: Array<KnobType>;
  StoryFn?: ComponentStoryFn<any>;
  storyCode?: string;
}

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
}: Pick<BaseLayoutProps, 'componentName' | 'tsDoc'>) => {
  const [showCode, setShowCode] = useState(true);
  // Establish a page state
  const [{ meta, knobValues, knobsArray, StoryFn, storyCode }, setState] =
    useReducer((state: LiveExampleState, newState: LiveExampleState) => {
      return {
        ...state,
        ...newState,
      };
    }, initialLiveExampleState);

  const { darkMode } = useDarkMode(knobValues?.darkMode);
  const setCode = useCallback(
    (newCode: LiveExampleState['storyCode']) =>
      setState({ meta, knobValues, knobsArray, StoryFn, storyCode: newCode }),
    [StoryFn, knobValues, knobsArray, meta],
  );

  // Updates the value of a knob
  const updateValue = useCallback(
    (propName: string, value: any) => {
      setState({
        meta,
        StoryFn,
        storyCode,
        knobsArray,
        knobValues: { ...knobValues, [propName]: value },
      });
    },
    [meta, StoryFn, storyCode, knobsArray, knobValues],
  );

  // Fetch Story if/when component changes.
  // This should only happen once
  useEffect(() => {
    const kebabName = kebabCase(componentName);
    getComponentStory(kebabName)
      .then(module => {
        if (module) {
          const { default: meta, ...stories } = module;

          const defaultStoryName =
            meta.parameters?.default ?? Object.keys(stories)[0];

          const StoryFn = defaultStoryName
            ? stories[defaultStoryName]
            : Object.values(stories)[0];

          const knobsArray: Array<KnobType> = getComponentPropsArray(
            findComponentDoc(componentName, tsDoc),
          )
            // Filter out component props we don't want knobs for.
            // These are the props we display in the Knobs
            .filter(getPropItemFilterFunction({ meta, StoryFn }))
            // Convert to custom KnobType by adding additional properties,
            // and updating other props
            .map(
              (TSDocProp: PropItem) =>
                ({
                  ...TSDocProp,
                  name: TSDocProp.name,
                  options: getKnobOptions({ meta, StoryFn, TSDocProp }),
                  type: getControlType({ meta, StoryFn, TSDocProp }),
                  description: getKnobDescription({ meta, StoryFn, TSDocProp }),
                  defaultValue: getDefaultValue({
                    meta,
                    StoryFn,
                    TSDocProp,
                  }),
                } as KnobType),
            );

          // Extract the default Knob Values, and include any props not explicitly included in TSDoc
          // This state object will be modified whenever a user interacts with a knob
          const knobValues = getInitialKnobValues(knobsArray, meta, StoryFn);

          const storyCode = getStoryJSX(
            <StoryFn {...knobValues} />,
            componentName,
          ); // generateStoryCode(componentName, knobValues);

          setState({ meta, knobValues, knobsArray, StoryFn, storyCode });
        } else {
          setState(initialLiveExampleState);
        }
      })
      .catch(err => {
        console.warn(err);
        setState(initialLiveExampleState);
      });
  }, [componentName, tsDoc]);

  useEffect(() => {
    const storyCode = StoryFn
      ? getStoryJSX(<StoryFn {...knobValues} />, componentName)
      : '';
    setCode(storyCode);
  }, [StoryFn, componentName, knobValues, setCode]);

  return (
    <Card
      darkMode={darkMode}
      className={css`
        margin-block: 2em;
      `}
    >
      <div className={liveExampleWrapperStyle}>
        <div className={storyWrapperStyle}>
          {StoryFn ? <StoryFn {...knobValues} /> : <H2>No example found 🕵️</H2>}
        </div>
        <div
          className={cx(codeExampleWrapperStyle, {
            [css`
              flex: 2;
            `]: showCode,
          })}
        >
          {showCode && (
            <Code className={codeStyle} darkMode={darkMode} language="js">
              {storyCode ?? 'No code found'}
            </Code>
          )}
          <Button
            darkMode={darkMode}
            className={showHideCodeButtonStyle}
            variant="default"
            size="xsmall"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide' : 'Show'} Code
          </Button>
        </div>
      </div>
      <div>
        {knobsArray &&
          knobsArray.map(knob => (
            <KnobRow
              key={knob.name}
              darkMode={darkMode}
              propName={knob.name}
              knobType={knob.type}
              knobOptions={knob.options}
              description={knob.description}
              knobValue={knobValues?.[knob.name]}
              setKnobValue={updateValue}
            />
          ))}
      </div>
    </Card>
  );
};
