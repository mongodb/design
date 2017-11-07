// ==================================================
//  DesignSystem - DSBubbles
// ==================================================

import React from 'react';
import Code from '../../../../site-components/code';

const UIBubbles = () => (
  <div className="wrap button-ui">
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
