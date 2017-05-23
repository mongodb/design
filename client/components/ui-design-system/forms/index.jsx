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

  </div>
);

export default UIForms;
