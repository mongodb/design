import { useEffect, useReducer } from 'react';
import { kebabCase } from 'lodash';
import Card from '@leafygreen-ui/card';
import { css } from '@leafygreen-ui/emotion';
import pascalcase from 'pascalcase';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { getComponentStory } from 'utils/getComponentStory';
import { BaseLayoutProps } from 'utils/types';
import { getComponentProps } from 'utils/tsdoc.utils';
import { KnobRow } from './KnobRow';
import { H2 } from '@leafygreen-ui/typography';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

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
  StoryFn?: ComponentStoryFn<any>;
}

const initialLiveExampleState: LiveExampleState = {
  meta: undefined,
  knobValues: undefined,
  StoryFn: undefined,
};

export const LiveExample = ({
  componentName,
  tsDoc,
}: Pick<BaseLayoutProps, 'componentName' | 'tsDoc'>) => {
  const [{ meta, knobValues, StoryFn }, setState] = useReducer(
    (state: LiveExampleState, newState: LiveExampleState) => {
      return {
        ...state,
        ...newState,
      };
    },
    initialLiveExampleState,
  );

  // Updates the value of a knob
  const updateValue = (key: string, value: any) => {
    setState({
      meta,
      StoryFn,
      knobValues: { ...knobValues, [key]: value },
    });
  };

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
          const knobValues = { ...meta.args, ...StoryFn?.args };

          // TODO: Remove comment
          // console.log({ meta, args, StoryFn });
          setState({ meta, knobValues, StoryFn });
        }
      })
      .catch(err => {
        console.warn(err);
      });
  }, [componentName]);

  const { props } = tsDoc?.find(
    doc => doc.displayName === pascalcase(componentName),
  ) ?? {
    props: undefined,
  };

  // Filter out component props we don't want knobs for.
  // These are the props we display in the Knobs
  const componentProps = getComponentProps(props).filter(prop => {
    const isIgnored = ignoreProps.includes(prop.name);
    const isExcludedBySB = meta?.parameters?.controls?.exclude?.includes(
      prop.name,
    );
    const isControlNone = ['none', false].includes(
      meta?.argTypes?.[prop.name]?.control,
    );
    return !isIgnored && !isExcludedBySB && !isControlNone;
  });

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
        {componentProps &&
          componentProps.map(componentProp => (
            <KnobRow
              key={componentProp.name}
              darkMode={darkMode}
              componentProp={componentProp}
              SBArgType={{
                ...meta?.argTypes?.[componentProp.name],
                ...StoryFn?.argTypes?.[componentProp.name],
              }}
              knobValue={
                knobValues?.[componentProp.name] ?? componentProp.defaultValue
              }
              setKnobValue={updateValue}
            />
          ))}
      </div>
    </Card>
  );
};
