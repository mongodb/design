// ==================================================
//  DesignSystem - DSBannersReact
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Alert from '../../react-components/Alert.js';
import Checkbox from '../../react-components/Checkbox.js';
import { RadioGroup, Radio } from '../../react-components/RadioGroup.js';

var alertPairing = [
  ['success', 'Well done! You successfully read this important alert message.'],
  ['warning', 'Warning! Better check yourself before you wreck yourself, you’re not looking good.'],
  ['danger', 'Danger! Better check yourself, you’re not looking good.'],
  ['info', 'Heads up! This alert needs your attention, but it’s not super important.'],
];

var alertMap = new Map(alertPairing);

class UIBannersReact extends React.Component {

  state = {
    controlLevel: "success",
    controlMessage: "Well done! You successfully read this important alert message.",
    controlDismissible:false
  }

  codeSnippetHandler() {
    const level = this.state.controlLevel ? `,\n  level="success"` : '';
    const message = this.state.controlMessage ? `${this.state.controlMessage}` : '';
    const dismissible = this.state.controlDismissible ? `${this.state.controlDismissible}` : 'false';
    return `<Alert
  level="${this.state.controlLevel}",
  children="${message}",
  dismissible="${dismissible}"
/>`
  } 

  render() {
    return (
      <div className="wrap button-ui">
      <div className="row u-mb-3">
        <div className="columns small-12">
          <h1>Banners</h1>
        </div>
      </div>

      <div className="row u-mb-2">
        <div className="columns small-12">
          <ul className="tabs">
            <li className="tabs-tab">
              <Link to='/ui-design-system/components/banners' className="tabs-tab-link">CSS</Link>
            </li>
            <li className="tabs-tab tabs-tab-is-active">
              <Link to='/ui-design-system/components/banners/react-banners' className="tabs-tab-link">React</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="row u-mb-3">
        <div className="columns small-12">
          <h2>Alerts</h2>
          <p>Alerts are available in four levels – success, warning, danger, and info.</p>
        </div>
      </div>

      <div className="row u-mb-3">
        <div className="columns small-12">
          <Alert 
            level={this.state.controlLevel}
            children={this.state.controlMessage}
            dismissible={this.state.controlDismissible}
          />
        </div>
      </div>

      <div className="row u-mb-2">
        <div className="columns small-6">
          <h4>Type</h4>
          <RadioGroup
            name="alert-state"
            selectedValue={this.state.controlLevel}
            onChange={(controlLevel) => {
              this.setState({ controlLevel });
              this.setState({ controlMessage: alertMap.get(controlLevel) });
            }}
          >
            <label className="checkbox">
              <Radio value="success" id="success" checked /> Success
            </label>
            <label className="checkbox">
              <Radio value="warning" id="warning" /> Warning
            </label>
            <label className="checkbox">
              <Radio value="danger" id="danger" /> Danger
            </label>
            <label className="checkbox">
              <Radio value="info" id="info" /> Info
            </label>
          </RadioGroup>
        </div>

        <div className="columns small-6">
          <h4>State</h4>
          <Checkbox 
              label="Dismissible"
              checked={this.state.controlDismissible}
              onChange={controlDismissible => this.setState({ controlDismissible })}
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
)}
}

export default UIBannersReact;
