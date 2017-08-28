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
    <div className="row u-mb-5">
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

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Summary Table</h2>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns">
		    <div className="summary-table summary-table-is-rounded">
			    <div className="summary-table-header">Cluster Overview</div>
			    <div className="summary-table-row-is-first summary-table-row">
		        <div className="summary-table-row-half summary-table-row-half-is-left">
		          <dt className="summary-table-row-title">Region</dt>
		          <dd className="summary-table-row-value js-regionName">N. Virginia</dd>
		        </div>
		        <div className="summary-table-row-half summary-table-row-half-is-right">
		          <dt className="summary-table-row-title">Instance Size</dt>
		          <dd className="summary-table-row-value js-instanceSize">M30</dd>
		        </div>
			    </div>
			    <div className="summary-table-row">
		        <div className="summary-table-row-half summary-table-row-half-is-left">
		          <dt className="summary-table-row-title">RAM</dt>
		          <dd className="summary-table-row-value js-RAM">8 GB</dd>
		        </div>
		        <div className="summary-table-row-half summary-table-row-half-is-right">
		          <dt className="summary-table-row-title">Disk Storage</dt>
		          <dd className="summary-table-row-value js-diskSizeGB">40 GB</dd>
		        </div>
			    </div>
			    <div className="summary-table-row">
		        <div className="summary-table-row-half summary-table-row-half-is-left">
		          <dt className="summary-table-row-title">Disk Speed</dt>
		          <dd className="summary-table-row-value js-diskIOPS">
		            120 IOPS
		          </dd>
		        </div>
		        <div className="summary-table-row-half summary-table-row-half-is-right">
		          <dt className="summary-table-row-title">Replication Factor</dt>
		          <dd className="summary-table-row-value js-replicationFactor">3</dd>
		        </div>
			    </div>
			    <div className="summary-table-row-is-last summary-table-row">
			      <div className="summary-table-row-half summary-table-row-half-is-left">
			        <dt className="summary-table-row-title">Backup</dt>
			        <dd className="summary-table-row-value js-backupEnabled">Enabled</dd>
			      </div>
			      <div className="summary-table-row-half summary-table-row-half-is-right">
			        <dt className="summary-table-row-title">Shards</dt>
			        <dd className="summary-table-row-value js-numShards">1</dd>
			      </div>
			    </div>
			    <div className="summary-table-header">Pricing</div>
			    <div className="summary-table-list-row js-pricing-popover" data-content="<div className='pricing-estimate-popover'>Your monthly estimate is <span className='pricing-estimate-popover-price'> $387.62</span><span className='pricing-estimate-popover-subscript'>/mo</span></div>" data-placement="top" data-html="true" data-trigger="hover" data-container="body">
			      <dt className="summary-table-list-row-title">Hourly Cost</dt>
			      <dd className="summary-table-list-row-value">
			        $0.54<span className="summary-table-list-row-subscript">/hr</span>
			      </dd>
			    </div>
			    <div className="summary-table-list-row">
			      <dt className="summary-table-list-row-title">30-day Cost</dt>
			      <dd className="summary-table-list-row-value js-monthlyCostEstimate">
			        $387.62<span className="summary-table-list-row-subscript">/mo</span>
			      </dd>
			    </div>
			    <div className="summary-table-list-row summary-table-list-row-has-top-padding">
			      <span>
			        <img className="summary-table-list-row-money-icon" src="/../client/assets/icon-moneytime.svg" />
			      </span>
			      <span className="summary-table-list-row-description">
			        <strong>Pay-as-you-go!</strong> You will be billed hourly and you can terminate your cluster at any time.
			      </span>
			    </div>
				</div>
			</div>
		</div>
    <div className="row u-mb-5">
      <div className="columns">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
				    <div>{ '<div class="summary-table summary-table-is-rounded">' }</div>
					  <div>{ '  <div class="summary-table-header">Cluster Overview</div>' }</div>
					  <div>{ '  <div class="summary-table-row-is-first summary-table-row">' }</div>
				    <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-left">' }</div>
				    <div>{ '      <dt class="summary-table-row-title">Region</dt>' }</div>
				    <div>{ '      <dd class="summary-table-row-value js-regionName">N. Virginia</dd>' }</div>
				    <div>{ '    </div>' }</div>
				    <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-right">' }</div>
				    <div>{ '      <dt class="summary-table-row-title">Instance Size</dt>' }</div>
				    <div>{ '      <dd class="summary-table-row-value js-instanceSize">M30</dd>' }</div>
				    <div>{ '    </div>' }</div>
					  <div>{ '  </div>' }</div>
					  <div>{ '  <div class="summary-table-row">' }</div>
				    <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-left">' }</div>
				    <div>{ '      <dt class="summary-table-row-title">RAM</dt>' }</div>
				    <div>{ '      <dd class="summary-table-row-value js-RAM">8 GB</dd>' }</div>
				    <div>{ '    </div>' }</div>
				    <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-right">' }</div>
				    <div>{ '      <dt class="summary-table-row-title">Disk Storage</dt>' }</div>
				    <div>{ '      <dd class="summary-table-row-value js-diskSizeGB">40 GB</dd>' }</div>
				    <div>{ '    </div>' }</div>
					  <div>{ '  </div>' }</div>
					  <div>{ '  <div class="summary-table-row">' }</div>
				    <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-left">' }</div>
				    <div>{ '      <dt class="summary-table-row-title">Disk Speed</dt>' }</div>
				    <div>{ '      <dd class="summary-table-row-value js-diskIOPS">' }</div>
				    <div>{ '        120 IOPS' }</div>
				    <div>{ '      </dd>' }</div>
				    <div>{ '    </div>' }</div>
				    <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-right">' }</div>
				    <div>{ '      <dt class="summary-table-row-title">Replication Factor</dt>' }</div>
				    <div>{ '      <dd class="summary-table-row-value js-replicationFactor">3</dd>' }</div>
				    <div>{ '    </div>' }</div>
					  <div>{ '  </div>' }</div>
					  <div>{ '  <div class="summary-table-row-is-last summary-table-row">' }</div>
					  <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-left">' }</div>
					  <div>{ '      <dt class="summary-table-row-title">Backup</dt>' }</div>
					  <div>{ '      <dd class="summary-table-row-value js-backupEnabled">Enabled</dd>' }</div>
					  <div>{ '    </div>' }</div>
					  <div>{ '    <div class="summary-table-row-half summary-table-row-half-is-right">' }</div>
					  <div>{ '      <dt class="summary-table-row-title">Shards</dt>' }</div>
					  <div>{ '      <dd class="summary-table-row-value js-numShards">1</dd>' }</div>
					  <div>{ '    </div>' }</div>
					  <div>{ '  </div>' }</div>
					  <div>{ '  <div class="summary-table-header">Pricing</div>' }</div>
					  <div>{ '  <div class="summary-table-list-row js-pricing-popover" data-content="<div class=\'pricing-estimate-popover\'>Your monthly estimate is <span class=\'pricing-estimate-popover-price\'> $387.62</span><span class=\'pricing-estimate-popover-subscript\'>/mo</span></div>" data-placement="top" data-html="true" data-trigger="hover" data-container="body">' }</div>
					  <div>{ '    <dt class="summary-table-list-row-title">Hourly Cost</dt>' }</div>
					  <div>{ '    <dd class="summary-table-list-row-value">' }</div>
					  <div>{ '      $0.54<span class="summary-table-list-row-subscript">/hr</span>' }</div>
					  <div>{ '    </dd>' }</div>
					  <div>{ '  </div>' }</div>
					  <div>{ '  <div class="summary-table-list-row">' }</div>
					  <div>{ '    <dt class="summary-table-list-row-title">30-day Cost</dt>' }</div>
					  <div>{ '    <dd class="summary-table-list-row-value js-monthlyCostEstimate">' }</div>
					  <div>{ '      $387.62<span class="summary-table-list-row-subscript">/mo</span>' }</div>
					  <div>{ '    </dd>' }</div>
					  <div>{ '  </div>' }</div>
					  <div>{ '  <div class="summary-table-list-row summary-table-list-row-has-top-padding">' }</div>
					  <div>{ '    <span>' }</div>
					  <div>{ '      <img class="summary-table-list-row-money-icon" src="/../client/assets/icon-moneytime.svg" />' }</div>
					  <div>{ '    </span>' }</div>
					  <div>{ '    <span class="summary-table-list-row-description">' }</div>
					  <div>{ '      <strong>Pay-as-you-go!</strong> You will be billed hourly and you can terminate your cluster at any time.' }</div>
					  <div>{ '    </span>' }</div>
					  <div>{ '  </div>' }</div>
						<div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UITables;
