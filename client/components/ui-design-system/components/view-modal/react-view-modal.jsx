// ==================================================
//  DesignSystem - DSModal
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Button from '../../react-components/Button.js';
import Modal from '../../react-components/Modal.js';
import { RadioGroup, Radio } from '../../react-components/RadioGroup.js';

class UIViewModalReact extends React.Component {

  state = { 
    isOpen: false,
    size: "small"
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1>Modals</h1>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <ul className="tabs">
              <li className="tabs-tab">
                <Link to='/ui-design-system/components/view-modal' className="tabs-tab-link">CSS</Link>
              </li>
              <li className="tabs-tab tabs-tab-is-active">
                <Link to='/ui-design-system/components/view-modal/react-view-modal' className="tabs-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row u-mb-1">
          <div className="columns small-12">
            <h2>View Modal</h2>
            <p>The View Modal is a React component that can be configured to one of five preset sizes.</p>
          </div>

        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
          <Button
            label={this.state.isOpen ? "Close Modal" : "Open Modal"}
            onClick={() => this.toggleModal(this.state.isOpen)}
          />
          </div>
          <Modal 
            open={this.state.isOpen}
            title="Your Title Here"
            size={this.state.size}
            onClose={() => this.toggleModal(this.state.isOpen)}
            >
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Modal.ModalFooter>
              <Button
                label="Cancel"
                className="u-mr-2"
                onClick={() => this.toggleModal(this.state.isOpen)}
              />
              <Button
                label="Confirm"
                className="button-is-primary"
                onClick={() => this.toggleModal(this.state.isOpen)}
              />
            </Modal.ModalFooter>
          </Modal>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h3>Options</h3>
          </div>
          <div className="columns small-6">
            <p><b>Size</b></p>
            <RadioGroup
              name="button-state"
              selectedValue={this.state.size}
              onChange={size => 
                {this.setState({ size });
                setTimeout(function(){ Prism.highlightAll(); }, 5);
              }}
            >
              <label className="checkbox">
                <Radio value="xs" checked /> Extra Small
              </label>
              <label className="checkbox">
                <Radio value="small" /> Small
              </label>
              <label className="checkbox">
                <Radio value="medium" /> Medium
              </label>
              <label className="checkbox">
                <Radio value="large" /> Large
              </label>
              <label className="checkbox">
                <Radio value="xlarge" /> Extra Large
              </label>
            </RadioGroup>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code 
            language='language-jsx'
            text={`<Modal 
  title="Your Title Here"
  size="${this.state.size}"
  >
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  <Modal.ModalFooter>
    <Button
      label="Cancel"
      className="u-mr-2"
    />
    <Button
      label="Confirm"
      className="button-is-primary"
    />
  </Modal.ModalFooter>
</Modal>`}> 
            </Code>
          </div>
        </div>
        <div className="row u-mb-3">
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
                    <p className="code">open</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Boolean</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Default = <b>true</b></p>
                    <p>Defines the open state of the modal</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">title</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Header text of the modal</p>
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
                    <p>A collection of child elements of the modal body</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">size</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Defines the size of the modal</p>
                    <p><b>Must be one of the following:</b> xs, small, medium, large, xlarge</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">hideClose</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Boolean</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Default = <b>false</b></p>
                    <p>Defines the visibility of the × close button</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">onClose</p>
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
                    <p className="code">onBack</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Function</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Click event handler for the back button</p>
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

export default UIViewModalReact;
