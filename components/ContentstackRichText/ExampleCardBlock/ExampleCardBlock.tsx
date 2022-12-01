import { css } from '@emotion/react';
import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize, spacing, typeScales } from '@leafygreen-ui/tokens';
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
          margin-left: ${spacing[2]}px;
        `}
      >
        <IconComponent
          fill={IconColors[entry.variant]}
          width={spacing[4]}
          height={spacing[4]}
        />
        <div
          css={css`
            margin: 2px ${spacing[1]}px;
          `}
        >
          <Body
            css={css`
              color: ${TextColors[entry.variant]};
              font-size: ${BaseFontSize.Body1}px;
              line-height: ${typeScales.body1.lineHeight}px;
            `}
          >
            <b>{entry.header_text}</b>
          </Body>
          <Body
            css={css`
              color: ${palette.gray.dark1};
              font-size: ${BaseFontSize.Body1}px;
              line-height: ${typeScales.body1.lineHeight}px;
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
