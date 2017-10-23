// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Button from '../../react-components/Button.js';
import Checkbox from '../../react-components/Checkbox.js';
import { RadioGroup, Radio } from '../../react-components/RadioGroup.js';

class ControlledCheckbox extends React.Component {
  state = {
    checked: false,
  }

  render() {
    return (
      <Checkbox 
          label="Disabled"
          checked={this.state.checked}
          onChange={checked => this.setState({ checked })}
      />
    );
  }
}

class UIButtonsReact extends React.Component {
  state = {
    controlDisabled: false,
    controlTypeClassName: "button-is-default"
  }

  render() {
    return (
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
              className={this.state.controlTypeClassName}
              disabled={this.state.controlDisabled}
            />
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Options</h3>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-6">
            <h4>Type</h4>

            <RadioGroup
              name="button-state"
              selectedValue={this.state.controlTypeClassName}
              onChange={controlTypeClassName => this.setState({ controlTypeClassName })}>
              <label className="checkbox">
                <Radio value="button-is-default" id="type-default" checked /> Default
              </label>
              <label className="checkbox">
                <Radio value="button-is-primary" id="type-primary" /> Primary
              </label>
              <label className="checkbox">
                <Radio value="button-is-info" id="type-outline" /> Outline
              </label>
              <label className="checkbox">
                <Radio value="button-is-danger" id="type-danger" /> Danger
              </label>
              <label className="checkbox">
                <Radio value="button-is-default-inverse" id="type-dark" /> Dark
              </label>
            </RadioGroup>
          </div>
          <div className="columns small-6">
            <h4>State</h4>

            <Checkbox 
                label="Disabled"
                checked={this.state.controlDisabled}
                onChange={controlDisabled => this.setState({ controlDisabled })}
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
  }
}

export default UIButtonsReact;
