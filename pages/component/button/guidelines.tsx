import React from 'react';
import { getComponent, ComponentFields } from 'lib/_getContentfulResources';
import { Entry } from 'contentful';

function renderRichContent(
  guidelines: Entry<ComponentFields>['fields']['designGuidelines'],
) {
  return guidelines?.content.map(node => {
    switch (node.nodeType) {
      case 'paragraph':
        return node.content?.map((node, i) => <p key={i}>{node.value}</p>);
      // @ts-expect-error
      case 'embedded-asset-block':
        console.log(node);
        // Contentful's TS definitions seem to miss this content type, so the fields property is missing as well.
        return (
					<img
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
  });
}

function ButtonGuidelines({ component }) {
  return <>{renderRichContent(component.fields?.designGuidelines)}</>;
}

export async function getStaticProps() {
  return {
    props: {
      component: await getComponent('button'),
    },
  };
}

ButtonGuidelines.displayName = 'ButtonGuidelines';

export default ButtonGuidelines;
