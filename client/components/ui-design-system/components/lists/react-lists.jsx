// ==================================================
//  DesignSystem - DSReactLists
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import TablePaginated from '../../react-components/TablePaginated.js';

class UIListsReact extends React.Component {

 render() {
    return (
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
              <Code
                language='language-html'
                text={`<ul class="checklist">
        <li class="checklist-item">This is the first feature you get</li>
        <li class="checklist-item">You probably like this feature even more</li>
        <li class="checklist-item">Wow! And there's one more. You gotta buy this</li>
      </ul>`}> 
              </Code>
            </div>
          </div>

          <div className="row">
            <div className="columns small-12">
              <h3>Nested List</h3>
              <ul className="nested-list">
                <li><a className="nested-list-parent-link" href=""><i className="mms-icon-database nested-list-icon"></i>books</a>
                  <ul>
                    <li><a className="nested-list-child-link" href="">authors</a></li>
                    <li><a className="nested-list-child-link" href="">agents</a></li>
                    <li><a className="nested-list-child-link" href="">publishers</a></li>
                    <li><a className="nested-list-child-link" href="">bookstores</a></li>
                  </ul>
                </li>
                <li><a className="nested-list-parent-link" href=""><i className="mms-icon-database nested-list-icon"></i>cinema</a>
                  <ul>
                    <li><a className="nested-list-child-link" href="">films</a></li>
                    <li><a className="nested-list-child-link" href="">actors</a></li>
                    <li><a className="nested-list-child-link" href="">directors</a></li>
                    <li><a className="nested-list-child-link" href="">writers</a></li>
                    <li><a className="nested-list-child-link" href="">agents</a></li>
                    <li><a className="nested-list-child-link" href="">studios</a></li>
                    <li><a className="nested-list-child-link" href="">theaters</a></li>
                  </ul>
                </li>
                <li><a className="nested-list-parent-link" href=""><i className="mms-icon-database nested-list-icon"></i>music</a>
                  <ul>
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
              <Code
                language='language-html'
                text={`<ul class="nested-list">
        <li><a class="nested-list-parent-link" href=""><i class="mms-icon-database nested-list-icon"></i>books</a>
          <ul>
            <li><a class="nested-list-child-link" href="">authors</a></li>
            <li><a class="nested-list-child-link" href="">agents</a></li>
            <li><a class="nested-list-child-link" href="">publishers</a></li>
            <li><a class="nested-list-child-link" href="">bookstores</a></li>
          </ul>
        </li>
        <li><a class="nested-list-parent-link" href=""><i class="mms-icon-database nested-list-icon"></i>cinema</a>
          <ul>
            <li><a class="nested-list-child-link" href="">films</a></li>
            <li><a class="nested-list-child-link" href="">actors</a></li>
            <li><a class="nested-list-child-link" href="">directors</a></li>
            <li><a class="nested-list-child-link" href="">writers</a></li>
            <li><a class="nested-list-child-link" href="">agents</a></li>
            <li><a class="nested-list-child-link" href="">studios</a></li>
            <li><a class="nested-list-child-link" href="">theaters</a></li>
          </ul>
        </li>
        <li><a class="nested-list-parent-link" href=""><i class="mms-icon-database nested-list-icon"></i>music</a>
          <ul>
            <li><a class="nested-list-child-link" href="">bands</a></li>
            <li><a class="nested-list-child-link" href="">singers</a></li>
            <li><a class="nested-list-child-link" href="">songwriters</a></li>
            <li><a class="nested-list-child-link" href="">managers</a></li>
            <li><a class="nested-list-child-link" href="">studios</a></li>
            <li><a class="nested-list-child-link" href="">venues</a></li>
          </ul>
        </li>
      </ul>`}> 
              </Code>
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
              <Code
                language='language-html'
                text={`<span class="number-circle u-mr-2">1</span>
      <span class="number-circle number-circle-is-current u-mr-2">2</span>
      <span class="number-circle number-circle-is-complete u-mr-2"></span>
      <span class="number-circle number-circle-is-pending u-mr-2">4</span>`}> 
              </Code>
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
              <Code
                language='language-html'
                text={`<ol class="step-indicator">
        <li class="step-indicator-step step-indicator-step-is-complete">Rey, these are your first steps</li>
        <li class="step-indicator-step">This is your second step</li>
        <li class="step-indicator-step step-indicator-step-is-inactive">This is your third step. Keep them short.</li>
      </ol>`}> 
              </Code>
            </div>
          </div>

         <div className="row u-mb-2">
          <div className="columns small-12">
            <h2>Pagination States</h2>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <ul className="tabs">
              <li className="tabs-tab">
                <Link to='/ui-design-system/components/lists' className="tabs-tab-link">CSS</Link>
              </li>
              <li className="tabs-tab tabs-tab-is-active">
                <Link to='/ui-design-system/components/lists/react-lists' className="tabs-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>

        <TablePaginated
          pageSize={25}
          data={}
        /> 
 
    </div>
    );
  }
}

export default UIListsReact;
