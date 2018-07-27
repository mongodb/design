// ==================================================
// DesignSystem - DSLayouts
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';

const UILayouts = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1>Layouts</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <ul className="section-header-tabs">
          <li className="section-header-tab section-header-tab-is-active">
            <Link to='/ui-design-system/components/layouts' className="section-header-tab-link">CSS</Link>
          </li>
          <li className="section-header-tab">
            <Link to='/ui-design-system/components/layouts/react-layouts' className="section-header-tab-link">React</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Zero States</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Empty State</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="empty-view">
          <div className="empty-view-graphic"></div>
          <div className="empty-view-text">
            <h1 className="empty-view-text-is-heading">A positive and actionable headline</h1>
            <h3 className="empty-view-text-is-description">Language should be direct in setting communicating need of the feature as well as setting appropriate expectation for using the feature.</h3>
          </div>
          <div className="empty-view-cta">
            <button className="button button-is-primary button-is-large">Do something</button>
            <button className="button button-is-info button-is-large">Do something else</button>
          </div>
          <p className="empty-view-link"><a href="#" target="_blank">More guidelines on creating zero state can be found here.</a></p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`
  <div className="empty-view">
    <div className="empty-view-graphic"></div>
    <div className="empty-view-text">
      <h1 className="empty-view-text-is-heading">A positive and actionable headline</h1>
      <h3 className="empty-view-text-is-description">Language should be direct in setting communicating need of the feature as well as setting appropriate expectation for using the feature.</h3>
    </div>
    <div className="empty-view-cta">
      <button className="button button-is-primary button-is-large">Do something</button>
      <button className="button button-is-info button-is-large">Do something else</button>
    </div>
    <p className="empty-view-link"><a href="#" target="_blank">More guidelines on creating zero state can be found here.</a></p>
  </div>

`}>
        </Code>
      </div>
    </div>

  </div>

);

export default UILayouts;
