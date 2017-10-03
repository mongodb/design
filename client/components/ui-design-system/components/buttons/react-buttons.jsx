// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const UIButtonsReact = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Buttons</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <ul className="tabs">
          <li className="tabs-tab">
            <Link to='/ui-design-system/components/buttons' className="tabs-tab-link">CSS</Link>
          </li>
          <li className="tabs-tab tabs-tab-is-active">
            <Link to='/ui-design-system/components/buttons/react-buttons' className="tabs-tab-link">React</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>[React Version]</h2>
        <p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <button className="button u-mr-2">Default Button</button>
        <button className="button button-is-primary u-mr-2">Primary Button</button>
        <button className="button button-is-danger u-mr-2">Destructive Button</button>
        <button className="button" disabled>Disabled Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<button class="button">Default Button</button>' }</div>
            <div>{ '<button class="button button-is-primary">Primary Button</button>' }</div>
            <div>{ '<button class="button button-is-danger">Destructive Button</button>' }</div>
            <div>{ '<button class="button" disabled>Disabled Button</button>' }</div>
          </code>
        </pre>
      </div>
    </div>
  </div>
);

export default UIButtonsReact;
