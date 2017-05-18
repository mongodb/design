// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIButtons = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h1>Buttons</h1>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
    		<h2>Button Styles</h2>
    		<p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
    		<button className="button">Default Button</button>
    		<button className="button button-is-primary">Primary Button</button>
    		<button className="button button-is-danger">Destructive Button</button>
    		<button className="button" disabled>Disabled Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
    		<pre>
          <code className="language-html hljs xml" data-lang="html">
          	<div>{ '<button className="button">Default Button</button>' }</div>
            <div>{ '<button className="button button-is-primary">Primary Button</button>' }</div>
            <div>{ '<button className="button button-is-danger">Destructive Button</button>' }</div>
            <div>{ '<button className="button" disabled>Disabled Button</button>' }</div>
          </code>
    		</pre>
      </div>
    </div>

    <div className="row u-mb-1">
      <div className="columns small-12">
      	<h2>Button Sizes</h2>
      	<p>Our buttons can be displayed as four different sizes.</p>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
      	<button className="button button-is-xs">Extra Small</button>
      	<button className="button button-is-small">Small Button</button>
      	<button className="button">Normal Button</button>
        <button className="button button-is-large">Large Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<button className="button button-is-xs">Extra Small</button>' }</div>
            <div>{ '<button className="button button-is-small">Small Button</button>' }</div>
            <div>{ '<button className="button">Normal Button</button>' }</div>
            <div>{ '<button className="button button-is-large">Large Button</button>' }</div>
          </code>
        </pre>
      </div>
    </div>
  </div>
);

export default UIButtons;
