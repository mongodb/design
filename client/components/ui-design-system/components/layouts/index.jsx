// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import '../../../../styling/root.less';

const UILayouts = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Layouts</h1>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>Zero States</h2>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Empty State</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="empty-view">
          <div className="empty-view-text">Enter your empty view placeholder text here.</div>
          <button className="button button-is-primary button-is-large">Do something</button>
        </div>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="empty-view">' }</div>
            <div>{ '  <div className="empty-view-text">Enter your empty view placeholder text here.</div>' }</div>
            <div>{ '  <button className="button button-is-primary button-is-large">Do something</button>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Loading State</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="empty-view empty-view-has-no-border">
          <div className="empty-view-graphic">
            <i className="mms-icon-continuous empty-view-icon empty-view-icon-is-rotating"></i>
            <svg className="empty-view-shadow">
                <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>
            </svg>
          </div>
          <div className="empty-view-text">
            Retrieving list of databases and collections...
          </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '' }</div>
          </code>
        </pre>
      </div>
    </div>


  </div>

);

export default UILayouts;
