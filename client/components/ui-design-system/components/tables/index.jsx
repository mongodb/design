// ==================================================
//  DesignSystem - DSTables
// ==================================================

import React from 'react';
import '../../../../styling/root.less';

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
            <div>{ '<table class="table">' }</div>
            <div>{ '  <thead>' }</div>
            <div>{ '    <tr class="table-row">' }</div>
            <div>{ '      <th class="table-header">Name</th>' }</div>
            <div>{ '      <th class="table-header">Status</th>' }</div>
            <div>{ '      <th class="table-header">Version</th>' }</div>
            <div>{ '      <th class="table-header table-cell-has-actions">Actions</th>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </thead>' }</div>
            <div>{ '  <tbody>' }</div>
            <div>{ '    <tr class="table-row">' }</div>
            <div>{ '      <td class="table-column table-cell"><a href={""} class="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td class="table-column table-cell">1 min ago</td>' }</div>
            <div>{ '      <td class="table-column table-cell">3.4.4</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-has-actions">' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr class="table-row">' }</div>
            <div>{ '      <td class="table-column table-cell"><a href={""} class="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td class="table-column table-cell">1 min ago</td>' }</div>
            <div>{ '      <td class="table-column table-cell">3.4.4</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-has-actions">' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr class="table-row">' }</div>
            <div>{ '      <td class="table-column table-cell"><a href={""} class="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td class="table-column table-cell">1 min ago</td>' }</div>
            <div>{ '      <td class="table-column table-cell">3.4.4</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-has-actions">' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs">modify</button>' }</div>
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
            <div>{ '<table class="table">' }</div>
            <div>{ '  <thead>' }</div>
            <div>{ '    <tr class="table-row table-row-is-dark">' }</div>
            <div>{ '      <th class="table-header table-header-is-dark">Name</th>' }</div>
            <div>{ '      <th class="table-header table-header-is-dark">Status</th>' }</div>
            <div>{ '      <th class="table-header table-header-is-dark">Version</th>' }</div>
            <div>{ '      <th class="table-header table-header-is-dark table-cell-has-actions">Actions</th>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </thead>' }</div>
            <div>{ '  <tbody>' }</div>
            <div>{ '    <tr class="table-row table-row-is-dark">' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark"><a href={""} class="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark">1 min ago</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark">3.4.4</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark table-cell-has-actions">' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr class="table-row table-row-is-dark">' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark"><a href={""} class="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark">1 min ago</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark">3.4.4</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark table-cell-has-actions">' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr class="table-row table-row-is-dark">' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark"><a href={""} class="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark">1 min ago</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark">3.4.4</td>' }</div>
            <div>{ '      <td class="table-column table-cell table-cell-is-dark table-cell-has-actions">' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button class="button table-button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </tbody>' }</div>
            <div>{ '</table>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-3">
      <div className="columns">
        <div className="data-viz-row data-viz-row-is-rounded">
          <header className="data-viz-row-cell data-viz-row-title">Cluster Details</header>
          <dl className="properties-table data-viz-row-cell data-viz-row-cell-is-first">
            <div className="properties-table-row">
              <div className="properties-table-note">
                *Note: All new clusters are on WiredTiger and MongoDB 3.2.
              </div>
            </div>
            <div className="properties-table-row">
              <div className="properties-table-left-half">
                <dt className="properties-table-title">vCPU</dt>
                <dd className="properties-table-description">2</dd>
              </div>
              <div className="properties-table-right-half ">
                <dt className="properties-table-title">RAM</dt>
                <dd className="properties-table-description">8 GB</dd>
              </div>
            </div>
            <div className="properties-table-row">
              <div className="properties-table-left-half">
                <dt className="properties-table-title">Disk Storage</dt>
                <dd className="properties-table-description">40 GB</dd>
              </div>
              <div className="properties-table-right-half">
                <dt className="properties-table-title">Disk Speed</dt>
                <dd className="properties-table-description">120</dd>
              </div>
            </div>
            <div className="properties-table-row">
              <div className="properties-table-left-half">
                <dt className="properties-table-title">Shards</dt>
                <dd className="properties-table-description">1</dd>
              </div>
              <div className="properties-table-right-half">
                <dt className="properties-table-title">Replication Factor</dt>
                <dd className="properties-table-description">3</dd>
              </div>
            </div>
            <div className="properties-table-row">
              <div className="properties-table-left-half">
                <dt className="properties-table-title">Backup</dt>
                <dd className="properties-table-description">Disabled</dd>
              </div>
              <div className="properties-table-right-half">
                <dt className="properties-table-title">Region</dt>
                <dd className="properties-table-description">N. Virginia</dd>
              </div>
            </div>
            <div className="properties-table-row properties-table-row-is-last">
              <dt className="properties-table-title">Estimate</dt>
              <dd className="properties-table-description properties-table-description-is-large">$399.00/month</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="data-viz-row data-viz-row-is-rounded">' }</div>
            <div>{ '  <header class="data-viz-row-cell data-viz-row-title">Cluster Details</header>' }</div>
            <div>{ '  <dl class="properties-table data-viz-row-cell data-viz-row-cell-is-first">' }</div>
            <div>{ '    <div class="properties-table-row">' }</div>
            <div>{ '      <div class="properties-table-note">' }</div>
            <div>{ '        *Note: All new clusters are on WiredTiger and MongoDB 3.2.' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '    <div class="properties-table-row">' }</div>
            <div>{ '      <div class="properties-table-left-half">' }</div>
            <div>{ '        <dt class="properties-table-title">vCPU</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">2</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div class="properties-table-right-half ">' }</div>
            <div>{ '        <dt class="properties-table-title">RAM</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">8 GB</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '    <div class="properties-table-row">' }</div>
            <div>{ '      <div class="properties-table-left-half">' }</div>
            <div>{ '        <dt class="properties-table-title">Disk Storage</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">40 GB</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div class="properties-table-right-half">' }</div>
            <div>{ '        <dt class="properties-table-title">Disk Speed</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">120</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '    <div class="properties-table-row">' }</div>
            <div>{ '      <div class="properties-table-left-half">' }</div>
            <div>{ '        <dt class="properties-table-title">Shards</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">1</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div class="properties-table-right-half">' }</div>
            <div>{ '        <dt class="properties-table-title">Replication Factor</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">3</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '    <div class="properties-table-row">' }</div>
            <div>{ '      <div class="properties-table-left-half">' }</div>
            <div>{ '        <dt class="properties-table-title">Backup</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">Disabled</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div class="properties-table-right-half">' }</div>
            <div>{ '        <dt class="properties-table-title">Region</dt>' }</div>
            <div>{ '        <dd class="properties-table-description">N. Virginia</dd>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '    <div class="properties-table-row properties-table-row-is-last">' }</div>
            <div>{ '      <dt class="properties-table-title">Estimate</dt>' }</div>
            <div>{ '      <dd class="properties-table-description properties-table-description-is-large">$399.00/month</dd>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '  </dl>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UITables;
