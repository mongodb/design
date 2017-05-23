// ==================================================
//  DesignSystem - DSBubbles
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIBubbles = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Bubbles</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
    		<h2>Bubble Labels</h2>
    		<p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Default Bubble Style</h3>
        <div className="bubble-label bubble-label-gray">3 Shards</div>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="bubble-label bubble-label-gray">3 Shards</div>' }</div>
          </code>
        </pre>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>NEW Bubble Style</h3>
        <div className="bubble-label bubble-label-blue">NEW!</div>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="bubble-label bubble-label-blue">NEW!</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UIBubbles;
