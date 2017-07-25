// ==================================================
//  DesignSystem - DSTables
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UITables = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Tables</h1>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>Standard Table</h2>
        <p>We use the <a href={"http://foundation.zurb.com/sites/docs/grid.html"} className="link">Foundation grid</a> as our base grid system. It is customizable, flexible and responsive.</p>
        <p>When setting up your page with the grid, be sure to include the <span className="code">small-#</span>, <span className="code">medium-#</span> and <span className="code">large-#</span> values. These values represent how the grid will adapt to small, medium and large screen formats.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Light Theme</h3>
        <p>Use on a light background.</p>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <table className="table">
          <thead>
            <tr className="table-row">
              <th className="table-header">Name</th>
              <th className="table-header">Status</th>
              <th className="table-header">Version</th>
              <th className="table-header table-cell-has-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-column table-cell"><a href={""} className="link">free-shard-0</a></td>
              <td className="table-column table-cell">1 min ago</td>
              <td className="table-column table-cell">3.4.4</td>
              <td className="table-column table-cell table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-column table-cell"><a href={""} className="link">free-shard-0</a></td>
              <td className="table-column table-cell">1 min ago</td>
              <td className="table-column table-cell">3.4.4</td>
              <td className="table-column table-cell table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-column table-cell"><a href={""} className="link">free-shard-0</a></td>
              <td className="table-column table-cell">1 min ago</td>
              <td className="table-column table-cell">3.4.4</td>
              <td className="table-column table-cell table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<table className="table">' }</div>
            <div>{ '  <thead>' }</div>
            <div>{ '    <tr className="table-row">' }</div>
            <div>{ '      <th className="table-header">Name</th>' }</div>
            <div>{ '      <th className="table-header">Status</th>' }</div>
            <div>{ '      <th className="table-header">Version</th>' }</div>
            <div>{ '      <th className="table-header table-cell-has-actions">Actions</th>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </thead>' }</div>
            <div>{ '  <tbody>' }</div>
            <div>{ '    <tr className="table-row">' }</div>
            <div>{ '      <td className="table-column table-cell"><a href={""} className="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="table-column table-cell">1 min ago</td>' }</div>
            <div>{ '      <td className="table-column table-cell">3.4.4</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-has-actions">' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr className="table-row">' }</div>
            <div>{ '      <td className="table-column table-cell"><a href={""} className="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="table-column table-cell">1 min ago</td>' }</div>
            <div>{ '      <td className="table-column table-cell">3.4.4</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-has-actions">' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr className="table-row">' }</div>
            <div>{ '      <td className="table-column table-cell"><a href={""} className="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="table-column table-cell">1 min ago</td>' }</div>
            <div>{ '      <td className="table-column table-cell">3.4.4</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-has-actions">' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </tbody>' }</div>
            <div>{ '</table>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Dark Theme</h3>
        <p>Use on a dark background.</p>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <table className="table">
          <thead>
            <tr className="table-row table-row-is-dark">
              <th className="table-header table-header-is-dark">Name</th>
              <th className="table-header table-header-is-dark"> Status</th>
              <th className="table-header table-header-is-dark">Version</th>
              <th className="table-header table-header-is-dark table-cell-has-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row table-row-is-dark">
              <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>
              <td className="table-column table-cell table-cell-is-dark">1 min ago</td>
              <td className="table-column table-cell table-cell-is-dark">3.4.4</td>
              <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="table-row table-row-is-dark">
              <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>
              <td className="table-column table-cell table-cell-is-dark">1 min ago</td>
              <td className="table-column table-cell table-cell-is-dark">3.4.4</td>
              <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="table-row table-row-is-dark">
              <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>
              <td className="table-column table-cell table-cell-is-dark">1 min ago</td>
              <td className="table-column table-cell table-cell-is-dark">3.4.4</td>
              <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<table className="table">' }</div>
            <div>{ '  <thead>' }</div>
            <div>{ '    <tr className="table-row table-row-is-dark">' }</div>
            <div>{ '      <th className="table-header table-header-is-dark">Name</th>' }</div>
            <div>{ '      <th className="table-header table-header-is-dark">Status</th>' }</div>
            <div>{ '      <th className="table-header table-header-is-dark">Version</th>' }</div>
            <div>{ '      <th className="table-header table-header-is-dark table-cell-has-actions">Actions</th>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </thead>' }</div>
            <div>{ '  <tbody>' }</div>
            <div>{ '    <tr className="table-row table-row-is-dark">' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark">1 min ago</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr className="table-row table-row-is-dark">' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark">1 min ago</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr className="table-row table-row-is-dark">' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark">1 min ago</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>' }</div>
            <div>{ '      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </tbody>' }</div>
            <div>{ '</table>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UITables;
