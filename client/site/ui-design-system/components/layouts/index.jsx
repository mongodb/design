// ==================================================
// DesignSystem - DSLayouts
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';
import SplashView from '../../../../react-components/SplashView.js';

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
        <p>This zero state component can be used for features that require some user action before there is any viewable content or data. The component also provides various combinations of elements to accommodate most informational and loading scenarios. <a href="https://wiki.corp.mongodb.com/display/10GEN/Zero+States%3A+How+To" target="_blank">More information about choosing zero state graphics here.</a></p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <SplashView
          graphic = 'dashboard-zero.svg'
          headline = 'A positive and actionable headline'
          description = 'Language should be direct in communicating need of the feature as well as setting appropriate expectation for using the feature.'
          primaryCTA = 'Do something'
          secondaryCTA = 'Do something else'
          linkCTA = 'More information about choosing zero state graphics here'
          linkTarget = 'https://wiki.corp.mongodb.com/display/10GEN/Zero+States%3A+How+To'
          isLoading = {false} />
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="empty-view">
  <div class="empty-view-graphic"></div>
  <div class="empty-view-text">
    <h1 class="empty-view-text-is-heading">A positive and actionable headline</h1>
    <h3 class="empty-view-text-is-description">Language should be direct in communicating need of the feature as well as setting appropriate expectation for using the feature.</h3>
  </div>
  <div class="empty-view-cta">
    <button class="button button-is-primary button-is-large">Do something</button>
    <button class="button button-is-info button-is-large">Do something else</button>
  </div>
  <p class="empty-view-link u-display-none">
    <a href="http://google.com" target="_blank">More information about choosing zero state graphics here</a>
  </p>
  <div class="empty-view-loading u-display-none">
  </div>
</div>`}>
        </Code>
      </div>
    </div>

  </div>

);

export default UILayouts;
