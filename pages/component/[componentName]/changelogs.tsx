import { ReactElement, useState } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { containerPadding } from 'styles/globals';
import { getChangelog } from 'utils/_getComponentResources';
import { getComponentFigmaVersions } from 'utils/ContentStack/FigmaVersion';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';

import FigmaIcon from 'components/icons/FigmaIcon';
import ReactIcon from 'components/icons/ReactIcon';

import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import {
  SegmentedControl,
  SegmentedControlOption,
} from '@leafygreen-ui/segmented-control';
import { spacing } from '@leafygreen-ui/tokens';
import { Body, H3, Link } from '@leafygreen-ui/typography';

import { css, cx } from '@emotion/css';

interface DocsPageProps {
  componentName: string;
  changelog: string;
  reactVersion: string;
  figmaChangelog: any;
}

const changelogStyles = css`
  color: ${palette.gray.dark3};
  pointer-events: none;

  & > h2 {
    padding-top: ${spacing[3]}px;
    border-top: 1px solid ${palette.gray.light2};
  }

  a {
    color: ${palette.gray.dark3};
    text-decoration: none;
  }
`;

const ComponentChangelogs = ({
  componentName,
  changelog,
  reactVersion,
  figmaChangelog,
}: DocsPageProps) => {
  const [displayedLogs, setDisplayedLogs] = useState<string>('figma');
  return (
    <div
      className={cx(
        containerPadding,
        css`
          padding: ${spacing[4]}px 0;
        `,
      )}
    >
      <div style={{ width: '400px' }}>
        <SegmentedControl onChange={setDisplayedLogs}>
          <SegmentedControlOption value="figma">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FigmaIcon />
              <span style={{ marginLeft: '4px' }}>
                Figma - v{figmaChangelog[0].title}
              </span>
            </div>
          </SegmentedControlOption>
          <SegmentedControlOption value="react">
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <ReactIcon />
              <span style={{ marginLeft: '4px' }}>React - v{reactVersion}</span>
            </div>
          </SegmentedControlOption>
        </SegmentedControl>
      </div>
      <div
        className={css`
          padding: ${spacing[3]}px 0;
        `}
      >
        {displayedLogs === 'figma' ? (
          <>
            {figmaChangelog.map(figmaVersion => (
              <div
                key={JSON.stringify(figmaVersion)}
                className={css`
                  margin-bottom: ${spacing[3]}px;
                `}
              >
                <H3>{figmaVersion.title}</H3>
                <Body
                  className={css`
                    margin-bottom: ${spacing[2]}px;
                  `}
                >
                  {figmaVersion.description}
                </Body>
                <div>
                  {figmaVersion.figma_link && (
                    <Link
                      target="_blank"
                      href={figmaVersion.figma_link}
                      className={css`
                        span {
                          display: inline-flex;
                          align-items: center;
                        }
                      `}
                    >
                      <FigmaIcon />
                      Figma Version v{figmaVersion.title}
                    </Link>
                  )}
                  {figmaVersion.react_version && (
                    <Link
                      target="_blank"
                      href={`https://github.com/mongodb/leafygreen-ui/blob/main/packages/${componentName}/CHANGELOG.md#${figmaVersion.react_version.replaceAll(
                        '.',
                        '',
                      )}`}
                      className={css`
                        span {
                          display: inline-flex;
                          align-items: center;
                        }
                      `}
                    >
                      <ReactIcon />
                      React Version v{figmaVersion.react_version}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div
            className={changelogStyles}
            dangerouslySetInnerHTML={{ __html: changelog }}
          ></div>
        )}
      </div>
      <Button
        onClick={() => {
          // TODO: REMOVE THIS
          const description = '[PATCH] Banner - Rectangle color changed';
          const body = JSON.stringify({
            retries: 2,
            file_key: 'Fgm49QtdHOUzuIXe51ACtK',
            passcode: 'testtest',
            file_name: 'Skunkworks Test DS',
            timestamp: '2023-03-09T20:52:46Z',
            event_type: 'LIBRARY_PUBLISH',
            webhook_id: '494792',
            description:
              '[PATCH] Banner - Rectangle color changed\n\n[PATCH] Badge - Rectangle2 color changed',
            triggered_by: {
              id: '1073076194888035244',
              handle: 'Sean Park',
            },
            created_styles: [],
            deleted_styles: [],
            modified_styles: [],
            protocol_version: '2',
            created_components: [],
            deleted_components: [],
            modified_components: [
              {
                key: '1a0a4d0dcb37cba2d3a4ce6ffe440e3f3a3a2515',
                name: 'Rectangle',
              },
            ],
          });

          fetch('../../../api/figma-publish', { method: 'POST', body });
          // .then(data => data.json())
          // .then(resp => {
          //   console.log(resp);
          // });
        }}
      >
        Test publish
      </Button>
    </div>
  );
};

ComponentChangelogs.getLayout = function getLayout(page: ReactElement) {
  return (
    <ComponentLayout component={page.props.component}>{page}</ComponentLayout>
  );
};

export const getStaticPaths = getStaticComponentPaths;

export async function getStaticProps({ params: { componentName } }) {
  const changelog = await getChangelog(componentName);
  const reactVersion = changelog?.split('h2')[1]?.replace(/[>/<]+/g, '');

  const component = await getComponent(componentName, {
    includeContent: false,
  });
  const figmaChangelog = await getComponentFigmaVersions(
    component ? component.uid : '',
  );

  console.log(figmaChangelog[0].component);

  return {
    props: {
      componentName,
      component,
      changelog,
      reactVersion,
      figmaChangelog,
    },
  };
}

export default ComponentChangelogs;
