import { TransitionStatus } from 'react-transition-group';

import { css } from '@leafygreen-ui/emotion';
import { spacing } from '@leafygreen-ui/tokens';

export const liveExampleWrapperStyle = css`
  position: relative;
  display: flex;
  margin-bottom: initial;
  // 'overflow: hidden' will stop MongoNav's Menu's from being hidden
  /* overflow: hidden; */
  // additional padding is added in storyContainerStyle
  padding: ${60 - spacing[3]}px;
`;

export const storyContainerStyle = css`
  position: relative;
  flex: 2;
  display: inline-flex;
  // split padding between liveExampleWrapper and storyContainer to allow box-shadows and other overflowing styles to render correctly
  padding: ${spacing[3]}px;
  justify-content: center;
  overflow: auto;
`;

export const blockContainerStyle = css`
  display: inline-block;
  height: min-content;
`;

export const codeExampleWrapperStyle = css`
  position: relative;
  flex: 0;
  max-height: 100%;
  margin-top: -1px;

  transition: 200ms ease-in-out;
  transition-property: flex transform opacity;
  transform-origin: 100% 0%;

  & > div {
    height: 100%;
    border-radius: 0 24px 0 0;
    opacity: 1;
    transition: 200ms ease-in-out opacity;

    & > * {
      height: 100%;
    }
  }
`;

export const codeWrapperStateStyle: Record<TransitionStatus, string> = {
  entering: css`
    flex: 2;
    transform: scaleX(1);
    & > div {
      opacity: 1;
      width: 100%;
    }
  `,
  entered: css`
    flex: 2;
    transform: scaleX(1);
    & > div {
      opacity: 1;
    }
  `,
  exiting: css`
    transform: scaleX(1);
    & > div {
      opacity: 0;
    }
  `,
  exited: css`
    flex: 0;
    transform: scaleX(1);
    & > div {
      opacity: 0;
      width: 0;
    }
  `,
  unmounted: '',
};

export const codeStyle = css`
  height: 100%;
  overflow: auto;
`;
