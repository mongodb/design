// ==================================================
//  DesignSystem - DSBanners
// ==================================================

import React from 'react';
import '../../../styling/root.less';

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
    		<p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="banner banner-is-callout">' }</div>
            <div>{ '  <p>Looking for a way to be webscale?</p>' }</div>
            <div>{ '  <div className="banner-button-group">' }</div>
            <div>{ '    <button className="button button-is-primary button-is-small u-mr-2">Learn How</button>' }</div>
            <div>{ '    <button className="button button-is-small">Close</button>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="banner banner-is-callout">' }</div>
            <div>{ '  <p>Looking for a way to be webscale?</p>' }</div>
            <div>{ '  <div className="banner-button-group">' }</div>
            <div>{ '    <button className="button button-is-primary button-is-small u-mr-2">Learn How</button>' }</div>
            <div>{ '    <button className="button button-is-small">Close</button>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="banner banner-is-draft">' }</div>
            <div>{ '  <p>Information explaining the draft banner notification.</p>' }</div>
            <div>{ '  <div className="u-float-right">' }</div>
            <div>{ '    <button className="button button-is-text button-is-xs u-mr-3">Close</button>' }</div>
            <div>{ '    <button className="button button-is-xs">Learn More</button>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="banner banner-is-in-progress">' }</div>
            <div>{ '  <p>Information explaining the in progress banner notification.</p>' }</div>
            <div>{ '  <div className="u-float-right">' }</div>
            <div>{ '    <button className="button button-is-text button-is-xs u-mr-3">Close</button>' }</div>
            <div>{ '    <button className="button button-is-xs">Learn More</button>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="banner banner-is-alert">' }</div>
            <div>{ '  <p>Information explaining the alert banner notification.</p>' }</div>
            <div>{ '  <div className="u-float-right">' }</div>
            <div>{ '    <button className="button button-is-text button-is-xs u-mr-3">Close</button>' }</div>
            <div>{ '    <button className="button button-is-xs">Learn More</button>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="banner banner-is-success">' }</div>
            <div>{ '  <p>Information explaining the success banner notification.</p>' }</div>
            <div>{ '  <div className="u-float-right">' }</div>
            <div>{ '    <button className="button button-is-text button-is-xs u-mr-3">Close</button>' }</div>
            <div>{ '    <button className="button button-is-xs">Learn More</button>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UIBanners;
