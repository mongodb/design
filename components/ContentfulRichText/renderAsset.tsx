import Image from '../Image';

const renderAsset = node => {
  if (!node.data.target.fields) {
    return <>Invalid asset.</>;
  }

  const { title, file } = node.data.target.fields;
  const mimeType = file.contentType;
  const mimeGroup = mimeType.split('/')[0];

  switch (mimeGroup) {
    case 'image':
      return <Image alt={title} src={file.url} width="100%" />;
    default:
      return <h1>Unsupported embedded-asset-block mimeGroup: ${mimeGroup!}</h1>;
  }
};

export default renderAsset;