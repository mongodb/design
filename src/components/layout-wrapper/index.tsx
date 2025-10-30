'use client';

import { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { color } from '@leafygreen-ui/tokens';
import LeafyGreenProvider, {
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import { RootStyleRegistry } from '@/components/global';
import { useMediaQuery } from '@/hooks';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ContentStackContextProvider } from '@/contexts/ContentStackContext';
import { ComponentFields } from '@/lib/contentStack/types';

function getLocalStorageDarkMode(): boolean | null {
  if (typeof window === "undefined") { 
    return null;
  }

  const localStorageItem = localStorage.getItem('darkMode');

  if (localStorageItem === 'true') {
    return true;
  }

  if (localStorageItem === 'false') {
    return false;
  }

  return null;
}

export default function LayoutWrapper({
  children,
  components,
}: Readonly<{
  children: React.ReactNode;
  components: Array<ComponentFields>;
}>) {
  const [prefersDarkMode] = useMediaQuery(['(prefers-color-scheme: dark)'], {
    fallback: [true],
  });
  const [calculatedDarkMode, setCalculatedDarkMode] = useState(prefersDarkMode || false);

  useEffect(() => {
    // If the user has a dark mode preference stored in localStorage, use that instead of the system preference.
    // This allows users to persist their dark mode preference across sessions.
    // 
    // We wrap this in a useEffect to ensure it only runs on the client side and not during server-side rendering. 
    // This has the side-effect of a small flicker of dark mode on the initial render if the user's setting is
    // light mode, but that's better than not saving their preference at all when the user refreshes the page.
    const localStorageDarkMode = getLocalStorageDarkMode();
    setCalculatedDarkMode(localStorageDarkMode != null ? localStorageDarkMode : prefersDarkMode)
  }, []);
    
  const { darkMode } = useDarkMode(calculatedDarkMode);

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
                <ContentStackContextProvider components={components}>
                  {children}
                </ContentStackContextProvider>
              </LeafyGreenProvider>

              <GoogleAnalytics gaId="G-VFTH2BJVVK" />
            </body>
          </>
        </RootStyleRegistry>
      </html>
    </>
  );
}
