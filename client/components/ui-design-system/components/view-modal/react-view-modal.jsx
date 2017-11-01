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
        <div className="row">
          <div className="columns small-12">
            <h1>Modals</h1>
          </div>
        </div>
        <div className="row">
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
        <div className="row">
          <div className="columns small-12">
            <h2>View Modal</h2>
            <p>The View Modal is a React component that can be configured to one of five preset sizes.</p>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-6">
            <h4>Size</h4>
            <RadioGroup
              name="button-state"
              selectedValue={this.state.size}
              onChange={size => this.setState({ size })}>
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
        <div className="row">
          <div className="columns small-12">
            <Button
              label={this.state.isOpen ? "Close Modal" : "Open Modal"}
              onClick={() => this.toggleModal(this.state.isOpen)}
            />
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
      </div>
    );
  }
}

export default UIViewModalReact;
