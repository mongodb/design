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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Version</th>
              <th className="has-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href={""} className="link">free-shard-0</a></td>
              <td>1 min ago</td>
              <td>3.4.4</td>
              <td className="has-actions">
                <button className="button button-is-xs u-mr-1">data</button>
                <button className="button button-is-xs u-mr-1">metrics</button>
                <button className="button button-is-xs">modify</button>
              </td>
            </tr>
            <tr>
              <td><a href={""} className="link">free-shard-0</a></td>
              <td>1 min ago</td>
              <td>3.4.4</td>
              <td className="has-actions">
                <button className="button button-is-xs u-mr-1">data</button>
                <button className="button button-is-xs u-mr-1">metrics</button>
                <button className="button button-is-xs">modify</button>
              </td>
            </tr>
            <tr>
              <td><a href={""} className="link">free-shard-0</a></td>
              <td>1 min ago</td>
              <td>3.4.4</td>
              <td className="has-actions">
                <button className="button button-is-xs u-mr-1">data</button>
                <button className="button button-is-xs u-mr-1">metrics</button>
                <button className="button button-is-xs">modify</button>
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
            <div>{ '<table>' }</div>
            <div>{ '  <thead>' }</div>
            <div>{ '    <tr>' }</div>
            <div>{ '      <th>Name</th>' }</div>
            <div>{ '      <th>Status</th>' }</div>
            <div>{ '      <th>Version</th>' }</div>
            <div>{ '      <th className="has-actions">Actions</th>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </thead>' }</div>
            <div>{ '  <tbody>' }</div>
            <div>{ '    <tr>' }</div>
            <div>{ '      <td><a href={""} className="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td>1 min ago</td>' }</div>
            <div>{ '      <td>3.4.4</td>' }</div>
            <div>{ '      <td className="has-actions">' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr>' }</div>
            <div>{ '      <td><a href={""} className="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td>1 min ago</td>' }</div>
            <div>{ '      <td>3.4.4</td>' }</div>
            <div>{ '      <td className="has-actions">' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr>' }</div>
            <div>{ '      <td><a href={""} className="link">free-shard-0</a></td>' }</div>
            <div>{ '      <td>1 min ago</td>' }</div>
            <div>{ '      <td>3.4.4</td>' }</div>
            <div>{ '      <td className="has-actions">' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button button-is-xs">modify</button>' }</div>
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
        <table>
          <thead>
            <tr className="is-dark">
              <th className="is-dark">Name</th>
              <th className="is-dark"> Status</th>
              <th className="is-dark">Version</th>
              <th className="has-actions is-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="is-dark">
              <td className="is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>
              <td className="is-dark">1 min ago</td>
              <td className="is-dark">3.4.4</td>
              <td className="has-actions is-dark">
                <button className="button button-is-xs u-mr-1">data</button>
                <button className="button button-is-xs u-mr-1">metrics</button>
                <button className="button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="is-dark">
              <td className="is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>
              <td className="is-dark">1 min ago</td>
              <td className="is-dark">3.4.4</td>
              <td className="has-actions is-dark">
                <button className="button button-is-xs u-mr-1">data</button>
                <button className="button button-is-xs u-mr-1">metrics</button>
                <button className="button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="is-dark">
              <td><a href={""} className="link link-on-dark">free-shard-0</a></td>
              <td>1 min ago</td>
              <td>3.4.4</td>
              <td className="has-actions">
                <button className="button button-is-xs u-mr-1">data</button>
                <button className="button button-is-xs u-mr-1">metrics</button>
                <button className="button button-is-xs">modify</button>
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
            <div>{ '<table>' }</div>
            <div>{ '  <thead>' }</div>
            <div>{ '    <tr className="is-dark">' }</div>
            <div>{ '      <th className="is-dark">Name</th>' }</div>
            <div>{ '      <th className="is-dark">Status</th>' }</div>
            <div>{ '      <th className="is-dark">Version</th>' }</div>
            <div>{ '      <th className="has-actions is-dark">Actions</th>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '  </thead>' }</div>
            <div>{ '  <tbody>' }</div>
            <div>{ '    <tr className="is-dark">' }</div>
            <div>{ '      <td className="is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="is-dark">1 min ago</td>' }</div>
            <div>{ '      <td className="is-dark">3.4.4</td>' }</div>
            <div>{ '      <td className="has-actions is-dark">' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr className="is-dark">' }</div>
            <div>{ '      <td className="is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="is-dark">1 min ago</td>' }</div>
            <div>{ '      <td className="is-dark">3.4.4</td>' }</div>
            <div>{ '      <td className="has-actions is-dark">' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button button-is-xs">modify</button>' }</div>
            <div>{ '      </td>' }</div>
            <div>{ '    </tr>' }</div>
            <div>{ '    <tr className="is-dark">' }</div>
            <div>{ '      <td className="is-dark"><a href={""} className="link link-on-dark">free-shard-0</a></td>' }</div>
            <div>{ '      <td className="is-dark">1 min ago</td>' }</div>
            <div>{ '      <td className="is-dark">3.4.4</td>' }</div>
            <div>{ '      <td className="has-actions is-dark">' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">data</button>' }</div>
            <div>{ '        <button className="button button-is-xs u-mr-1">metrics</button>' }</div>
            <div>{ '        <button className="button button-is-xs">modify</button>' }</div>
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
