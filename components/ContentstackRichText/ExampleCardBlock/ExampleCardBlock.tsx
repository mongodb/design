import { css } from '@emotion/react';
import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize, spacing } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';
import ImageContainer from './ImageContainer';
import { BorderColors, IconColors, Icons, TextColors } from './constants';

const ExampleCardBlock = ({ entry }) => {
  const IconComponent = Icons[entry.variant];
  return (
    <div>
      <ImageContainer color={BorderColors[entry.variant]}>
        <img src={entry.image.url} alt={entry.title} />
      </ImageContainer>
      <div
        css={css`
          display: flex;
          align-items: start;
        `}
      >
        <IconComponent
          fill={IconColors[entry.variant]}
          width={24}
          height={24}
          css={css`
            margin-top: 2px;
          `}
        />
        <div
          css={css`
            margin-left: ${spacing[1]}px;
          `}
        >
          <Body
            css={css`
              color: ${TextColors[entry.variant]};
              font-size: ${BaseFontSize.Body1}px;
            `}
          >
            <b>{entry.header_text}</b>
          </Body>
          <Body
            css={css`
              color: ${palette.gray.dark1};
              font-size: ${BaseFontSize.Body1}px;
            `}
          >
            {entry.subtext}
          </Body>
        </div>
      </div>
    </div>
  );
};

export default ExampleCardBlock;
