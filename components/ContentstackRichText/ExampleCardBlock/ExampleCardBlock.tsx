import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize, spacing, typeScales } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';
import { BodyProps } from '@leafygreen-ui/typography/dist/Body/Body.types';

import { ExampleCardBlockProps } from '../types';

import {
  BorderColors,
  IconColors,
  Icons,
  TextColors,
  VariantHeaders,
} from './constants';
import ImageContainer from './ImageContainer';

const ExampleCardBlockWrapper = styled.div`
  margin-block: ${spacing[5] + spacing[2]}px;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-left: ${spacing[2]}px;
`;

const HeaderText = styled(Body)<BodyProps & { color: string }>`
  color: ${props => props.color};
  font-size: ${BaseFontSize.Body1}px;
  line-height: ${typeScales.body1.lineHeight}px;
`;

const Subtext = styled(Body)<BodyProps>`
  color: ${palette.gray.dark1};
  font-size: ${BaseFontSize.Body1}px;
  line-height: ${typeScales.body1.lineHeight}px;
`;

const ExampleCardBlock = ({ entry }: { entry: ExampleCardBlockProps }) => {
  const IconComponent = Icons[entry.variant];
  return (
    <ExampleCardBlockWrapper>
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
        <img src={entry.image?.url} alt={entry.title} />
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
          <HeaderText color={TextColors[entry.variant]}>
            <b>{VariantHeaders[entry.variant]}</b>
          </HeaderText>
          <Subtext>{entry.subtext}</Subtext>
        </div>
      </TextContainer>
    </ExampleCardBlockWrapper>
  );
};

export default ExampleCardBlock;
