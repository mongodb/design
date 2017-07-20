// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UICode = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Code</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Code Styles</h2>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Copyable Command</h3>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <div className="copy-command">
          <span className="copy-command-text">this is a command that you can copy. it will not break onto the next line even if it is really long, the overflow will keep scrolling horizontally.</span>
          <button className="copy-command-button">
            <i className="fa fa-files-o"></i> Copy
          </button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="copy-command">' }</div>
            <div>{ '  <span className="copy-command-text">this is a command that you can copy. it will break onto the next line even if it is really long, the overflow will keep scrolling horizontally.</span>' }</div>
            <div>{ '  <button className="copy-command-button">' }</div>
            <div>{ '    <i className="fa fa-files-o"></i> Copy' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <div className="copy-command">
          <span className="copy-command-text">by default these are not full width</span>
          <button className="copy-command-button">
            <i className="fa fa-files-o"></i> Copy
          </button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="copy-command">' }</div>
            <div>{ '  <span className="copy-command-text">by default these are not full width</span>' }</div>
            <div>{ '  <button className="copy-command-button">' }</div>
            <div>{ '    <i className="fa fa-files-o"></i> Copy' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <div className="copy-command copy-command-is-full-width">
          <span className="copy-command-text copy-command-text-is-full-width">by default these are not full width wont</span>
          <button className="copy-command-button">
            <i className="fa fa-files-o"></i> Copy
          </button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="copy-command copy-command-is-full-width">' }</div>
            <div>{ '  <span className="copy-command-text copy-command-text-is-full-width">but you can force them to be</span>' }</div>
            <div>{ '  <button className="copy-command-button">' }</div>
            <div>{ '    <i className="fa fa-files-o"></i> Copy' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Codeblock</h3>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <div className="codeblock">TEST
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="codeblock">' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UICode;
