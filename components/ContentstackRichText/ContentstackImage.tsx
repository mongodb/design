/** @jsx jsx */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

const ContentstackImage = ({ content }) => {
  const attrs = content.attrs;
  const [width, setWidth] = useState<number>(attrs['width']);
  const [height, setHeight] = useState<number>(attrs['height']);

  const handleLoadingComplete = img => {
    setWidth(img.naturalWidth);
    setHeight(img.naturalHeight);
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
        onLoadingComplete={handleLoadingComplete}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ContentstackImage;
