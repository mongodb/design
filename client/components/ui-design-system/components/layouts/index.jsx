// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';

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
            <div>{ '<div class="empty-view">' }</div>
            <div>{ '  <div class="empty-view-text">Enter your empty view placeholder text here.</div>' }</div>
            <div>{ '  <button class="button button-is-primary button-is-large">Do something</button>' }</div>
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
            <div>{ '<div class="empty-view empty-view-has-no-border">' }</div>
            <div>{ '  <div class="empty-view-graphic">' }</div>
            <div>{ '    <i class="mms-icon-continuous empty-view-icon empty-view-icon-is-rotating"></i>' }</div>
            <div>{ '    <svg class="empty-view-shadow">' }</div>
            <div>{ '      <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>' }</div>
            <div>{ '    </svg>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div class="empty-view-text">' }</div>
            <div>{ '    Retrieving list of databases and collections...' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Error State</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="empty-view empty-view-has-no-border">
          <div className="empty-view-graphic">
            <i className="fa fa-exclamation-triangle empty-view-icon"></i>
            <svg className="empty-view-shadow empty-view-shadow-is-error">
              <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>
            </svg>
          </div>
          <div className="empty-view-text empty-view-text-is-error">
            Write something about what they did wrong here.
          </div>
          <button className="button button-is-large button-is-default">
            Do Something Else
          </button>
        </div>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="empty-view empty-view-has-no-border">' }</div>
            <div>{ '  <div class="empty-view-graphic">' }</div>
            <div>{ '    <i class="fa fa-exclamation-triangle empty-view-icon"></i>' }</div>
            <div>{ '    <svg class="empty-view-shadow empty-view-shadow-is-error">' }</div>
            <div>{ '      <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>' }</div>
            <div>{ '    </svg>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div class="empty-view-text empty-view-text-is-error">' }</div>
            <div>{ '    Write something about what they did wrong here.' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <button class="button button-is-large button-is-default">' }</div>
            <div>{ '    Do Something Else' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>

);

export default UILayouts;
