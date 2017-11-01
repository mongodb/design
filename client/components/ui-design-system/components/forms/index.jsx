// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import Code from '../../subcomponents/code';

const UIForms = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1>Forms</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Inputs</h2>
        <p>Inputs are used throughout the UI for several different purposes. Most frequently, inputs are used within the context of a form. Other uses include searching and filtering.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Default Input</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<input type="text" placeholder={"Something"} class="input" />`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Small Input</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input input-is-small" />
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<input type="text" placeholder={'Something'} class="input input-is-small" />`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Input with Button</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-10">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
      <div className="columns small-2">
        <button className="button button-is-primary button-is-full">Submit Form</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<input type="text" placeholder={"Something"} class="input" />
<button class="button button-is-primary button-is-full">Submit Form</button>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Input States</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h4>Input Success</h4>
        <div className="input-with-message">
          <input type="text" placeholder={'Something'} className="input input-is-success input-form-control"/>
          <div className="success-label">Success</div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="input-with-message">
  <input type="text" placeholder={'Something'} class="input input-is-success input-form-control"/>
  <div class="success-label">Success</div>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
       <h4>Input Error</h4>
        <div className="input-with-message">
          <input type="text" placeholder={'Something'} className="input input-has-error"/>
          <p className="error-message">Contextual alert message goes here</p>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="input-with-message">
  <input type="text" placeholder={'Something'} class="input input-has-error"/>
  <p class="error-message">Contextual alert message goes here</p>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Obscurable Input</h3>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <div className="input-with-message">
          <input type="password" readOnly="" placeholder={'This is an obscurable input for viewing things like passwords'} className="input input-form-control" />
          <div className="input-with-message-toggle">Show</div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="input-with-message">
          <input type="text" readOnly="" placeholder={'This is an input for viewing things like keys'} className="input input-form-control" />
          <div className="input-with-message-toggle">Hide</div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="input-with-message">
  <input type="password" readonly="" placeholder={'This is an obscurable input for viewing things like passwords'} class="input input-form-control" />
  <div class="input-with-message-toggle">Show</div>
</div>
<div class="input-with-message">
  <input type="text" readonly="" placeholder={'This is an input for viewing things like keys'} class="input input-form-control" />
  <div class="input-with-message-toggle">Hide</div>
</div>`}> 
        </Code>
      </div>
    </div>
  </div>
);

export default UIForms;
