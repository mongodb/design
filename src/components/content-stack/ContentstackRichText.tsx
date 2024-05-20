"use client";

import { NotFound } from "@/components/global/NotFound";
import { nodeTypeToElementMap } from "./componentMap";
import { ContentstackText } from "./ContentstackText";
import { CSNode } from "./types";
import { getCSNodeTextContent, isTextNode, nodeHasAssets } from "./utils";

interface CSRichTextProps
  extends Omit<JSX.IntrinsicElements["div"], "content"> {
  content?: CSNode;
  isNested?: boolean;
  [key: string]: any;
}

/**
 * Renders a ContentStack Node
 */
export const ContentstackRichText = ({
  content,
  ...rest
}: CSRichTextProps): JSX.Element => {
  if (!content) return <NotFound />;

  if (isTextNode(content) && getCSNodeTextContent(content)) {
    return <ContentstackText node={content} {...rest} />;
  } else {
    const textContent = getCSNodeTextContent(content);

    if (textContent || nodeHasAssets(content)) {
      // @ts-expect-error
      return nodeTypeToElementMap[content.type]?.(content, rest);
    } else {
      return <></>;
    }
  }
};
