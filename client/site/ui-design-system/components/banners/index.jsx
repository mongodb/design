// ==================================================
//  DesignSystem - DSBanners
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';

const UIBanners = () => (
  <div className="wrap button-ui">
      <div className="row">
        <div className="columns small-12">
          <h1>Banners</h1>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <ul className="section-header-tabs">
            <li className="section-header-tab section-header-tab-is-active">
              <Link to='/ui-design-system/components/banners' className="section-header-tab-link">CSS</Link>
            </li>
            <li className="section-header-tab">
              <Link to='/ui-design-system/components/banners/react-banners' className="section-header-tab-link">React</Link>
            </li>
          </ul>
        </div>
      </div>
       <div className="row">
        <div className="columns small-12">
          <h2>Alerts</h2>
          <p>Alerts are available in four levels – success, warning, danger, and info – and with or without a dismiss button.</p>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <h3>Success</h3>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className="bem-alert bem-alert-is-success">
              <button type="button" className="bem-alert-close-button" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div>Well done! You successfully read this important alert message.</div>
          </div>
        </div>
      </div>
      <div className="row u-mb-3">
        <div className="columns small-12">
          <Code
            language='language-html'
            text={`<div class="bem-alert bem-alert-is-success">
    <button type="button" class="bem-alert-close-button" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <div>Well done! You successfully read this important alert message.</div>
</div>`}>
          </Code>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <h3>Warning</h3>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className="bem-alert bem-alert-is-warning">
              <div>Warning! Better check yourself before you wreck yourself, you’re not looking good.</div>
          </div>
        </div>
      </div>
      <div className="row u-mb-3">
        <div className="columns small-12">
          <Code
            language='language-html'
            text={`<div class="bem-alert bem-alert-is-warning">
    <div>Warning! Better check yourself before you wreck yourself, you’re not looking good.</div>
</div>`}>
          </Code>
        </div>
      </div>
            <div className="row">
        <div className="columns small-12">
          <h3>Danger</h3>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className="bem-alert bem-alert-is-danger">
              <div>Danger! Better check yourself, you’re not looking good.</div>
          </div>
        </div>
      </div>
      <div className="row u-mb-3">
        <div className="columns small-12">
          <Code
            language='language-html'
            text={`<div class="bem-alert bem-alert-is-danger">
    <div>Danger! Better check yourself, you’re not looking good.</div>
</div>`}>
          </Code>
        </div>
      </div>
            <div className="row">
        <div className="columns small-12">
          <h3>Info</h3>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className="bem-alert bem-alert-is-info">
              <div>Heads up! This alert needs your attention, but it’s not super important.</div>
          </div>
        </div>
      </div>
      <div className="row u-mb-3">
        <div className="columns small-12">
          <Code
            language='language-html'
            text={`<div class="bem-alert bem-alert-is-info">
    <div>Heads up! This alert needs your attention, but it’s not super important.</div>
</div>`}>
          </Code>
        </div>
      </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Status Banners</h2>
        <p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Draft</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="banner banner-is-draft">
          <p>Information explaining the draft banner notification.</p>
          <div className="u-float-right">
            <button className="button button-is-text button-is-xs u-mr-3">Close</button>
            <button className="button button-is-xs">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
       <Code
        language='language-html'
        text={`<div class="banner banner-is-draft">
  <p>Information explaining the draft banner notification.</p>
  <div class="u-float-right">
    <button class="button button-is-text button-is-xs u-mr-3">Close</button>
    <button class="button button-is-xs">Learn More</button>
  </div>
</div>`}>
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>In Progress</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="banner banner-is-in-progress">
          <p>Information explaining the in progress banner notification.</p>
          <div className="u-float-right">
            <button className="button button-is-text button-is-xs u-mr-3">Close</button>
            <button className="button button-is-xs">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="banner banner-is-in-progress">
  <p>Information explaining the in progress banner notification.</p>
  <div class="u-float-right">
    <button class="button button-is-text button-is-xs u-mr-3">Close</button>
    <button class="button button-is-xs">Learn More</button>
  </div>
</div>`}>
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Alert</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="banner banner-is-alert">
          <p>Information explaining the alert banner notification.</p>
          <div className="u-float-right">
            <button className="button button-is-text button-is-xs u-mr-3">Close</button>
            <button className="button button-is-xs">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
         <Code
          language='language-html'
          text={`<div class="banner banner-is-alert">
  <p>Information explaining the alert banner notification.</p>
  <div class="u-float-right">
    <button class="button button-is-text button-is-xs u-mr-3">Close</button>
    <button class="button button-is-xs">Learn More</button>
  </div>
</div>`}>
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Success</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="banner banner-is-success">
          <p>Information explaining the success banner notification.</p>
          <div className="u-float-right">
            <button className="button button-is-text button-is-xs u-mr-3">Close</button>
            <button className="button button-is-xs">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
       <Code
          language='language-html'
          text={`<div class="banner banner-is-success">
  <p>Information explaining the success banner notification.</p>
  <div class="u-float-right">
    <button class="button button-is-text button-is-xs u-mr-3">Close</button>
    <button class="button button-is-xs">Learn More</button>
  </div>
</div>`}>
        </Code>
      </div>
    </div>
    <div className="row">
        <div className="columns small-12">
          <h2>Callout Banners</h2>
          <p>Used for calling attention to new products, features, and functionality.</p>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <h3>Standard Callout</h3>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className="banner banner-is-callout">
            <p>Looking for a way to be webscale?</p>
            <div className="u-float-right">
              <button className="button button-is-small u-mr-2">Close</button>
              <button className="button button-is-primary button-is-small">Learn How</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row u-mb-3">
        <div className="columns small-12">
          <Code
            language='language-html'
            text={`<div class="banner banner-is-callout">
    <p>Looking for a way to be webscale?</p>
    <div class="u-float-right">
      <button class="button button-is-small u-mr-2">Close</button>
      <button class="button button-is-primary">Learn How</button>
    </div>
  </div>
</div>`}>
          </Code>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <h3>Condensed Banner Callout</h3>
        </div>
      </div>
      <div className="row">
        <div className="columns small-6">
          <div className="banner banner-is-callout banner-is-condensed">
            <h4>Without the bubble label above</h4>
            <p className="u-mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
            <div className="u-float-right">
              <button className="button button-is-small u-mr-2">Close</button>
              <button className="button button-is-primary button-is-small">Learn How</button>
            </div>
          </div>
        </div>
        <div className="columns small-6">
          <div className="banner banner-is-callout banner-is-condensed">
            <div className="bubble-label bubble-label-blue">NEW!</div>
            <h4>With the bubble label above</h4>
            <p className="u-mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
            <div className="u-float-right">
              <button className="button button-is-small u-mr-2">Close</button>
              <button className="button button-is-primary button-is-small">Learn How</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row u-mb-3">
        <div className="columns small-12">
          <Code
            language='language-html'
            text={`<div class="banner banner-is-callout banner-is-condensed">
  <h4>Without the bubble label above</h4>
  <p class="u-mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
  <div class="u-float-right">
    <button class="button button-is-small u-mr-2">Close</button>
    <button class="button button-is-primary button-is-small">Learn How</button>
  </div>
</div>

<div class="banner banner-is-callout banner-is-condensed">
  <div class="bubble-label bubble-label-blue">NEW!</div>
  <h4>With the bubble label above</h4>
  <p class="u-mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
  <div class="u-float-right">
    <button class="button button-is-small u-mr-2">Close</button>
    <button class="button button-is-primary button-is-small">Learn How</button>
  </div>
</div>`}>
          </Code>
      </div>
    </div>
  </div>
);

export default UIBanners;
