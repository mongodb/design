'use client';

import { css } from '@emotion/css';
import { color } from '@leafygreen-ui/tokens';
import LeafyGreenProvider, {
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import { RootStyleRegistry } from '@/components/global';
import { useMediaQuery } from '@/hooks';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [prefersDarkMode] = useMediaQuery(['(prefers-color-scheme: dark)'], {
    fallback: [true],
  });

  const { darkMode } = useDarkMode(prefersDarkMode);

  return (
    <>
      <html lang="en">
        <RootStyleRegistry>
          <>
            <body
              className={css`
                background-color: ${darkMode
                  ? color.dark.background.primary.default
                  : color.light.background.primary.default};
              `}
            >
              <LeafyGreenProvider darkMode={darkMode}>
                {children}
              </LeafyGreenProvider>

              <GoogleAnalytics gaId="G-VFTH2BJVVK" />
            </body>
          </>
        </RootStyleRegistry>
      </html>
    </>
  );
}
