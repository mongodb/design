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
        <div className="section-header-title">
          <div className="section-header-title-text">Section With Tabs</div>
          <div className="section-header-title-actions">
            <button className="button button button-is-primary u-mr-2">Primary Action</button>
            <button className="button"><i className="mms-icon-ellipsis"></i></button>
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
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language="language-jsx"
          text={`<div class="section-header">
  <div class="section-header-title">
    <div class="section-header-title-text">Section With Tabs</div>
    <div class="section-header-title-actions">
      <button class="button button button-is-primary u-mr-2">Primary Action</button>
      <button class="button"><i class="mms-icon-ellipsis"></i></button>
    </div>
  </div>
  <ul class="section-header-tabs">
    <li class="section-header-tab section-header-tab-is-left">
      <a class="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>
    </li>
    <li class="section-header-tab section-header-tab-is-active">
      <a class="section-header-tab-link" href={"http://mongodb.com"}>Active Tab</a>
    </li>
    <li class="section-header-tab section-header-tab-is-beta">
      <a class="section-header-tab-link" href={"http://mongodb.com"}>Beta Tab</a>
    </li>
    <li class='section-header-more'>
      <a class="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true"  href={"http://mongodb.com"}>
         More <i class="fa fa-caret-down section-header-more-icon"></i></a>
    </li>
  </ul>
  <ul class="section-subtabs">
    <li class="section-subtabs-tab">
      <a class="section-subtabs-tab-link" href={"http://mongodb.com"}>Subtab</a>
    </li>
    <li class="section-subtabs-tab">
      <a class="section-subtabs-tab-is-active section-subtabs-tab-link" href={"http://mongodb.com"}>Active Subtab</a>
    </li>
    <li class="section-subtabs-tab">
      <a class="section-subtabs-tab-link" href={"http://mongodb.com"}>Last Subtab</a>
    </li>
  </ul>
  <div class="section-controls">
    <span class="section-controls-filter">
      <label class="section-controls-label">Filter:</label>
    </span>
    <input name="section-controls-checkbox-label" class="section-controls-box" type="checkbox"/> <div class="section-controls-foobar">Foo</div>
    <input name="section-controls-checkbox-label" class="section-controls-box" type="checkbox"/> <div class="section-controls-foobar">Bar</div>
    <label class="section-controls-label">Toggle:</label>
    <div class="button-group">
      <button class="button-group-button button button-is-xs button-is-selected">Option 1</button>
      <button class="button-group-button button button-is-xs">Option 2</button>
    </div>
  </div>
  <div class="section-controls">
    <label class="section-controls-label button-is-xs"><div class="section-controls-label-text">I'm stackable:</div></label>
    <a class="button button-is-xs">Example Control <i class="fa fa-caret-down"></i></a>
  </div>
  <div class="section-banner">
    <span class="section-banner-item">Collection:
      <span class="section-banner-keyword"> guns_n_roses</span>
    </span>
    <span class="section-banner-item">Documents: 111,111</span>
    <span class="section-banner-item">Total Datasize: 882.03 MB</span>
  </div>
</div>`}>
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Section Without Tabs</h3>
      </div>
    </div>
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
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code 
          language="language-html"
          text={`<div class="section-header">
  <div class="section-header-title">
    <div class="section-header-title-text">Section Without Tabs</div>
    <div class="section-header-title-actions">
      <button class="button button button-is-primary u-mr-2">Primary Action</button>
      <button class="button">
        <i class="mms-icon-ellipsis"></i>
      </button>
    </div>
  </div>
</div>`}>
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Section With Banner</h3>
      </div>
    </div>
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
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code language="language-html" 
        text={`<div class="section-header">
  <div class="section-header-warnings">
    <div class="alert alert-warning section-warnings-alert" role="alert">
      <i class="fa fa-exclamation-triangle section-warnings-icon"></i> This is a warning
    </div>
  </div>
  <div class="section-header-title">
    <div class="section-header-title-text">Section With Banner</div>
      <div class="section-header-title-actions">
        <button class="button button button-is-primary u-mr-2">Primary Action</button>
        <button class="button" data-toggle="dropdown">
          <i class="mms-icon-ellipsis"></i>
        </button>
      </div>
  </div>
    <ul class="section-header-tabs">
      <li class="section-header-tab section-header-tab-is-left">
        <a class="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>
      </li>
      <li class="section-header-tab section-header-tab-is-active">
        <a class="section-header-tab-link" href={"http://mongodb.com"}>Active Tab</a>
      </li>
      <li class="section-header-tab section-header-tab-is-right">
        <a class="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>
      </li>
      <li class='section-header-more'>
        <a class="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true"  href={"http://mongodb.com"}>
            More <i class="fa fa-caret-down section-header-more-icon"></i></a>
      </li>
    </ul>
  </div>`}></Code>
      </div>
    </div>
  </div>
);

export default UITabs;
