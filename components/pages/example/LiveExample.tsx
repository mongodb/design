import { useCallback, useEffect, useReducer } from 'react';
import { kebabCase } from 'lodash';
import Card from '@leafygreen-ui/card';
import { css } from '@leafygreen-ui/emotion';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { getComponentStory } from 'utils/getComponentStory';
import { BaseLayoutProps } from 'utils/types';
import { findComponentDoc, getComponentPropsArray } from 'utils/tsdoc.utils';
import { KnobRow } from './KnobRow';
import { H2 } from '@leafygreen-ui/typography';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { PropItem } from 'react-docgen-typescript';
import {
  getControlType,
  getDefaultValue,
  getInitialKnobValues,
  getKnobDescription,
  getKnobOptions,
  getPropItemFilterFunction,
  KnobType,
} from './utils';

const storyWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 33vh;
`;

export interface LiveExampleState {
  meta?: Meta<any>;
  knobValues?: { [arg: string]: any };
  knobsArray?: Array<KnobType>;
  StoryFn?: ComponentStoryFn<any>;
}

const initialLiveExampleState: LiveExampleState = {
  meta: undefined,
  knobValues: undefined,
  knobsArray: undefined,
  StoryFn: undefined,
};

export const LiveExample = ({
  componentName,
  tsDoc,
}: Pick<BaseLayoutProps, 'componentName' | 'tsDoc'>) => {
  // Establish a page state
  const [{ meta, knobValues, knobsArray, StoryFn }, setState] = useReducer(
    (state: LiveExampleState, newState: LiveExampleState) => {
      return {
        ...state,
        ...newState,
      };
    },
    initialLiveExampleState,
  );

  // Updates the value of a knob
  const updateValue = useCallback(
    (propName: string, value: any) => {
      setState({
        meta,
        StoryFn,
        knobsArray,
        knobValues: { ...knobValues, [propName]: value },
      });
    },
    [StoryFn, knobsArray, knobValues, meta],
  );

  const { darkMode } = useDarkMode(knobValues?.darkMode);

  // Fetch Story if/when component changes.
  // This should only happen once
  useEffect(() => {
    const kebabName = kebabCase(componentName);
    getComponentStory(kebabName)
      .then(module => {
        if (module) {
          const { default: meta, ...stories } = module;
          const defaultStoryName = meta?.parameters?.default;

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

          setState({ meta, knobValues, knobsArray, StoryFn });
        } else {
          setState(initialLiveExampleState);
        }
      })
      .catch(err => {
        console.warn(err);
        setState(initialLiveExampleState);
      });
  }, [componentName, tsDoc]);

  return (
    <Card
      darkMode={darkMode}
      className={css`
        margin-block: 2em;
      `}
    >
      <div className={storyWrapperStyle}>
        {StoryFn ? <StoryFn {...knobValues} /> : <H2>No example found 🕵️</H2>}
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
