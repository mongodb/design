// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Button from '../../react-components/Button.js';

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
        <h2>Button Component</h2>
        <p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <Button
          label="Default Button"
          className="button-is-default"
        />
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
        language='language-jsx'
        text={`<Button
  label="Default Button"
  className="button-is-default"
/>`}>
      </Code>
      </div>
    </div>
  </div>
);

export default UIButtonsReact;
