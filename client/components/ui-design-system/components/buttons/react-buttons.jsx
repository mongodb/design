// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Button from '../../react-components/Button.js';
import Checkbox from '../../react-components/Checkbox.js';
import { RadioGroup, Radio } from '../../react-components/RadioGroup.js';
const Prism = require('prismjs');

var buttonPairing = [
  ['', 'Default Button'],
  ['button-is-primary', 'Primary Button'],
  ['button-is-info', 'Outline Button'],
  ['button-is-danger', 'Danger Button'],
  ['button-is-default-inverse', 'Dark Button']
];
var buttonMap = new Map(buttonPairing);

class UIButtonsReact extends React.Component {  
  state = {
    controlDisabled: false,
    controlTypeClassName: "",
    controlLabel: "Default Button"
  }

  codeSnippetHandler() {
    const disabled = this.state.controlDisabled ? `,\n  disabled=true` : '';
    const className = this.state.controlTypeClassName ? ` ${this.state.controlTypeClassName}` : '';
    return `<Button
  label="${this.state.controlLabel}",
  className="button${className}"${disabled}
/>`
  }

  render() {
    document.getElementById("button-link").classList.add("navigation-link-active")
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
              label={this.state.controlLabel}
              className={this.state.controlTypeClassName}
              disabled={this.state.controlDisabled}
              onClick={() => {return null}}
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
              onChange={(controlTypeClassName, controlLabel) => {
                this.setState({ controlTypeClassName });
                this.setState({ controlLabel: buttonMap.get(controlTypeClassName) });
              }}
            >
              <label className="checkbox">
                <Radio value="" id="type-default" checked /> Default
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
              text={this.codeSnippetHandler()}>
            </Code>
          </div>
        </div>
      </div>
    );
  }
}

export default UIButtonsReact;
