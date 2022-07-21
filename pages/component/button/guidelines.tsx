import React from 'react';
import { getComponent, ComponentFields } from 'lib/_getContentfulResources';
import { Entry } from 'contentful';
import { ContentStyle } from '@leafygreen-ui/card';


function renderRichContent(guidelines: Entry<ComponentFields>['fields']['designGuidelines']) {
	return guidelines?.content.map(node => {
		switch (node.nodeType) {
			case 'paragraph':
				console.log(node)
				return <>{node?.content?.map(node => <p>{node.value}</p>)}</>;
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
