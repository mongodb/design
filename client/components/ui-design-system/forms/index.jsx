// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIForms = () => (
  <div className="wrap">
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h1>Forms</h1>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h2>Inputs</h2>
        <p>Inputs are used throughout the UI for several different purposes. Most frequently, inputs are used within the context of a form. Other uses include searching and filtering.</p>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h4>Default Input</h4>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
      	<input type="text" placeholder={'Something'} className="input" />
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h4>Small Input</h4>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
      	<input type="text" placeholder={'Something'} className="input input-is-small" />
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h4>Input with Button</h4>
      </div>
    </div>
    <div className="row u-mb-1">
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
            <div>{ '<div className="columns small-12 medium-6 large-1">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-2">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-3">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-4">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-5">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-6">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-7">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-8">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-9">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-10">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-11">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-12">Content Here</div>' }</div>
          </code>
    		</pre>
      </div>
    </div>
  </div>
);

export default UIForms;
