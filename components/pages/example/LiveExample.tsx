import { useCallback, useEffect, useReducer } from 'react';
import { kebabCase, defaults, defaultsDeep } from 'lodash';
import Card from '@leafygreen-ui/card';
import { css } from '@leafygreen-ui/emotion';
import { ArgTypes, ComponentStoryFn, Meta } from '@storybook/react';
import { getComponentStory } from 'utils/getComponentStory';
import { BaseLayoutProps } from 'utils/types';
import {
  findComponentDoc,
  getComponentPropsArray,
  getDefaultValueValue,
} from 'utils/tsdoc.utils';
import { KnobRow } from './KnobRow';
import { H2 } from '@leafygreen-ui/typography';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { PropItem } from 'react-docgen-typescript';
import { getControlType, getKnobOptions } from './utils';

const ignoreProps = [
  'className',
  'tooltipClassName',
  'contentClassName',
  'id',
  'onClick',
  'onChange',
  'onBlur',
  'handleValidation',
  'aria-label',
  'aria-labelledby',
  'aria-controls',
  'popoverClassName',
  'portalClassName',
  'portalContainer',
  'shouldTooltipUsePortal',
  'adjustOnMutation',
  'refEl',
  'scrollContainer',
  'setOpen',
  'shouldClose',
];
export interface LiveExampleState {
  meta?: Meta<any>;
  knobValues?: { [arg: string]: any };
  knobProps?: Array<PropItem>;
  StoryFn?: ComponentStoryFn<any>;
  SBArgTypes?: Partial<ArgTypes<any>>;
}

const initialLiveExampleState: LiveExampleState = {
  meta: undefined,
  knobValues: undefined,
  knobProps: undefined,
  StoryFn: undefined,
  SBArgTypes: undefined,
};

export const LiveExample = ({
  componentName,
  tsDoc,
}: Pick<BaseLayoutProps, 'componentName' | 'tsDoc'>) => {
  // Establish a page state
  const [{ meta, knobValues, knobProps, StoryFn, SBArgTypes }, setState] =
    useReducer((state: LiveExampleState, newState: LiveExampleState) => {
      return {
        ...state,
        ...newState,
      };
    }, initialLiveExampleState);

  // Updates the value of a knob
  const updateValue = useCallback(
    (propName: string, value: any) => {
      setState({
        meta,
        StoryFn,
        knobProps,
        SBArgTypes,
        knobValues: { ...knobValues, [propName]: value },
      });
    },
    [SBArgTypes, StoryFn, knobProps, knobValues, meta],
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

          // Filter out component props we don't want knobs for.
          // These are the props we display in the Knobs
          const knobProps = getComponentPropsArray(
            findComponentDoc(componentName, tsDoc),
          ).filter((prop: PropItem) => {
            const isIgnored = ignoreProps.includes(prop.name);
            const isExcludedBySB =
              meta?.parameters?.controls?.exclude?.includes(prop.name);
            const isControlNone = ['none', false].includes(
              meta?.argTypes?.[prop.name]?.control,
            );
            return !isIgnored && !isExcludedBySB && !isControlNone;
          });

          // Format TSDoc defaults in the same format as SB args
          const defaultValues = knobProps.reduce((defaults, currProp) => {
            defaults[currProp.name] = getDefaultValueValue(currProp);
            return defaults;
          }, {} as { [x: string]: any });

          const knobValues = defaults(
            {},
            meta.args,
            StoryFn.args,
            defaultValues,
          );

          const SBArgTypes = defaultsDeep({}, meta.argTypes, StoryFn.argTypes);

          setState({ meta, knobValues, knobProps, StoryFn, SBArgTypes });
        }
      })
      .catch(err => {
        console.warn(err);
      });
  }, [componentName, tsDoc]);

  return (
    <Card
      darkMode={darkMode}
      className={css`
        margin-block: 2em;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 33vh;
        `}
      >
        {StoryFn ? <StoryFn {...knobValues} /> : <H2>No Story found</H2>}
      </div>
      <div>
        {knobProps &&
          knobProps.map(componentProp => (
            <KnobRow
              key={componentProp.name}
              darkMode={darkMode}
              propName={componentProp.name}
              knobType={getControlType(
                componentProp.type,
                SBArgTypes?.[componentProp.name],
              )}
              knobOptions={getKnobOptions(
                componentProp.type,
                SBArgTypes?.[componentProp.name],
              )}
              description={
                SBArgTypes?.[componentProp.name]?.description ??
                componentProp.description
              }
              knobValue={knobValues?.[componentProp.name]}
              setKnobValue={updateValue}
            />
          ))}
      </div>
    </Card>
  );
};
