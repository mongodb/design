import { startCase } from 'lodash';

import FigmaIcon from 'components/icons/FigmaIcon';
import ReactIcon from 'components/icons/ReactIcon';

import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import {
  Body,
  Disclaimer,
  H3,
  Link,
  Subtitle,
} from '@leafygreen-ui/typography';

import { css } from '@emotion/css';

const FigmaChangelogs = ({ figmaEntries }) => {
  return (
    <>
      {figmaEntries &&
        figmaEntries.map(figmaVersion => (
          <div
            key={JSON.stringify(figmaVersion)}
            className={css`
              padding: ${spacing[3]}px 0 ${spacing[2]}px;
              &:not(:last-child) {
                border-bottom: 1px solid ${palette.gray.light2};
              }
            `}
          >
            <Disclaimer>
              {new Date(figmaVersion.created_at).toDateString()}
            </Disclaimer>
            <H3 as="h2">{figmaVersion.version}</H3>
            <Subtitle>
              {startCase(figmaVersion.update_type?.toLowerCase())}
            </Subtitle>
            <Body
              className={css`
                margin-bottom: ${spacing[2]}px;
              `}
            >
              {figmaVersion.description}
            </Body>
            <div>
              {figmaVersion.figma_url && (
                <Link
                  target="_blank"
                  href={figmaVersion.figma_url}
                  className={css`
                    span {
                      display: inline-flex;
                      align-items: center;
                    }
                  `}
                >
                  <FigmaIcon />
                  Figma Version v{figmaVersion.version}
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
  );
};

export default FigmaChangelogs;
