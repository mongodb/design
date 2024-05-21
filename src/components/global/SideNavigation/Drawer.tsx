'use client';

import React, { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/css';
// @ts-expect-error
import XIcon from '@leafygreen-ui/icon/dist/XWithCircle';
import IconButton from '@leafygreen-ui/icon-button';
import { color, spacing, transitionDuration } from '@leafygreen-ui/tokens';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

const slideIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0.5;
    }
`;

export const Drawer = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const { theme } = useDarkMode();
  const [firstMount, setFirstMount] = useState(false);

  useEffect(() => {
    if (isOpen && !firstMount) {
      setFirstMount(true);
    }
  }, [isOpen, firstMount]);

  if (!firstMount) {
    return null;
  }

  return (
    <>
      <div
        className={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background-color: ${color[theme].background.secondary.default};
          color: white;
          overflow: hidden;
          transform: translateX(${isOpen && !firstMount ? '0' : '-100%'});
          animation: ${isOpen ? slideIn : slideOut}
            ${transitionDuration.slowest}ms forwards;
          transition: transform ${transitionDuration.slowest}ms ease-in-out;
          z-index: ${isOpen ? 1000 : 0};
          padding-bottom: ${spacing[400]}px;
          overflow-y: scroll;
        `}
      >
        <IconButton
          aria-label="Close Menu"
          size="large"
          onClick={onClose}
          className={css`
            position: absolute;
            right: 0;
            top: 0;
            z-index: 5;
            padding: ${spacing[600]}px;
          `}
        >
          <XIcon size="large" />
        </IconButton>
        {children}
      </div>

      <div
        onClick={onClose}
        className={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: ${isOpen ? 200 : 0};
          opacity: ${isOpen ? 1 : 0};
          animation: ${isOpen ? fadeIn : fadeOut}
            ${transitionDuration.slowest}ms backwards;
        `}
      />
    </>
  );
};
