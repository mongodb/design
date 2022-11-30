import { css } from '@emotion/react';
import { palette } from '@leafygreen-ui/palette';
import { Body } from '@leafygreen-ui/typography';

const StyledListItem = ({ title, description }) => {
  return (
    <li
      css={css`
        counter-increment: step-counter;
        margin-bottom: 4px;
        position: relative;
        &::before {
          content: counter(step-counter);
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border: 1px solid ${palette.black};
          border-radius: 50%;
          width: 17px;
          height: 17px;
          line-height: 17px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 1px 1px 0px ${palette.black};
        }
      `}
    >
      <Body
        css={css`
          display: inline-flex;
          margin-left: 4px;
          font-size: 13px;
        `}
      >
        <b>
          {title}
          {description ? ':' : ''}&nbsp;
        </b>
        <span
          css={css`
            color: ${palette.gray.dark1};
          `}
        >
          {description}
        </span>
      </Body>
    </li>
  );
};

export default StyledListItem;
