// ==================================================
//  DesignSystem - DSModal
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Modal from '../../react-components/Modal.js';

class UIViewModalReact extends React.Component {
  render() {
    return (

      <div className="view-modal-content view-modal-content-is-small" tabIndex="-1">
        <button type="button" className="view-modal-close modal-close" data-dismiss="modal" aria-hidden="true">×</button>
        <div className="view-modal-header">
          <h3 className="view-modal-header-title">Your Title Here</h3>
        </div>
        <div className="view-modal-body view-modal-body-has-padding">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
        <div className="view-modal-footer">
          <div className="view-modal-actions">
            <div>
              <button className="button">Optional Secondary Action</button>
            </div>
            <div>
              <button className="button u-mr-2">Cancel</button>
              <button className="button button-is-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>

      );
  }

}

export default UIViewModalReact;
