// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIForms = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Forms</h1>
      </div>
    </div>
    <div className="row u-mb-3">
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
    <div className="row u-mb-0">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
    </div>

    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<input type="text" placeholder={"Something"} className="input" />' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Small Input</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input input-is-small" />
      </div>
    </div>

    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<input type="text" placeholder={"Something"} className="input input-is-small" />' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Input with Button</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-10">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
      <div className="columns small-2">
        <button className="button button-is-primary button-is-full">Submit Form</button>
      </div>
    </div>

    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<input type="text" placeholder={"Something"} className="input" />' }</div>
            <div>{ '<button className="button button-is-primary button-is-full">Submit Form</button>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Input States</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <h4>Input Success</h4>
        <div className="input-with-message">
          <input type="text" placeholder={'Something'} className="input input-is-success"/>
          <div className="success-label">Success</div>
        </div>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="input-with-message">' }</div>
            <div>{ '<input type="text" placeholder={"Something"} className="input input-is-success" />' }</div>
            <div>{'<div className="success-label">Success</div>'}</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>
    <div className="row u-mb-0">
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="input-with-message">' }</div>
            <div>{ '<input type="text" placeholder={"Something"} className="input input-has-error" />' }</div>
            <div>{ '<p className="error-message">Contextual alert message goes here</p>'}</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>
 
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>Rich Form Controls</h2>
        <p>Occasionally a form calls for more than a simple radio button or checkbox. These rich form controls pack that extra punch.</p>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked="" />
            <div className="rich-radio-main-text">A Selected Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="clearfix">' }</div>
            <div>{ '  <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">' }</div>
            <div>{ '    <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked="" />' }</div>
            <div>{ '    <div className="rich-radio-main-text">A Selected Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label className="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />' }</div>
            <div>{ '    <div className="rich-radio-main-text">A Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label className="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />' }</div>
            <div>{ '    <div className="rich-radio-main-text">A Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UIForms;
