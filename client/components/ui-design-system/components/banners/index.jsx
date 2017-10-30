// ==================================================
//  DesignSystem - DSBanners
// ==================================================

import React from 'react';
import Code from '../../subcomponents/code';

const UIBanners = () => (
  <div className="wrap button-ui">
      <div className="row u-mb-3">
        <div className="columns small-12">
          <h1>Banners</h1>
        </div>
      </div>
      <div className="row u-mb-3">
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
      <div className="row u-mb-5">
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
      <div className="row u-mb-5">
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

    <div className="row u-mb-3">
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
    <div className="row u-mb-5">
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
    <div className="row u-mb-5">
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
    <div className="row u-mb-5">
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
    <div className="row u-mb-5">
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
  </div>
);

export default UIBanners;
