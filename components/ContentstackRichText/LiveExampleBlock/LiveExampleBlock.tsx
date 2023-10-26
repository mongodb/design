import { useEffect, useState } from 'react';
import { ComponentStoryFn } from '@storybook/react';
import { useGuidelinesContext } from 'contexts/GuidelinesContext';
import { getComponentStories, ModuleType } from 'utils/getComponentStories';

import { useAsyncEffect } from 'components/pages/example/useAsyncEffect';

import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import Code from '@leafygreen-ui/code';
import Icon from '@leafygreen-ui/icon';
import { spacing } from '@leafygreen-ui/tokens';

const LiveExampleBlock = ({ storyName }: { storyName: string }) => {
  const [StoryFn, setStoryFn] = useState<
    ComponentStoryFn<any> & React.FunctionComponent<any>
  >();
  const [args, setArgs] = useState<any>({});
  const [sourceCode, setSourceCode] = useState<string>();
  const { componentName } = useGuidelinesContext();
  const [showCode, setShowCode] = useState<boolean>(true);
  const toggleShowCode = () => setShowCode(sc => !sc);

  useAsyncEffect(
    // @ts-ignore conditional checked in useAsyncEffect
    () => getComponentStories(componentName),
    {
      then: module => {
        if (module) {
          const { default: meta, ...stories } = module;
          setStoryFn(() => stories[storyName]);
          setArgs({ ...meta.args, ...stories[storyName].args });
          setSourceCode(stories[storyName]?.parameters?.sourceCode);
        } else {
          console.error('Error parsing module', module);
        }
      },
      catch: err => {
        console.error('Error loading LiveExample');
        console.error(err);
      },
    },
    !!componentName,
    [componentName],
  );

  return (
    <>
      {StoryFn ? (
        <div>
          <Card>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ padding: `${spacing[5]}px` }}>
                <StoryFn {...args} />
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  size="xsmall"
                  onClick={toggleShowCode}
                  leftGlyph={
                    <Icon glyph={showCode ? 'VisibilityOff' : 'Visibility'} />
                  }
                >
                  {showCode ? 'Hide' : 'Show'} Code
                </Button>
              </div>
            </div>
          </Card>
          {showCode && sourceCode && <Code language="tsx">{sourceCode}</Code>}
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default LiveExampleBlock;
