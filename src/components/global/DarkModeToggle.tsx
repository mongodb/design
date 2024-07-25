import React from "react";

import Icon from "@leafygreen-ui/icon";
import IconButton from "@leafygreen-ui/icon-button/";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";

export function DarkModeToggle({ }: {}) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <IconButton
      aria-label="dark mode toggle"
      onClick={() => setDarkMode(!darkMode)}
      darkMode={darkMode}
    >
      <Icon glyph={darkMode ? 'Sun' : 'Moon'} />
    </IconButton>
  );
}
