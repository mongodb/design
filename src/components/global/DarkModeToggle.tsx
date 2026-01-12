'use client';

import React from 'react';

import Icon from '@leafygreen-ui/icon';
import IconButton from '@leafygreen-ui/icon-button/';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

export function DarkModeToggle({}: {}) {
  const { darkMode, setDarkMode } = useDarkMode();

  function setMode(mode: boolean) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', mode.toString());
    }

    setDarkMode(mode);
  }

  return (
    <IconButton
      aria-label="dark mode toggle"
      onClick={() => setMode(!darkMode)}
      darkMode={darkMode}
    >
      <Icon glyph={darkMode ? 'Sun' : 'Moon'} />
    </IconButton>
  );
}
