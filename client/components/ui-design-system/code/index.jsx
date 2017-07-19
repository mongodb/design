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
        <div className="snippet">
          <div className="snippet-is-single">this is a command that you can copy. it won't break onto the next line even if it's really long, the overflow will keep scrolling horizontally.</div>
          <button className="snippet-has-button">copy</button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="snippet">' }</div>
            <div>{ '    <div className="snippet-is-single">this is a command that you can copy. it wont break onto the next line even if its really long, the overflow will keep scrolling horizontally.</div>' }</div>
            <div>{ '    <button className="snippet-has-button">copy</button>' }</div>
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
        <div className="snippet">
            <div className="snippet-has-multiple">this is a code block.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
            </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="snippet">' }</div>
            <div>{ '    <div className="snippet-has-multiple"> const exampleCodeblock = {' }</div>
            <div>{ '        description: this is a codeblock that preserves whitespace' }</div>
            <div>{ '        overflow: this is also scrollable horizontally, so it wont break onto the next line even if its really long, it just keeps scrolling and scrolling and scrolling...' } </div>
            <div>{ '    };</div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UICode;
