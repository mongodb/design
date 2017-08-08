// ==================================================
//  DesignSystem - DSTables
// ==================================================

import React from 'react';
import '../../../../styling/root.less';


const UILists = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Lists</h1>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>List Styles</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Checklist</h3>
        <ul className="checklist">
          <li className="checklist-item">This is the first feature you get</li>
          <li className="checklist-item">You probably like this feature even more</li>
          <li className="checklist-item">Wow! And there's one more. You gotta buy this</li>
        </ul>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<ul class="checklist">' }</div>
            <div>{ '  <li class="checklist-item">This is the first feature you get</li>' }</div>
            <div>{ '  <li class="checklist-item">You probably like this feature even more</li>' }</div>
            <div>{ '  <li class="checklist-item">Wow! And there\'s one more. You gotta buy this</li>' }</div>
            <div>{ '</ul>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Nested List</h3>
        <ul className="nested-list">
          <li><a className="nested-list-parent-link" href="">books</a>
            <ul className="nested-list-child-container">
              <li><a className="nested-list-child-link" href="">authors</a></li>
              <li><a className="nested-list-child-link" href="">agents</a></li>
              <li><a className="nested-list-child-link" href="">publishers</a></li>
              <li><a className="nested-list-child-link" href="">bookstores</a></li>
            </ul>
          </li>
          <li><a className="nested-list-parent-link" href="">cinema</a>
            <ul className="nested-list-child-container">
              <li><a className="nested-list-child-link" href="">films</a></li>
              <li><a className="nested-list-child-link" href="">actors</a></li>
              <li><a className="nested-list-child-link" href="">directors</a></li>
              <li><a className="nested-list-child-link" href="">writers</a></li>
              <li><a className="nested-list-child-link" href="">agents</a></li>
              <li><a className="nested-list-child-link" href="">studios</a></li>
              <li><a className="nested-list-child-link" href="">theaters</a></li>
            </ul>
          </li>
          <li><a className="nested-list-parent-link" href="">music</a>
            <ul className="nested-list-child-container">
              <li><a className="nested-list-child-link" href="">bands</a></li>
              <li><a className="nested-list-child-link" href="">singers</a></li>
              <li><a className="nested-list-child-link" href="">songwriters</a></li>
              <li><a className="nested-list-child-link" href="">managers</a></li>
              <li><a className="nested-list-child-link" href="">studios</a></li>
              <li><a className="nested-list-child-link" href="">venues</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<ul class="nested-list">' }</div>
            <div>{ '  <li><a class="nested-list-parent-link" href="">books' }</div>
            <div>{ '    <ul class="nested-list-child-container">' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">authors</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">agents</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">publishers</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">bookstores</a></li>' }</div>
            <div>{ '    </ul>' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li><a class="nested-list-parent-link" href="">cinema' }</div>
            <div>{ '    <ul class="nested-list-child-container">' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">films</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">actors</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">directors</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">writers</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">agents</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">studios</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">theaters</a></li>' }</div>
            <div>{ '    </ul>' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '  <li><a class="nested-list-parent-link" href="">music' }</div>
            <div>{ '    <ul class="nested-list-child-container">' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">bands</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">singers</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">songwriters</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">managers</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">studios</a></li>' }</div>
            <div>{ '      <li><a class="nested-list-child-link" href="">venues</a></li>' }</div>
            <div>{ '    </ul>' }</div>
            <div>{ '  </li>' }</div>
            <div>{ '</ul>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Progress Indicators</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Number Circles</h3>
        <p>For showing wizard progress.</p>
        <span className="number-circle u-mr-2">1</span>
        <span className="number-circle number-circle-is-current u-mr-2">2</span>
        <span className="number-circle number-circle-is-complete u-mr-2"></span>
        <span className="number-circle number-circle-is-pending u-mr-2">4</span>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<span class="number-circle u-mr-2">1</span>' }</div>
            <div>{ '<span class="number-circle number-circle-is-current u-mr-2">2</span>' }</div>
            <div>{ '<span class="number-circle number-circle-is-complete u-mr-2"></span>' }</div>
            <div>{ '<span class="number-circle number-circle-is-pending u-mr-2">4</span>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Step Indicator</h3>
        <ol className="step-indicator">
          <li className="step-indicator-step step-indicator-step-is-complete">Rey, these are your first steps</li>
          <li className="step-indicator-step">This is your second step</li>
          <li className="step-indicator-step step-indicator-step-is-inactive">This is your third step. Keep them short.</li>
        </ol>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<ol class="step-indicator">' }</div>
            <div>{ '  <li class="step-indicator-step step-indicator-step-is-complete">Rey, these are your first steps</li>' }</div>
            <div>{ '  <li class="step-indicator-step">This is your second step</li>' }</div>
            <div>{ '  <li class="step-indicator-step step-indicator-step-is-inactive">This is your third step. Keep them short.</li>' }</div>
            <div>{ '</ol>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Pagination States</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Controls Enabled</h3>
        <div className="paginator">
          <span className="paginator-control paginator-control-is-left">
            <button className="paginator-button paginator-button-is-previous">
            </button> Previous
          </span>
          <span className="paginator-text">
            <strong>100-200 results (both controls enabled)</strong>
          </span>
          <span className="paginator-control paginator-control-is-right">Next
            <button className="paginator-button paginator-button-is-next">
            </button>
          </span>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="paginator">' }</div>
            <div>{ '  <span class="paginator-control paginator-control-is-left">' }</div>
            <div>{ '    <button class="paginator-button paginator-button-is-previous">' }</div>
            <div>{ '    </button> Previous' }</div>
            <div>{ '  </span>' }</div>
            <div>{ '  <span class="paginator-text">' }</div>
            <div>{ '    <strong>100-200 results (both controls enabled)</strong>' }</div>
            <div>{ '  </span>' }</div>
            <div>{ '  <span class="paginator-control paginator-control-is-right">Next' }</div>
            <div>{ '    <button class="paginator-button paginator-button-is-next">' }</div>
            <div>{ '    </button>' }</div>
            <div>{ '  </span>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Controls Disabled</h3>
        <div className="paginator paginator-is-borderless">
          <span className="paginator-control paginator-control-is-left paginator-control-is-disabled">
            <button className="paginator-button paginator-button-is-previous" disabled>
            </button> Previous
          </span>
          <span className="paginator-text">
            <strong>0-0 results (both controls disabled, borderless example)</strong>
          </span>
          <span className="paginator-control paginator-control-is-right paginator-control-is-disabled" >Next
            <button className="paginator-button paginator-button-is-next" disabled>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="paginator paginator-is-borderless">' }</div>
            <div>{ '  <span class="paginator-control paginator-control-is-left paginator-control-is-disabled">' }</div>
            <div>{ '    <button class="paginator-button paginator-button-is-previous" disabled>' }</div>
            <div>{ '    </button> Previous' }</div>
            <div>{ '  </span>' }</div>
            <div>{ '  <span class="paginator-text">' }</div>
            <div>{ '    <strong>0-0 results (both controls disabled, borderless example)</strong>' }</div>
            <div>{ '  </span>' }</div>
            <div>{ '  <span class="paginator-control paginator-control-is-right paginator-control-is-disabled">Next' }</div>
            <div>{ '    <button class="paginator-button paginator-button-is-next" disabled>' }</div>
            <div>{ '    </button>' }</div>
            <div>{ '  </span>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>






  </div>
);

export default UILists;
