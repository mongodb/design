import { Body } from "@leafygreen-ui/typography";
import { ComponentFields } from "utils/getContentfulResources";
import Image from "./Image";

interface Props {
  designGuidelines: ComponentFields['designGuidelines'];
}

const ContentfulRichContent = ({
  designGuidelines
}: Props) => {
  return (
    <>
      {designGuidelines?.content.map(node => {
        switch (node.nodeType) {
          case 'paragraph':
            return node.content?.map((node, i) => <Body key={i}>{node.value}</Body>);
          // @ts-expect-error
          case 'embedded-asset-block':
            // Contentful's TS definitions seem to miss this content type, so the fields property is missing as well.
            return (
              <Image
                // @ts-expect-error
                src={node?.data?.target?.fields.file.url}
                // @ts-expect-error
                alt={node?.data?.target?.fields.description}
                width="100%"
              />
            );
          default:
            return <h1>Unsupported nodeType: ${node.nodeType!}</h1>;
        }
      })
      }
    </>
  );
}

export default ContentfulRichContent;