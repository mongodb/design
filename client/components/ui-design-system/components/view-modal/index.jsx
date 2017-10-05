// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import Code from '../../subcomponents/code';

const UIViewModal = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Modals</h1>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>View Modal</h2>
        <p>The View Modal is a BEM component for the viewAsModal mixin. If you need functionality out of the header or footer that is not supported by the mixin, consider placing the functionality in the body instead and using the markup below:</p>
      </div>
    </div>
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
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="view-modal-content view-modal-content-is-small" tabIndex="-1">
  <button type="button" class="view-modal-close modal-close" data-dismiss="modal" aria-hidden="true">×</button>
  <div class="view-modal-header">
    <h3 class="view-modal-header-title">Your Title Here</h3>
  </div>
  <div class="view-modal-body view-modal-body-has-padding">
    <div class="view-modal-content view-modal-content-is-small" tabIndex="-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  </div>
  <div class="view-modal-footer">
    <div class="view-modal-actions">
    <div class="view-modal-content view-modal-content-is-small" tabIndex="-1">
      <div>
        <button class="button">Optional Secondary Action</button>
      </div>
      <div>
        <button class="button u-mr-2">Cancel</button>
        <button class="button button-is-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>s`}> 
        </Code>
      </div>
    </div>
  </div>
);

export default UIViewModal;
