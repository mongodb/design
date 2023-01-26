import { useState } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

import { CSNode } from './types';

// TODO: restrict the type of `content` more (should assert it has certain attrs)
const ContentstackImage = ({ content }: { content: CSNode }) => {
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
