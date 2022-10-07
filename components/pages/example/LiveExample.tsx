import { useCallback, useEffect, useReducer } from 'react';
import { kebabCase } from 'lodash';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { css } from '@leafygreen-ui/emotion';
import { H2 } from '@leafygreen-ui/typography';
import Card from '@leafygreen-ui/card';
import Code from '@leafygreen-ui/code';
import pascalcase from 'pascalcase';
import { getComponentStory } from 'utils/getComponentStory';
import { BaseLayoutProps } from 'utils/types';
import { getComponentProps } from 'utils/tsdoc.utils';
import { KnobRow } from './KnobRow';
import { getStoryCode } from './getStoryCode';
import { spacing } from '@leafygreen-ui/tokens';

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
  args?: { [arg: string]: any };
  StoryFn?: ComponentStoryFn<any>;
  storyCode?: string;
}

const initialState: LiveExampleState = {
  meta: undefined,
  args: undefined,
  StoryFn: undefined,
  storyCode: undefined,
};

export const LiveExample = ({
  componentName,
  tsDoc,
}: Pick<BaseLayoutProps, 'componentName' | 'tsDoc'>) => {
  const [{ meta, args, StoryFn, storyCode }, setState] = useReducer(
    (state: LiveExampleState, newState: LiveExampleState) => {
      return {
        ...state,
        ...newState,
      };
    },
    initialState,
  );
  const setArgs = (newArgs: LiveExampleState['args']) =>
    setState({ meta, StoryFn, storyCode, args: newArgs });
  const setCode = useCallback(
    (newCode: LiveExampleState['storyCode']) =>
      setState({ meta, args, StoryFn, storyCode: newCode }),
    [StoryFn, args, meta],
  );
  const darkMode = args?.darkMode;

  // Fetch Story if/when component changes
  useEffect(() => {
    const kebabName = kebabCase(componentName);
    getComponentStory(kebabName)
      .then(module => {
        if (module) {
          const { default: meta, ...stories } = module;

          const storyName: string =
            meta.parameters?.default ?? Object.keys(stories)[0];
          const StoryFn = stories[storyName];

          const args = { ...meta.args, ...StoryFn?.args };

          // const storySource = parameters?.storySource;

          // const storyCode = storySource
          //   ? extractSource(
          //       storySource.locationsMap[toId(storyName)],
          //       storySource.source.split('\n'),
          //     ) ?? undefined
          //   : undefined;

          const storyCode = getStoryCode(componentName, args);

          // console.log({ meta, args, StoryFn, storyCode });
          setState({ meta, args, StoryFn, storyCode });
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
  const knobProps = getComponentProps(props).filter(prop => {
    const isIgnored = ignoreProps.includes(prop.name);
    const isExcludedBySB = meta?.parameters?.controls?.exclude?.includes(
      prop.name,
    );
    const isControlNone = ['none', false].includes(
      meta?.argTypes?.[prop.name]?.control,
    );
    return !isIgnored && !isExcludedBySB && !isControlNone;
  });

  useEffect(() => {
    const storyCode = getStoryCode(componentName, args);
    setCode(storyCode);
  }, [args, componentName, setCode]);

  return (
    <Card
      darkMode={darkMode}
      className={css`
        margin-block: 2em;
      `}
    >
      <div
        className={css`
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          align-items: center;
          justify-items: center;
          min-height: 33vh;
          margin: -${spacing[4]}px; // Offset default card padding
          margin-bottom: 0;
        `}
      >
        <div className={css``}>
          {StoryFn ? <StoryFn {...args} /> : <H2>No Story found</H2>}
        </div>
        <div
          className={css`
            width: 100%;
            height: 100%;

            & > * {
              height: 100%;
              border-radius: 0 24px 0 0;

              & > * {
                height: 100%;
              }
            }
          `}
        >
          <Code
            className={css`
              height: 100%;
              min-height: 33vh;
            `}
            darkMode={darkMode}
            language="js"
          >
            {storyCode ?? ''}
          </Code>
        </div>
      </div>
      <div>
        {knobProps &&
          knobProps.map(prop => (
            <KnobRow
              key={prop.name}
              prop={prop}
              darkMode={darkMode}
              argType={{
                ...meta?.argTypes?.[prop.name],
                ...StoryFn?.argTypes?.[prop.name],
              }}
              args={args}
              setArg={(key: string, value: any) => {
                setArgs({ ...args, [key]: value });
              }}
            />
          ))}
      </div>
    </Card>
  );
};
