import { css } from "@emotion/css";
// @ts-expect-error
import CheckmarkWithCircleIcon from "@leafygreen-ui/icon/dist/CheckmarkWithCircle";
// @ts-expect-error
import XWithCircleIcon from "@leafygreen-ui/icon/dist/XWithCircle";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { palette } from "@leafygreen-ui/palette";
import { spacing } from "@leafygreen-ui/tokens";
import { Body } from "@leafygreen-ui/typography";

import { ContentstackRichText } from "..";

export const BasicUsageBlock = ({ entry }: { entry: any }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={css`
        margin-top: ${spacing[4]}px;
        margin-bottom: ${spacing[4]}px;
      `}
    >
      <div
        className={css`
          align-items: center;
          display: flex;
        `}
      >
        <CheckmarkWithCircleIcon
          fill={palette.green.dark1}
          width={spacing[4]}
          height={spacing[4]}
        />
        <Body
          className={css`
            display: inline-flex;
            margin-left: 6px;
          `}
          color={darkMode ? palette.green.base : palette.green.dark2}
        >
          <b>Do</b>
        </Body>
      </div>
      <ContentstackRichText content={entry.do_s} />
      <div
        className={css`
          align-items: center;
          display: flex;
        `}
      >
        <XWithCircleIcon
          fill={palette.red.base}
          width={spacing[4]}
          height={spacing[4]}
        />
        <Body
          className={css`
            display: inline-flex;
            margin-left: 6px;
          `}
        >
          <b>Don&apos;t</b>
        </Body>
      </div>
      <ContentstackRichText content={entry.don_ts} />
    </div>
  );
};
