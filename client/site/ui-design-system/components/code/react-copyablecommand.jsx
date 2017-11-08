import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';
import CopyableCommand from '../../../../react-components/CopyableCommand.js';
import Button from '../../../../react-components/Button.js';
import { RadioGroup, Radio } from '../../../../react-components/RadioGroup.js';
import Checkbox from '../../../../react-components/Checkbox.js';

class UICopyableCommandReact extends React.Component {

  state = { 
    fullWidth: false
  };

  render() {
    const isFullWidth = this.state.fullWidth ? `,\n  fullWidth={true}` : '';
    return (
      <div className="wrap">
        <div className="row">
          <div className="columns small-12">
            <h1>Code</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <ul className="section-header-tabs">
              <li className="section-header-tab">
                <Link to='/ui-design-system/components/code' className="section-header-tab-link">CSS</Link>
              </li>
              <li className="section-header-tab section-header-tab-is-active">
                <Link to='/ui-design-system/components/code/react-copyablecommand' className="section-header-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h2>Code Styles</h2>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Copyable Command</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <CopyableCommand 
              copyableText='This is a command that you can copy.'
              fullWidth={this.state.fullWidth}>
            </CopyableCommand>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Options</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-6">
            <p><b>State</b></p>
            <Checkbox 
                label="Full Width"
                checked={this.state.fullWidth}
                onChange={fullWidth => 
                  {this.setState({ fullWidth });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<CopyableCommand 
  copyableText='This is a command that you can copy. It will not break onto the next line since the overflow will keep scrolling horizontally.'>${isFullWidth}
</CopyableCommand>`}> 
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
                    <p className="code">copyableText</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String, Required</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Text rendered as the code snippet</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">otherClasses</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Additional CSS class(es) passed to the parent wrapper</p>
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
                    <p>A collection of child elements of the code snippet</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">fullWidth</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Boolean</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Default = <b>false</b></p>
                    <p>Defines whether the code snippet expands to take the full width of its parent container</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UICopyableCommandReact;
