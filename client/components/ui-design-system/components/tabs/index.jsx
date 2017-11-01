// ==================================================
//  DesignSystem - DSBubbles
// ==================================================

import React from 'react';
import Code from '../../subcomponents/code';

const UITabs = () => (
  <div className="wrap button-ui">
    <div className="row">
      <div className="columns small-12">
        <h1>Tabs</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
    		<h2>Default Tabs</h2>
    		<p>These horizontal tabs are typically used as the primary page-level navigation.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <ul className="tabs">
          <li className="tabs-tab tabs-tab-is-active">
            <a className="tabs-tab-link">Processes</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link">Servers</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link">Agents</a>
          </li>
          <li className="tabs-tab">
            <a className="tabs-tab-link">Security</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
            language='language-html'
            text={`<ul class="tabs">
  <li class="tabs-tab tabs-tab-is-active">
    <a class="tabs-tab-link">Processes</a> 
  </li>
  <li class="tabs-tab">
    <a class="tabs-tab-link">Servers</a> 
  </li>
  <li class="tabs-tab">
    <a class="tabs-tab-link">Agents</a>
  </li>
  <li class="tabs-tab">
    <a class="tabs-tab-link">Security</a>
  </li>
</ul>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Common Navigation</h3>
        <p>Section Header, Tabs, Subtabs, Controls and Banner</p>
      </div>
    </div>

    <div className="row">
      <div className="section-header">
          <div className="section-header-title"><div className="section-header-title-text">Section With Tabs</div>
            <div className="section-header-title-actions">
              <button className="button button button-is-primary u-mr-2">Primary Action</button>
              <button className="button">
                <i className="mms-icon-ellipsis"></i>
              </button>
            </div>
          </div>
        <ul className="section-header-tabs">
          <li className="section-header-tab section-header-tab-is-left">
            <a className="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>
          </li>
          <li className="section-header-tab section-header-tab-is-active">
            <a className="section-header-tab-link" href={"http://mongodb.com"}>Active Tab</a>
          </li>
          <li className="section-header-tab section-header-tab-is-beta">
            <a className="section-header-tab-link" href={"http://mongodb.com"}>Beta Tab</a>
          </li>
          <li className='section-header-more'>
            <a className="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true"  href={"http://mongodb.com"}>
               More <i className="fa fa-caret-down section-header-more-icon"></i></a>
          </li>
        </ul>
        <ul className="section-subtabs">
          <li className="section-subtabs-tab">
            <a className="section-subtabs-tab-link" href={"http://mongodb.com"}>Subtab</a>
          </li>
          <li className="section-subtabs-tab">
            <a className="section-subtabs-tab-is-active section-subtabs-tab-link" href={"http://mongodb.com"}>Active Subtab</a>
          </li>
          <li className="section-subtabs-tab">
            <a className="section-subtabs-tab-link" href={"http://mongodb.com"}>Last Subtab</a>
          </li>
        </ul>
        <div className="section-controls">
          <span className="section-controls-filter">
            <label className="section-controls-label">Filter:</label>
          </span>
          <input name="section-controls-checkbox-label" className="section-controls-box" type="checkbox"/> <div className="section-controls-foobar">Foo</div>
          <input name="section-controls-checkbox-label" className="section-controls-box" type="checkbox"/> <div className="section-controls-foobar">Bar</div>

          <label className="section-controls-label">Toggle:</label>
          <div className="button-group">
            <button className="button-group-button button button-is-xs button-is-selected">Option 1</button>
            <button className="button-group-button button button-is-xs">Option 2</button>
          </div>
        </div>
        <div className="section-controls">
          <label className="section-controls-label button-is-xs"><div className="section-controls-label-text">I'm stackable:</div></label>
          <a className="button button-is-xs">Example Control <i className="fa fa-caret-down"></i></a>
        </div>
        <div className="section-banner">
          <span className="section-banner-item">Collection:
            <span className="section-banner-keyword"> guns_n_roses</span>
          </span>
          <span className="section-banner-item">Documents: 111,111</span>
          <span className="section-banner-item">Total Datasize: 882.03 MB</span>
        </div>
      </div>
    </div>
    <pre>
    <code>
      <div>{ '<div class="section-header section-header-has-tabs section-header-has-breadcrumbs">' }</div>
      <div>{ '    <div class="section-header-title">' }</div>
      <div>{ '        <span class="section-header-title-text">Section with Tabs</span>' }</div>
      <div>{ '        <span class="section-header-title-actions">' }</div>
      <div>{ '            <div class="dropdown section-header-title-actions-dropdown">' }</div>
      <div>{ '                <button class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">' }</div>
      <div>{ '                    Primary Action <i class="fa fa-caret-down"></i>' }</div>
      <div>{ '                </button>' }</div>
      <div>{ '                <ul class="dropdown-menu">' }</div>
      <div>{ '                  <li><a>Option</a></li>' }</div>
      <div>{ '                  <li><a>Option</a></li>' }</div>
      <div>{ '                </ul>' }</div>
      <div>{ '            </div>' }</div>
      <div>{ '' }</div>
      <div>{ '            <div class="dropdown section-header-title-actions-dropdown">' }</div>
      <div>{ '                <button class="button button-has-icon" data-toggle="dropdown">' }</div>
      <div>{ '                    <i class="mms-icon-ellipsis"></i>' }</div>
      <div>{ '                </button>' }</div>
      <div>{ '                <ul class="dropdown-menu">' }</div>
      <div>{ '                  <li><a>Option</a></li>' }</div>
      <div>{ '                  <li><a>Option</a></li>' }</div>
      <div>{ '                </ul>' }</div>
      <div>{ '            </div>' }</div>
      <div>{ '        </span>' }</div>
      <div>{ '    </div>' }</div>
      <div>{ '    <ul class="section-header-tabs">' }</div>
      <div>{ '        <li class="section-header-tab section-header-tab-is-left"><a href="#" class="section-header-tab-link">Tab</a></li>' }</div>
      <div>{ '        <li class="section-header-tab section-header-tab-is-active"><a href="#" class="section-header-tab-link">Active Tab</a></li>' }</div>
      <div>{ '        <li class="section-header-tab section-header-tab-is-right section-header-tab-is-beta"><a href="#" class="section-header-tab-link">Beta Tab</a></li>' }</div>
      <div>{ '        <li>' }</div>
      <div>{ '            <button class="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true">' }</div>
      <div>{ '                More <i class="fa fa-caret-down section-header-more-icon"></i>' }</div>
      <div>{ '            </button>' }</div>
      <div>{ '        </li>' }</div>
      <div>{ '    </ul>' }</div>
      <div>{ '</div>' }</div>
      <div>{ '<ul class="section-subtabs">' }</div>
      <div>{ '    <li class="section-subtabs-tab"><a class="section-subtabs-tab-link">Subtab</a></li>' }</div>
      <div>{ '    <li class="section-subtabs-tab section-subtabs-tab-is-active"><a class="section-subtabs-tab-link">Active Subtab</a></li>' }</div>
      <div>{ '    <li class="section-subtabs-tab section-subtabs-tab-is-last"><a class="section-subtabs-tab-link">Last Subtab</a></li>' }</div>
      <div>{ '</ul>' }</div>
      <div>{ '<div class="section-controls">' }</div>
      <div>{ '    <span class="section-controls-filter">' }</div>
      <div>{ '        <label class="section-controls-label">Filter: </label>' }</div>
      <div>{ '        <label class="section-controls-checkbox-label">' }</div>
      <div>{ '        </label>' }</div>
      <div>{ '        <label class="section-controls-checkbox-label">' }</div>
      <div>{ '            <input type="checkbox"> Bar' }</div>
      <div>{ '        </label>' }</div>
      <div>{ '    </span>' }</div>
      <div>{ '' }</div>
      <div>{ '    <label class="section-controls-label">Toggle:</label>' }</div>
      <div>{ '    <div class="button-group">' }</div>
      <div>{ '        <button class="button-group-button button button-is-xs button-is-selected">Option 1</button>' }</div>
      <div>{ '        <button class="button-group-button button button-is-xs">Option 2</button>' }</div>
      <div>{ '    </div>' }</div>
      <div>{ '</div>' }</div>
      <div>{ '<div class="section-controls">' }</div>
      <div>{ "    <label class='section-controls-label'>I'm stackable:</label> "}</div>
      <div>{ '    <a class="button button-is-xs">Example Control <i class="fa fa-caret-down"></i></a>' }</div>
      <div>{ '</div>' }</div>
      <div>{ '<div class="section-banner">' }</div>
      <div>{ '    <span class="section-banner-item">Collection:' }</div>
      <div>{ '        <span class="section-banner-keyword">guns_n_roses</span>' }</div>
      <div>{ '    </span>' }</div>
      <div>{ '    <span class="section-banner-item">Documents: 111,111</span>' }</div>
      <div>{ '    <span class="section-banner-item">Total Datasize: 882.03 MB</span>' }</div>
      <div>{ '</div>' }</div>
    </code>
    </pre>
    <div className="row">
      <div className="section-header">
        <div className="section-header-title">
          <div className="section-header-title-text">Section Without Tabs</div>
          <div className="section-header-title-actions">
            <button className="button button button-is-primary u-mr-2">Primary Action</button>
            <button className="button">
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
      <div className="section-header">
      <div className="section-header-warnings">
        <div className="alert alert-warning section-warnings-alert" role="alert">
          <i className="fa fa-exclamation-triangle section-warnings-icon"></i> This is a warning
        </div>
      </div>
      <div className="section-header-title">
        <div className="section-header-title-text">Section With Banner</div>
          <div className="section-header-title-actions">
            <button className="button button button-is-primary u-mr-2">Primary Action</button>
            <button className="button" data-toggle="dropdown">
              <i className="mms-icon-ellipsis"></i>
            </button>
          </div>
      </div>
        <ul className="section-header-tabs">
          <li className="section-header-tab section-header-tab-is-left">
            <a className="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>
          </li>
          <li className="section-header-tab section-header-tab-is-active">
            <a className="section-header-tab-link" href={"http://mongodb.com"}>Active Tab</a>
          </li>
          <li className="section-header-tab section-header-tab-is-right">
            <a className="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>
          </li>
          <li className='section-header-more'>
            <a className="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true"  href={"http://mongodb.com"}>
                More <i className="fa fa-caret-down section-header-more-icon"></i></a>
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
