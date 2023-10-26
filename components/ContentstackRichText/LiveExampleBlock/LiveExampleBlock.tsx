import { useState } from 'react';
import styled from '@emotion/styled';
import { ComponentStoryFn } from '@storybook/react';
import { useGuidelinesContext } from 'contexts/GuidelinesContext';
import { getComponentStories } from 'utils/getComponentStories';

import { useAsyncEffect } from 'components/pages/example/useAsyncEffect';

import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import Code from '@leafygreen-ui/code';
import Icon from '@leafygreen-ui/icon';
import { spacing } from '@leafygreen-ui/tokens';

const CodeWrapper = styled('div')`
  > div {
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow: hidden;

    & > div:before,
    & > div:after {
      z-index: 0;
    }
  }
`;

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
          <Card style={{ padding: 0, boxShadow: 'none' }}>
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
                  padding: `${spacing[3]}px`,
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
            {showCode && sourceCode && (
              <CodeWrapper>
                <Code language="js">{sourceCode}</Code>
              </CodeWrapper>
            )}
          </Card>
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default LiveExampleBlock;
