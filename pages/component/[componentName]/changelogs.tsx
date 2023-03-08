import { ReactElement, useState } from 'react';
import ComponentLayout from 'layouts/ComponentLayout';
import { containerPadding } from 'styles/globals';
import { getChangelog, getDependencyDocumentation } from 'utils/_getComponentResources';
import { getComponent } from 'utils/ContentStack/getContentstackResources';
import { getStaticComponentPaths } from 'utils/ContentStack/getStaticComponent';

import { spacing } from '@leafygreen-ui/tokens';

import { css, cx } from '@emotion/css';
import { palette } from '@leafygreen-ui/palette';
import { SegmentedControl, SegmentedControlOption } from '@leafygreen-ui/segmented-control';
import FigmaIcon from 'components/icons/FigmaIcon';
import ReactIcon from 'components/icons/ReactIcon';

interface DocsPageProps {
  componentName: string;
  changelog: string;
  reactVersion: string;
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
        <SegmentedControl
          onChange={setDisplayedLogs}
        >
          <SegmentedControlOption value="figma">
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <FigmaIcon />
              <span style={{ marginLeft: '4px' }}>
                Figma - v{'0.0.0'}
              </span>
            </div>
          </SegmentedControlOption>
          <SegmentedControlOption value="react">
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <ReactIcon />
              <span style={{ marginLeft: '4px' }}>
                React - v{reactVersion}
              </span>
            </div>
          </SegmentedControlOption>
        </SegmentedControl>
      </div>
      <div className={css`padding: ${spacing[3]}px 0;`}>
        {displayedLogs === 'figma' ? (
          <>Figma logs</>
        ) : (
          <div
            className={changelogStyles}
            dangerouslySetInnerHTML={{ __html: changelog }}
          ></div>
        )}
      </div>
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
  return { props: { componentName, component, changelog, reactVersion } };
}

export default ComponentChangelogs;
