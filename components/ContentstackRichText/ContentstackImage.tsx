import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

const ContentstackImage = ({ content }) => {
  const attrs = content.attrs;
  const [width, setWidth] = useState<number>(attrs['width'] ?? 700);
  const [height, setHeight] = useState<number>(attrs['height'] ?? 300);

  const handleLoadingComplete = img => {
    if (img.naturalWidth) setWidth(img.naturalWidth);
    if (img.naturalHeight) setHeight(img.naturalHeight);
  };

  return (
    <div
      css={css`
        max-width: 100%;
      `}
    >
      <Image
        src={attrs['asset-link']}
        layout="intrinsic"
        alt={attrs['asset-name']}
        onLoadingComplete={handleLoadingComplete}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ContentstackImage;
