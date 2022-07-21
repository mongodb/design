import React from 'react';
import { getComponent, ComponentFields } from 'lib/_getContentfulResources';
import { Entry } from 'contentful';


function renderRichContent(guidelines: Entry<ComponentFields>['fields']['designGuidelines']) {
	return guidelines?.content.map(node => {
		switch (node.nodeType) {
			case 'paragraph':
				return node.content?.map((node, i) => <p key={i}>{node.value}</p>);
			default:
				return <h1>Unsupported nodeType: ${node.nodeType!}</h1>
		}
	})
}

function ButtonGuidelines({component}) {
  return <>{renderRichContent(component.fields?.designGuidelines)}</>
}

export async function getStaticProps() {
	return {
		props: {
			component: await getComponent('button'),
		},
	};
}

ButtonGuidelines.displayName = 'ButtonGuidelines'

export default ButtonGuidelines;
