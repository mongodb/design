import { useState } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

import { spacing } from '@leafygreen-ui/tokens';

import { CSNode } from './types';

// TODO: restrict the type of `content` more (should assert it has certain attrs)
const ContentstackImage = ({
  content,
  ...props
}: {
  content: CSNode;
  [key: string]: any;
}) => {
  const attrs = content.attrs;

  const [width, setWidth] = useState<number>(attrs['width'] ?? 700);
  const [height, setHeight] = useState<number>(attrs['height'] ?? 300);

  const handleLoadingComplete = (img: {
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    // Multiply by 2 since we're using @2x
    if (img.naturalWidth) setWidth(img.naturalWidth * 2);
    if (img.naturalHeight) setHeight(img.naturalHeight * 2);
  };

  return (
    <div
      css={
        !props.isNested &&
        css`
          max-width: 100%;
          margin-top: ${spacing[5]}px;
          margin-bottom: ${spacing[4]}px;
        `
      }
      {...props}
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
