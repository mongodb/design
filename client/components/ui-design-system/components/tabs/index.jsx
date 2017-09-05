// ==================================================
//  DesignSystem - DSBubbles
// ==================================================

import React from 'react';

const UITabs = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Tabs</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
    		<h2>Default Tabs</h2>
    		<p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <ul className="tabs">
          <li className="tabs-tab tabs-tab-is-active">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Processes</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Servers</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Agents</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Security</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<ul class="tabs">' }</div>
            <div>{ '  <li class="tabs-tab tabs-tab-is-active">' }</div>
            <div>{ '    <a class="tabs-tab-link">Processes</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li class="tabs-tab">' }</div>
            <div>{ '    <a class="tabs-tab-link">Servers</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li class="tabs-tab">' }</div>
            <div>{ '    <a class="tabs-tab-link">Agents</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li class="tabs-tab">' }</div>
            <div>{ '    <a class="tabs-tab-link">Security</a> href={"http://mongodb.com"}' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '</ul>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Common Navigation</h3>
        <p>Section Header, Tabs, Subtabs, Controls and Banner</p>
      </div>
    </div>

    <div className="row">
      <div className="sectionBox">
          <div className="sectionTitle">
            <h2>Section Without Tabs</h2>
            <div className="u-float-right">
              <button className="button button-is-small button-is-primary u-mr-2">Primary Action</button>
              <button className="button button-has-ellipsis-only button-is-small u-mr-2">
                <i className="mms-icon-ellipsis"></i>
              </button>
            </div>
          </div>
      </div>
    </div>

    <pre>
    <code className="language-html hljs xml" data-lang="html">
      <div>{ '<div class="section-header">' }</div>
          <div>{ '<div class="section-header-title">' }</div>
          <div>{ '<span class="section-header-title-text">Section Without Tabs</span>' }</div>
          <div>{ '    <span class="section-header-title-actions">' }</div>
          <div>{ '        <button class="btn btn-primary btn-sm">Primary Action</button>' }</div>
          <div>{ '        <button class="button button-has-icon">' }</div>
          <div>{ '            <i class="mms-icon-ellipsis"></i>' }</div>
          <div>{ '        </button>' }</div>
          <div>{ '    </span>' }</div>
          <div>{ '</div>' }</div>
      <div>{ '</div>' }</div>
    </code>
    </pre>

    <div className="row">
      <div className="sectionBox">
        <div className="alert"><i className="fa fa-exclamation-triangle section-warnings-icon"></i>This is a warning</div>
        <div className="sectionTitle">
          <h2>Section With Banner</h2>
            <div className="u-float-right">
              <button className="button button-is-small button-is-primary u-mr-2">Primary Action</button>
                <button className="button button-has-ellipsis-only button-is-small u-mr-2">
                  <i className="mms-icon-ellipsis"></i>
              </button>
            </div>
        </div>
      
        <ul className="row tabs">
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Tab</a>
          </li>
          <li className="tabs-tab tabs-tab-is-active">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Active Tab</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>Tab</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link" href={"http://mongodb.com"}>More</a>
          </li>
        </ul>
      </div>
    </div>

    <pre>
    <code className="language-html hljs xml" data-lang="html">
      <div>{ '<div class="section-header section-header-has-tabs section-header-has-warnings">' }</div>
      <div>{ '    <div class="section-warnings">' }</div>
      <div>{ '        <div class="alert alert-warning section-warnings-alert" role="alert">' }</div>
      <div>{ '            <i class="fa fa-exclamation-triangle section-warnings-icon"></i>This is a warning' }</div>
      <div>{ '        </div>' }</div>
      <div>{ '    </div>' }</div>
      <div>{ '    <div class="section-header-title">' }</div>
      <div>{ '        <span class="section-header-title-text">Section with Banner</span>' }</div>
      <div>{ '        <span class="section-header-title-actions">' }</div>
      <div>{ '            <button class="btn btn-primary btn-sm">Primary Action</button>' }</div>
      <div>{ '            <button class="button button-has-icon" data-toggle="dropdown">' }</div>
      <div>{ '                <i class="mms-icon-ellipsis"></i>' }</div>
      <div>{ '            </button>' }</div>
      <div>{ '        </span>' }</div>
      <div>{ '    </div>' }</div>
      <div>{ '    <ul class="section-header-tabs">' }</div>
      <div>{ '        <li class="section-header-tab section-header-tab-is-left"><a href="#" class="section-header-tab-link">Tab</a></li>' }</div>
      <div>{ '        <li className="tabs-tab tabs-tab-is-active"><a href="#" class="section-header-tab-link">Active Tab</a></li>' }</div>
      <div>{ '        <li class="section-header-tab section-header-tab-is-right"><a href="#" class="section-header-tab-link">Tab</a></li>' }</div>
      <div>{ '        <li>' }</div>
      <div>{ '            <button class="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true">' }</div>
      <div>{ '                More <i class="fa fa-caret-down section-header-more-icon"></i>' }</div>
      <div>{ '            </button>' }</div>
      <div>{ '        </li>' }</div>
      <div>{ '    </ul>' }</div>
      <div>{ '</div>' }</div>
    </code>
    </pre>



  </div>
);

export default UITabs;
