'use client';

import { css } from '@emotion/css';
import { spacing } from '@leafygreen-ui/tokens';
import {
  InstallCard,
  PropTableState,
  PropsTable,
  VersionCard,
} from '@/components/code-docs';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface CodeDocsContentProps {
  componentName: string;
  componentProps?: Array<PropTableState>;
  changelog: string | null;
}

export const CodeDocsContent = ({
  componentName,
  componentProps,
  changelog,
}: CodeDocsContentProps) => {
  const [isTablet] = useMediaQuery(['(max-width: 768px)'], {
    fallback: [true],
  });

  console.log(componentProps);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: ${spacing[800]}px;
      `}
    >
      <div
        className={css`
          display: grid;
          gap: ${spacing[800]}px;
          grid-template-columns: ${isTablet ? '1fr' : '2fr 1fr'};
          max-width: 100%;
        `}
      >
        <InstallCard component={componentName} />

        <VersionCard component={componentName} changelog={changelog} />
      </div>

      {componentProps?.map(({ name, props }) => {
        return <PropsTable key={name} name={name} props={props} />;
      })}
    </div>
  );
};
