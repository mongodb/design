"use client";

import React from "react";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { palette } from "@leafygreen-ui/palette";

export function Display(props: JSX.IntrinsicElements["svg"]) {
  const { darkMode } = useDarkMode();
  const strokeColor = darkMode ? palette.white : palette.black;

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M54.9999 44.1667H4.99992C4.08325 44.1667 3.33325 43.4167 3.33325 42.5V9.16667C3.33325 8.25 4.08325 7.5 4.99992 7.5H54.9999C55.9166 7.5 56.6666 8.25 56.6666 9.16667V42.5C56.6666 43.4167 55.9166 44.1667 54.9999 44.1667Z"
        stroke={strokeColor}
        strokeMiterlimit="10"
      />
      <path
        d="M54.9999 44.167H4.91659C3.99992 44.167 3.33325 43.417 3.33325 42.5837V39.167H56.6666V42.5837C56.5833 43.417 55.8333 44.167 54.9999 44.167Z"
        fill="#00ED64"
        stroke={strokeColor}
        strokeMiterlimit="10"
      />
      <path
        d="M4.99984 7.5H55.0832C55.9998 7.5 56.6665 8.25 56.6665 9.08333V12.5H3.33317V9.08333C3.4165 8.25 4.1665 7.5 4.99984 7.5Z"
        fill="#00ED64"
        stroke={strokeColor}
        strokeMiterlimit="10"
      />
      <path
        d="M24.6527 44.167L22.5643 50.917C22.3137 51.8337 22.8149 52.5003 23.7338 52.5003H37.0995C38.0184 52.5003 38.5196 51.7503 38.269 50.917L36.1806 44.167"
        stroke={strokeColor}
        strokeMiterlimit="10"
      />
    </svg>
  );
}
