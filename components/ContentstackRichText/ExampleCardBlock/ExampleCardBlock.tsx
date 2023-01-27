import styled from '@emotion/styled';

import { css } from '@leafygreen-ui/emotion';
import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize, spacing, typeScales } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';

import { ExampleCardBlockProps } from '../types';

import { BorderColors, IconColors, Icons, TextColors } from './constants';
import ImageContainer from './ImageContainer';

const TextContainer = styled('div')`
  display: flex;
  gap: 6px;
  margin-left: ${spacing[2]}px;
`;

const ExampleCardBlock = ({ entry }: { entry: ExampleCardBlockProps }) => {
  const IconComponent = Icons[entry.variant];
  return (
    <div>
      <ImageContainer color={BorderColors[entry.variant]}>
        {/**
         * TODO: fix this
         * Contentstack doesn't send image sizes,
         * so we can't appropriately size a Next/Image component.
         *
         * Also can't use `ContentstackImage`, since the `entry.image` object
         * is not a `CSNode` type
         */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={entry.image.url} alt={entry.title} />
      </ImageContainer>
      <TextContainer>
        <IconComponent
          fill={IconColors[entry.variant]}
          width={spacing[4]}
          height={spacing[4]}
          css={css`
            width: auto;
          `}
        />
        <div>
          {/* TODO: Convert this to use styled */}
          <Body
            className={css`
              color: ${TextColors[entry.variant]};
              font-size: ${BaseFontSize.Body1}px;
              line-height: ${typeScales.body1.lineHeight}px;
            `}
          >
            <b>{entry.header_text}</b>
          </Body>
          <Body
            className={css`
              color: ${palette.gray.dark1};
              font-size: ${BaseFontSize.Body1}px;
              line-height: ${typeScales.body1.lineHeight}px;
            `}
          >
            {entry.subtext}
          </Body>
        </div>
      </TextContainer>
    </div>
  );
};

export default ExampleCardBlock;
