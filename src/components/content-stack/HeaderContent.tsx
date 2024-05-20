import { css } from "@emotion/css";
import { kebabCase } from "lodash";
import Link from "next/link";
// @ts-expect-error
import LinkIcon from "@leafygreen-ui/icon/dist/Link";
import { color, spacing } from "@leafygreen-ui/tokens";
import { ContentstackChildren } from "./ContentstackChildren";
import { CSNode } from "./types";
import { getCSNodeTextContent } from "./utils";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";

/**
 * Content of headers in rich text markup need to be wrapped in links and anchors for hashed links.
 */
export const HeaderContent = ({ node }: { node: CSNode }) => {
  const { theme } = useDarkMode();
  const headerId = kebabCase(getCSNodeTextContent(node));

  return (
    <Link
      href={`#${headerId}`}
      id={headerId}
      className={css`
        color: inherit;
        text-decoration: inherit;
        position: relative;
      `}
    >
      <div
        className={css`
          position: relative;
          color: inherit;
          text-decoration: inherit;

          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -4px;
            left: 0;
            border-radius: 2px;
          }

          &:hover {
            &:after {
              background-color: ${color[theme].background.primary.hover};
            }
            + svg {
              opacity: 1;
            }
          }
        `}
      >
        <ContentstackChildren nodeChildren={node.children} />
      </div>
      <LinkIcon
        fill={color[theme].icon.primary.default}
        className={css`
          margin-left: ${spacing[200]}px;
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0; // overridden on LinkContent hover
        `}
      />
    </Link>
  );
};
