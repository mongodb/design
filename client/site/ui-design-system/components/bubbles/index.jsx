// ==================================================
//  DesignSystem - DSBubbles
// ==================================================

import React from 'react';
import Code from '../../../../react-components/site/code';
import OutOfDateBanner from '../../../../react-components/OutOfDateBanner';

const UIBubbles = () => (
  <div className="wrap button-ui">
    <div className='row'>
      <OutOfDateBanner links={[
          {
            url: 'https://mongodb.github.io/leafygreen-ui/?path=/story/badge--default',
            title: 'Storybook',
          },

          {
            url: 'https://github.com/mongodb/leafygreen-sketch/blob/master/Badge%20%5BLeafyGreen%5D.sketch',
            title: 'Sketch Library',
          },

          {
            title: 'React Component',
            sources: [
              {
                title: 'GitHub',
                url: 'https://github.com/mongodb/leafygreen-ui/tree/master/packages/badge',
              },

              {
                title: 'NPM',
                url: 'https://www.npmjs.com/package/@leafygreen-ui/badge',
              },
            ],
          },
        ]} />
    </div>

    <div className="row">
      <div className="columns small-12">
        <h1>Bubbles</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Default Bubble Style</h3>
        <div className="bubble-label bubble-label-gray u-mr-2">3 Shards</div>
        <div className="bubble-label bubble-label-lighter-gray">5 Nodes</div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="bubble-label bubble-label-gray">3 Shards</div>
<div class="bubble-label bubble-label-lighter-gray">5 Nodes</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>NEW Bubble Style</h3>
        <div className="bubble-label bubble-label-blue">NEW!</div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="bubble-label bubble-label-blue">NEW!</div>`}> 
        </Code>
      </div>
    </div>

  </div>
);

export default UIBubbles;
