// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';

const UIViewModal = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Modals</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <ul className="tabs">
          <li className="tabs-tab tabs-tab-is-active">
            <Link to='/ui-design-system/components/view-modal' className="tabs-tab-link">CSS</Link>
          </li>
          <li className="tabs-tab">
            <Link to='/ui-design-system/components/view-modal/react-view-modal' className="tabs-tab-link">React</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>View Modal</h2>
        <p>The View Modal is a BEM component for the viewAsModal mixin. If you need functionality out of the header or footer that is not supported by the mixin, consider placing the functionality in the body instead and using the markup below:</p>
      </div>
    </div>
    <div tabIndex="-1" className="view-modal-content view-modal-content-is-small">
      <button type="button" name="close" className="view-modal-close close" data-dismiss="modal" aria-hidden="true">×</button>
      <header className="view-modal-header">
        <h3 className="view-modal-header-title">Your Title Here</h3>
        <hr></hr>
      </header>
      <div className="view-modal-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
      <footer className="view-modal-footer">
        <hr></hr>
        <div className="view-modal-actions">
          <div>
            <button className="button">Optional Secondary Action</button>
          </div>
          <div>
            <button className="button u-mr-2">Cancel</button>
            <button className="button button-is-primary">Confirm</button>
          </div>
        </div>
      </footer>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="view-modal-content view-modal-content-is-small">
  <button type="button" name="close" class="view-modal-close close" data-dismiss="modal" aria-hidden="true">×</button>
  <header class="view-modal-header">
    <h3 class="view-modal-header-title">Your Title Here</h3>
    <hr></hr>
  </header>
  <div class="view-modal-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
  <footer class="view-modal-footer">
    <hr></hr>
    <div class="view-modal-actions">
      <div>
        <button class="button">Optional Secondary Action</button>
      </div>
      <div>
        <button class="button u-mr-2">Cancel</button>
        <button class="button button-is-primary">Confirm</button>
      </div>
    </div>
  </footer>
</div>`}> 
        </Code>
      </div>
    </div>
  </div>
);

export default UIViewModal;
