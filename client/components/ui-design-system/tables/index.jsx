// ==================================================
//  DesignSystem - DSTables
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UITables = () => (
  <div className="wrap">
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h1>Tables</h1>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h2>Standard Table</h2>
        <p>We use the <a href={"http://foundation.zurb.com/sites/docs/grid.html"} className="link">Foundation grid</a> as our base grid system. It is customizable, flexible and responsive.</p>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h3>Usage</h3>
        <p>When setting up your page with the grid, be sure to include the <span className="code">small-#</span>, <span className="code">medium-#</span> and <span className="code">large-#</span> values. These values represent how the grid will adapt to small, medium and large screen formats.</p>
      </div>
    </div>
    <div className="row u-mb-1">
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
                <button className="button button-is-xs">DATA</button>
                <button className="button button-is-xs">METRICS</button>
                <button className="button button-is-xs">MODIFY</button>
              </td>
            </tr>
            <tr>
              <td><a href={""} className="link">free-shard-0</a></td>
              <td>1 min ago</td>
              <td>3.4.4</td>
              <td className="has-actions">
                <button className="button button-is-xs">DATA</button>
                <button className="button button-is-xs">METRICS</button>
                <button className="button button-is-xs">MODIFY</button>
              </td>
            </tr>
            <tr>
              <td><a href={""} className="link">free-shard-0</a></td>
              <td>1 min ago</td>
              <td>3.4.4</td>
              <td className="has-actions">
                <button className="button button-is-xs">DATA</button>
                <button className="button button-is-xs">METRICS</button>
                <button className="button button-is-xs">MODIFY</button>
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

export default UITables;