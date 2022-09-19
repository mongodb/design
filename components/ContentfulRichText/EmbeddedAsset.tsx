/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled';
import Image from 'next/image';
import prependUrl from 'utils/prependUrl';
import { GlobalStyles } from './styles';

const ImageWrapper = styled.div`
  ${GlobalStyles}
  max-width: 100%;
`;

const EmbeddedAsset = (node) => {
  if (!node.data.target.fields) {
    return <>Invalid asset.</>;
  }

  const { title, file } = node.data.target.fields;
  const { width, height } = file.details.image;
  const mimeType = file.contentType;
  const mimeGroup = mimeType.split('/')[0];

  switch (mimeGroup) {
    case 'image':
      return <ImageWrapper css={{ width }}><Image alt={title} src={prependUrl(file.url)} layout="responsive" width={width} height={height} /></ImageWrapper>;
    default:
      return <h1>Unsupported embedded-asset-block mimeGroup: ${mimeGroup!}</h1>;
  }
};

export default EmbeddedAsset;
