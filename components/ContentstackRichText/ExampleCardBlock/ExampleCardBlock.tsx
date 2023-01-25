import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize, spacing, typeScales } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';

import { ExampleCardBlockProps } from '../types';

import { BorderColors, IconColors, Icons, TextColors } from './constants';
import ImageContainer from './ImageContainer';

const TextContainer = styled('div')`
  margin-left: ${spacing[2]}px;
`;

const HeaderText = styled(Body)`
  color: ${props => props.color};
  font-size: ${BaseFontSize.Body1}px;
  line-height: ${typeScales.body1.lineHeight}px;
`;

const Subtext = styled(Body)`
  color: ${palette.gray.dark1};
  font-size: ${BaseFontSize.Body1}px;
  line-height: ${typeScales.body1.lineHeight}px;
`;

const ExampleCardBlock = ({ entry }: { entry: ExampleCardBlockProps }) => {
  const IconComponent = Icons[entry.variant];
  return (
    <div>
      <ImageContainer color={BorderColors[entry.variant]}>
        <Image src={entry.image.url} alt={entry.title} layout="fill" />
      </ImageContainer>
      <TextContainer>
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
          <HeaderText color={TextColors[entry.variant]}>
            <b>{entry.header_text}</b>
          </HeaderText>
          <Subtext>{entry.subtext}</Subtext>
        </div>
      </TextContainer>
    </div>
  );
};

export default ExampleCardBlock;
