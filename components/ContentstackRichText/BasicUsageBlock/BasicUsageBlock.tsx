import styled from '@emotion/styled';

import { css } from '@leafygreen-ui/emotion';
import CheckmarkWithCircleIcon from '@leafygreen-ui/icon/dist/CheckmarkWithCircle';
import XWithCircle from '@leafygreen-ui/icon/dist/XWithCircle';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';

import ContentstackRichText from '..';

const HeadingWrapper = styled('div')`
  align-items: center;
  display: flex;
`;

// TODO: Convert this to use `styled`
const StyledBody = ({ children, color }) => (
  <Body
    className={css`
      display: inline-flex;
      margin-left: 6px;
      color: ${color};
    `}
  >
    {children}
  </Body>
);

const BasicUsageBlock = ({ entry }) => {
  return (
    <div>
      <HeadingWrapper>
        <CheckmarkWithCircleIcon
          fill={palette.green.dark1}
          width={spacing[4]}
          height={spacing[4]}
        />
        <StyledBody color={palette.green.dark2}>
          <b>Do</b>
        </StyledBody>
      </HeadingWrapper>
      <ContentstackRichText content={entry.do_s} />
      <HeadingWrapper>
        <XWithCircle
          fill={palette.red.base}
          width={spacing[4]}
          height={spacing[4]}
        />
        <StyledBody color={palette.red.base}>
          <b>Don&apos;t</b>
        </StyledBody>
      </HeadingWrapper>
      <ContentstackRichText content={entry.don_ts} />
    </div>
  );
};

export default BasicUsageBlock;
