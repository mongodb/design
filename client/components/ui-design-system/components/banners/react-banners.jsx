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
      <div className="row">
        <div className="columns small-12">
          <h1>Banners</h1>
        </div>
      </div>
      <div className="row">
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
      <div className="row">
        <div className="columns small-12">
          <h2>Alerts</h2>
          <p>Alerts are available in four levels – success, warning, danger, and info.</p>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <Alert 
            level={this.state.controlLevel}
            children={this.state.controlMessage}
            dismissible={this.state.controlDismissible}
          />
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <h3>Options</h3>
        </div>
        <div className="columns small-6">
          <p><b>Type</b></p>
          <RadioGroup
            name="alert-state"
            selectedValue={this.state.controlLevel}
            onChange={(controlLevel) => {
              this.setState({ controlLevel });
              this.setState({ controlMessage: alertMap.get(controlLevel) });
              setTimeout(function(){ Prism.highlightAll(); }, 5);
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
          <p><b>Type</b></p>
          <Checkbox 
              label="Dismissible"
              checked={this.state.controlDismissible}
              onChange={controlDismissible => 
                {this.setState({ controlDismissible });
                setTimeout(function(){ Prism.highlightAll(); }, 10);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <Code
            language='language-jsx'
            text={this.codeSnippetHandler()}>
          </Code>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <h3>Available Props</h3>
          <table className="table">
            <thead>
              <tr className="table-row">
                <th className="table-header">Prop Name</th>
                <th className="table-header">Type</th>
                <th className="table-header">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-column table-cell">
                  <p className="code">level</p>
                </td>
                <td className="table-column table-cell">
                  <p><b>String, Required</b></p>
                </td>
                <td className="table-column table-cell">
                  <p>Default = <b>info</b></p>
                  <p>Defines the color state of the banner</p>
                  <p><b>Must be one of the following:</b> success, warning, danger, info</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-column table-cell">
                  <p className="code">dismissible</p>
                </td>
                <td className="table-column table-cell">
                  <p><b>boolean</b></p>
                </td>
                <td className="table-column table-cell">
                  <p>Default = <b>false</b></p>
                  <p>Defines whether the user can close the banner</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-column table-cell">
                  <p className="code">onDismiss</p>
                </td>
                <td className="table-column table-cell">
                  <p><b>Function</b></p>
                </td> 
                <td className="table-column table-cell">
                  <p>Click event handler for the × close button</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-column table-cell">
                  <p className="code">children</p>
                </td>
                <td className="table-column table-cell">
                  <p><b>Node</b></p>
                </td>
                <td className="table-column table-cell">
                  <p>A collection of child elements of the banner</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
)}
}

export default UIBannersReact;
