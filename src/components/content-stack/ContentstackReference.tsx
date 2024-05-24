import { ContentStackEntry } from "./ContentStackEntry";
import { ContentStackImage } from "./ContentStackImage";
import { CSNode } from "./types";

export const ContentStackReference = ({
  content,
  ...props
}: {
  content: CSNode;
  [key: string]: any;
}) => {
  const {
    type,
    "content-type-uid": contentTypeUid,
    "entry-uid": entryUid,
  } = content.attrs;

  if (type === "asset") {
    return <ContentStackImage content={content} {...props} />;
  } else if (type === "entry") {
    return (
      <ContentStackEntry
        contentTypeUid={contentTypeUid}
        entryUid={entryUid}
        {...props}
      />
    );
  } else {
    console.warn(`Unknown reference type: ${type}.`);
    return <>Unknown reference type: {type}. </>;
  }
};
