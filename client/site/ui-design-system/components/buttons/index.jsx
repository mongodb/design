// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';

const UIButtons = () => (
  <div className="wrap button-ui">
    <div className="row">
      <div className="columns small-12">
        <h1>Buttons</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <ul className="section-header-tabs">
          <li className="section-header-tab section-header-tab-is-active">
            <Link to='/ui-design-system/components/buttons' className="section-header-tab-link">CSS</Link>
          </li>
          <li className="section-header-tab">
            <Link to='/ui-design-system/components/buttons/react-buttons' className="section-header-tab-link">React</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Button Styles</h2>
        <p>Our button styles comes in a variety of flavors including default, primary, destructive and disabled.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <button className="button u-mr-2">Default Button</button>
        <button className="button button-is-primary u-mr-2">Primary Button</button>
        <button className="button button-is-info u-mr-2">Info Button</button>
        <button className="button button-is-danger u-mr-2">Destructive Button</button>
        <button className="button" disabled>Disabled Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<button class="button">Default Button</button>
<button class="button button-is-primary">Primary Button</button>
<button class="button button-is-danger">Destructive Button</button>
<button class="button" disabled>Disabled Button</button>`}> 
        </Code>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Dark Background</h3>
        <p>Use the darker button when placed on a dark background.</p>
        <button className="button button-is-default-inverse u-mr-2">Darker Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<button class="button button-is-default-inverse">Darker Button</button>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>With Ellipsis Icons</h3>
        <button className="button button-has-ellipsis-only u-mr-2"></button>
        <button className="button button-has-ellipsis-only button-is-small u-mr-2"></button>
        <button className="button button-has-ellipsis-only button-is-xs u-mr-2"></button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<button class="button button-has-ellipsis-only"></button>
<button class="button button-has-ellipsis-only button-is-small"></button>
<button class="button button-has-ellipsis-only button-is-xs"></button>`}> 
        </Code>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h2>Button Sizes</h2>
        <p>Our buttons can be displayed as four different sizes.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <button className="button button-is-xs u-mr-2">Extra Small</button>
        <button className="button button-is-small u-mr-2">Small Button</button>
        <button className="button u-mr-2">Normal Button</button>
        <button className="button button-is-large u-mr-2">Large Button</button>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <button className="button button-is-full u-mt-2">Full Width Button</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<button class="button button-is-xs">Extra Small</button>
<button class="button button-is-small">Small Button</button>
<button class="button">Normal Button</button>
<button class="button button-is-large">Large Button</button>`}> 
        </Code>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h2>Button Groups</h2>
        <p>Our buttons can be displayed as four different sizes.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="button-group u-mr-2">
          <button className="button-group-button button button-is-xs">First</button>
          <button className="button-group-button button button-is-xs">Last</button>
        </div>
        <div className="button-group">
          <button className="button-group-button button button-is-xs">First</button>
          <button className="button-group-button button button-is-xs">Middle</button>
          <button className="button-group-button button button-is-xs">Last</button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="button-group">
  <button class="button-group-button button button-is-xs">First</button>
  <button class="button-group-button button button-is-xs">Last</button>
</div>
<div class="button-group">
  <button class="button-group-button button button-is-xs">First</button>
  <button class="button-group-button button button-is-xs">Middle</button>
  <button class="button-group-button button button-is-xs">Last</button>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Links</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
          <a className="link">This is a normal styled link</a><br></br>
          <a className="link link-is-underlined">This link is always underlined, even when not hovering</a><br></br>
          <a className="link link-on-dark">This link is brighter, to be used against a blue background</a><br></br>
          <a className="link link-is-disabled">This link is disabled, which prevents click and hover events like tooltips</a>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<a class="link">This is a normal styled link</a><br></br>
<a class="link link-is-underlined">This link is always underlined, even when not hovering</a><br></br>
<a class="link link-on-dark">This link is brighter, to be used against a blue background</a><br></br>
<a class="link link-is-disabled">This link is disabled, which prevents click and hover events like tooltips</a>`}> 
        </Code>
      </div>
    </div>
  </div>
);

export default UIButtons;
