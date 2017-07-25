// ==================================================
//  DesignSystem - DSBubbles
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UITabs = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Tabs</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
    		<h2>Default Tabs</h2>
    		<p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <ul className="tabs">
          <li className="tabs-tab tabs-tab-is-active">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Processes</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Servers</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Agents</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Security</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<ul class="tabs">' }</div>
            <div>{ '  <li class="tabs-tab tabs-tab-is-active">' }</div>
            <div>{ '    <a class="tabs-tab-link">Processes</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li class="tabs-tab">' }</div>
            <div>{ '    <a class="tabs-tab-link">Servers</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li class="tabs-tab">' }</div>
            <div>{ '    <a class="tabs-tab-link">Agents</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li class="tabs-tab">' }</div>
            <div>{ '    <a class="tabs-tab-link">Security</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '</ul>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UITabs;
