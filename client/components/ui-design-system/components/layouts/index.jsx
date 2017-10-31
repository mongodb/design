// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import Code from '../../subcomponents/code';

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
        <Code
          language='language-html'
          text={`<div class="empty-view">
  <div class="empty-view-text">Enter your empty view placeholder text here.</div>
  <button class="button button-is-primary button-is-large">Do something</button>
</div>`}> 
        </Code>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Loading State</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="empty-view">
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
        <Code
          language='language-html'
          text={`<div class="empty-view">
  <div class="empty-view-graphic">
    <i class="mms-icon-continuous empty-view-icon empty-view-icon-is-rotating"></i>
    <svg class="empty-view-shadow">
      <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>
    </svg>
  </div>
  <div class="empty-view-text">
    Retrieving list of databases and collections...
  </div>
</div>`}> 
        </Code>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Error State</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="empty-view">
          <div className="empty-view-graphic">
            <i className="fa fa-4x fa-exclamation-triangle empty-view-icon"></i>
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
        <Code
          language='language-html'
          text={`<div class="empty-view">
  <div class="empty-view-graphic">
    <i class="fa fa-4x fa-exclamation-triangle empty-view-icon"></i>
    <svg class="empty-view-shadow empty-view-shadow-is-error">
      <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>
    </svg>
  </div>
  <div class="empty-view-text empty-view-text-is-error">
    Write something about what they did wrong here.
  </div>
  <button class="button button-is-large button-is-default">
    Do Something Else
  </button>
</div>`}> 
        </Code>
      </div>
    </div>

    {/*

    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>Common Navigation</h2>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Section with Tabs</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns">
        <div className="section-header section-header-has-tabs section-header-has-breadcrumbs">
          <div className="section-header-title">
            <span className="section-header-title-text">Section with Tabs</span>
            <span className="section-header-title-actions">
              <div className="dropdown section-header-title-actions-dropdown">
                <button className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
                  Primary Action <i className="fa fa-caret-down"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><a>Option</a></li>
                  <li><a>Option</a></li>
                </ul>
              </div>
              <div className="dropdown section-header-title-actions-dropdown">
                <button className="button button-has-icon" data-toggle="dropdown">
                  <i className="mms-icon-ellipsis"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><a>Option</a></li>
                  <li><a>Option</a></li>
                </ul>
              </div>
            </span>
          </div>
          <ul className="section-header-tabs">
            <li className="section-header-tab section-header-tab-is-left"><a href="#" className="section-header-tab-link">Tab</a></li>
            <li className="section-header-tab section-header-tab-is-active"><a href="#" className="section-header-tab-link">Active Tab</a></li>
            <li className="section-header-tab section-header-tab-is-right section-header-tab-is-beta"><a href="#" className="section-header-tab-link">Beta Tab</a></li>
            <li>
              <button className="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                More <i className="fa fa-caret-down section-header-more-icon"></i>
              </button>
            </li>
          </ul>
        </div>
        <ul className="section-subtabs">
          <li className="section-subtabs-tab"><a className="section-subtabs-tab-link">Subtab</a></li>
          <li className="section-subtabs-tab section-subtabs-tab-is-active"><a className="section-subtabs-tab-link">Active Subtab</a></li>
          <li className="section-subtabs-tab section-subtabs-tab-is-last"><a className="section-subtabs-tab-link">Last Subtab</a></li>
        </ul>
        <div className="section-controls">
          <span className="section-controls-filter">
            <label className="section-controls-label">Filter: </label>
            <label className="section-controls-checkbox-label">
              Foo
              <input type="checkbox"></input>
            </label>
            <label className="section-controls-checkbox-label">
              Bar
              <input type="checkbox"></input>
            </label>
          </span>
          <label className="section-controls-label">Toggle:</label>
          <div className="button-group">
            <button className="button-group-button button button-is-xs button-is-selected">Option 1</button>
            <button className="button-group-button button button-is-xs">Option 2</button>
          </div>
        </div>
        <div className="section-controls">
          <label className="section-controls-label">I'm stackable:</label>
          <a className="button button-is-xs">Example Control <i className="fa fa-caret-down"></i></a>
        </div>
        <div className="section-banner">
          <span className="section-banner-item">Collection:
            <span className="section-banner-keyword">guns_n_roses</span>
          </span>
          <span className="section-banner-item">Documents: 111,111</span>
          <span className="section-banner-item">Total Datasize: 882.03 MB</span>
        </div>
      </div>
    </div>
    */}
  </div>

);

export default UILayouts;
