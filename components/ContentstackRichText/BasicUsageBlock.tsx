import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';
import { Body } from '@leafygreen-ui/typography';
import IconDo from 'components/icons/IconDo';
import IconDont from 'components/icons/IconDont';
import ContentstackRichText from '.';

const HeadingWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const BasicUsageBlock = ({ entry }) => {
  return (
    <div>
      <HeadingWrapper>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <IconDo />
          <Body
            color={palette.green.dark1}
            css={css`
              display: inline-flex;
              margin-left: 8px;
              color: ${palette.green.dark2};
            `}
          >
            <b>Do</b>
          </Body>
        </div>
      </HeadingWrapper>
      <ContentstackRichText content={entry.do_s} />
      <HeadingWrapper>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <IconDont />
          <Body
            color={palette.green.dark1}
            css={css`
              display: inline-flex;
              margin-left: 8px;
              color: ${palette.red.dark2};
            `}
          >
            <b>Don&apos;t</b>
          </Body>
        </div>
      </HeadingWrapper>
      <ContentstackRichText content={entry.don_ts} />
    </div>
  );
};

export default BasicUsageBlock;
