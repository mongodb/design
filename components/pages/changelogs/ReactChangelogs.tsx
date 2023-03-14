import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

import { css } from '@emotion/css';

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

const ReactChangelogs = ({ reactChangelogs }) => {
  return (
    <div
      className={changelogStyles}
      dangerouslySetInnerHTML={{ __html: reactChangelogs }}
    ></div>
  );
};

export default ReactChangelogs;
