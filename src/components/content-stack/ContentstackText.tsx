import { css, cx } from "@emotion/css";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { color } from "@leafygreen-ui/tokens";
import { CSTextNode } from "./types";

type CSRichTextProps = JSX.IntrinsicElements["span"] & {
  node: CSTextNode;
};

export const ContentstackText = ({
  node,
  className,
  ...rest
}: CSRichTextProps) => {
  const { theme } = useDarkMode();
  const Component = node.bold ? "b" : "span";

  return (
    <Component
      className={cx(
        css`
          color: ${color[theme].text.primary.default};
        `,
        className
      )}
      {...rest}
    >
      {node.text}
    </Component>
  );
};
