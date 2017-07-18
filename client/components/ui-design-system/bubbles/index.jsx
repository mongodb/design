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
    		<p>The quick brown fox jumped over the log into the enchanted forest. The quick brown fox jumped over the log into the enchanted forest.</p>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="bubble-label bubble-label-gray">3 Shards</div>' }</div>
            <div>{ '<div className="bubble-label bubble-label-lighter-gray">5 Nodes</div>' }</div>
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
    <div className="row u-mb-3">
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
