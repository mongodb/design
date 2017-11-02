// ==================================================
//  DesignSystem - DSTables
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';

const UITables = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1>Tables</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <ul className="tabs">
          <li className="tabs-tab tabs-tab-is-active">
            <Link to='/ui-design-system/components/tables' className="tabs-tab-link">CSS</Link>
          </li>
          <li className="tabs-tab">
            <Link to='/ui-design-system/components/tables/react-tables' className="tabs-tab-link">React</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>Standard Table</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Light Theme</h3>
        <p>Use on a light background.</p>
      </div>
    </div>
    <div className="row">
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
              <td className="table-column table-cell"><a className="link">free-shard-0</a></td>
              <td className="table-column table-cell">1 min ago</td>
              <td className="table-column table-cell">3.4.4</td>
              <td className="table-column table-cell table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-column table-cell"><a className="link">free-shard-0</a></td>
              <td className="table-column table-cell">1 min ago</td>
              <td className="table-column table-cell">3.4.4</td>
              <td className="table-column table-cell table-cell-has-actions">
                <button className="button table-button button-is-xs u-mr-1">data</button>
                <button className="button table-button button-is-xs u-mr-1">metrics</button>
                <button className="button table-button button-is-xs">modify</button>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-column table-cell"><a className="link">free-shard-0</a></td>
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
        <Code
          language='language-html'
          text={`<table className="table">
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
</table>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Dark Theme</h3>
        <p>Use on a dark background.</p>
      </div>
    </div>
    <div className="row">
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
    <div className="row">
      <div className="columns small-12">
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<table className="table">
  <thead>
    <tr className="table-row table-row-is-dark">
      <th className="table-header table-header-is-dark">Name</th>
      <th className="table-header table-header-is-dark">Status</th>
      <th className="table-header table-header-is-dark">Version</th>
      <th className="table-header table-header-is-dark table-cell-has-actions">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-row table-row-is-dark">
      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link">free-shard-0</a></td>
      <td className="table-column table-cell table-cell-is-dark">1 min ago</td>
      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>
      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">
        <button className="button table-button button-is-xs u-mr-1">data</button>
        <button className="button table-button button-is-xs u-mr-1">metrics</button>
        <button className="button table-button button-is-xs">modify</button>
      </td>
    </tr>
    <tr className="table-row table-row-is-dark">
      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link">free-shard-0</a></td>
      <td className="table-column table-cell table-cell-is-dark">1 min ago</td>
      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>
      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">
        <button className="button table-button button-is-xs u-mr-1">data</button>
        <button className="button table-button button-is-xs u-mr-1">metrics</button>
        <button className="button table-button button-is-xs">modify</button>
      </td>
    </tr>
    <tr className="table-row table-row-is-dark">
      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link">free-shard-0</a></td>
      <td className="table-column table-cell table-cell-is-dark">1 min ago</td>
      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>
      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">
        <button className="button table-button button-is-xs u-mr-1">data</button>
        <button className="button table-button button-is-xs u-mr-1">metrics</button>
        <button className="button table-button button-is-xs">modify</button>
      </td>
    </tr>
  </tbody>
</table>`}> 
        </Code>
      </div>
    </div>
   <div className="row">
      <div className="columns small-12">
        <h2 id="pagination">Pagination States</h2>
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
        <Code
          language='language-html'
          text={`<div class="paginator">
  <span class="paginator-control paginator-control-is-left">
    <button class="paginator-button paginator-button-is-previous">
    </button> Previous
  </span>
  <span class="paginator-text">
    <strong>100-200 results (both controls enabled)</strong>
  </span>
  <span class="paginator-control paginator-control-is-right">Next
    <button class="paginator-button paginator-button-is-next">
    </button>
  </span>
</div>`}> 
        </Code>
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
        <Code
          language='language-html'
          text={`<div class="paginator paginator-is-borderless">
  <span class="paginator-control paginator-control-is-left paginator-control-is-disabled">
    <button class="paginator-button paginator-button-is-previous" disabled>
    </button> Previous
  </span>
  <span class="paginator-text">
    <strong>0-0 results (both controls disabled, borderless example)</strong>
  </span>
  <span class="paginator-control paginator-control-is-right paginator-control-is-disabled">Next
    <button class="paginator-button paginator-button-is-next" disabled>
    </button>
  </span>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Properties Table</h2>
      </div>
    </div>
    <div className="row">
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
        <Code
          language='language-html'
          text={`<div class="data-viz-row data-viz-row-is-rounded">
  <header class="data-viz-row-cell data-viz-row-title">Cluster Details</header>
  <dl class="properties-table data-viz-row-cell data-viz-row-cell-is-first">
    <div class="properties-table-row">
      <div class="properties-table-note">
        *Note: All new clusters are on WiredTiger and MongoDB 3.2.
      </div>
    </div>
    <div class="properties-table-row">
      <div class="properties-table-left-half">
        <dt class="properties-table-title">vCPU</dt>
        <dd class="properties-table-description">2</dd>
      </div>
      <div class="properties-table-right-half ">
        <dt class="properties-table-title">RAM</dt>
        <dd class="properties-table-description">8 GB</dd>
      </div>
    </div>
    <div class="properties-table-row">
      <div class="properties-table-left-half">
        <dt class="properties-table-title">Disk Storage</dt>
        <dd class="properties-table-description">40 GB</dd>
      </div>
      <div class="properties-table-right-half">
        <dt class="properties-table-title">Disk Speed</dt>
        <dd class="properties-table-description">120</dd>
      </div>
    </div>
    <div class="properties-table-row">
      <div class="properties-table-left-half">
        <dt class="properties-table-title">Shards</dt>
        <dd class="properties-table-description">1</dd>
      </div>
      <div class="properties-table-right-half">
        <dt class="properties-table-title">Replication Factor</dt>
        <dd class="properties-table-description">3</dd>
      </div>
    </div>
    <div class="properties-table-row">
      <div class="properties-table-left-half">
        <dt class="properties-table-title">Backup</dt>
        <dd class="properties-table-description">Disabled</dd>
      </div>
      <div class="properties-table-right-half">
        <dt class="properties-table-title">Region</dt>
        <dd class="properties-table-description">N. Virginia</dd>
      </div>
    </div>
    <div class="properties-table-row properties-table-row-is-last">
      <dt class="properties-table-title">Estimate</dt>
      <dd class="properties-table-description properties-table-description-is-large">$399.00/month</dd>
    </div>
  </dl>
</div>`}> 
        </Code>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h2>Summary Table</h2>
      </div>
    </div>
    <div className="row">
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
          <div className="summary-table-list-row summary-table-list-row">
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
    <div className="row u-mb-3">
      <div className="columns">
        <Code
          language='language-html'
          text={`<div class="summary-table summary-table-is-rounded">
  <div class="summary-table-header">Cluster Overview</div>
  <div class="summary-table-row-is-first summary-table-row">
    <div class="summary-table-row-half summary-table-row-half-is-left">
      <dt class="summary-table-row-title">Region</dt>
      <dd class="summary-table-row-value js-regionName">N. Virginia</dd>
    </div>
    <div class="summary-table-row-half summary-table-row-half-is-right">
      <dt class="summary-table-row-title">Instance Size</dt>
      <dd class="summary-table-row-value js-instanceSize">M30</dd>
    </div>
  </div>
  <div class="summary-table-row">
    <div class="summary-table-row-half summary-table-row-half-is-left">
      <dt class="summary-table-row-title">RAM</dt>
      <dd class="summary-table-row-value js-RAM">8 GB</dd>
    </div>
    <div class="summary-table-row-half summary-table-row-half-is-right">
      <dt class="summary-table-row-title">Disk Storage</dt>
      <dd class="summary-table-row-value js-diskSizeGB">40 GB</dd>
    </div>
  </div>
  <div class="summary-table-row">
    <div class="summary-table-row-half summary-table-row-half-is-left">
      <dt class="summary-table-row-title">Disk Speed</dt>
      <dd class="summary-table-row-value js-diskIOPS">
        120 IOPS
      </dd>
    </div>
    <div class="summary-table-row-half summary-table-row-half-is-right">
      <dt class="summary-table-row-title">Replication Factor</dt>
      <dd class="summary-table-row-value js-replicationFactor">3</dd>
    </div>
  </div>
  <div class="summary-table-row-is-last summary-table-row">
    <div class="summary-table-row-half summary-table-row-half-is-left">
      <dt class="summary-table-row-title">Backup</dt>
      <dd class="summary-table-row-value js-backupEnabled">Enabled</dd>
    </div>
    <div class="summary-table-row-half summary-table-row-half-is-right">
      <dt class="summary-table-row-title">Shards</dt>
      <dd class="summary-table-row-value js-numShards">1</dd>
    </div>
  </div>
  <div class="summary-table-header">Pricing</div>
  <div class="summary-table-list-row js-pricing-popover" data-content="<div class='pricing-estimate-popover'>Your monthly estimate is <span class='pricing-estimate-popover-price'> $387.62</span><span class='pricing-estimate-popover-subscript'>/mo</span></div>" data-placement="top" data-html="true" data-trigger="hover" data-container="body">
    <dt class="summary-table-list-row-title">Hourly Cost</dt>
    <dd class="summary-table-list-row-value">
      $0.54<span class="summary-table-list-row-subscript">/hr</span>
    </dd>
  </div>
  <div class="summary-table-list-row">
    <dt class="summary-table-list-row-title">30-day Cost</dt>
    <dd class="summary-table-list-row-value js-monthlyCostEstimate">
      $387.62<span class="summary-table-list-row-subscript">/mo</span>
    </dd>
  </div>
  <div class="summary-table-list-row summary-table-list-row">
    <span>
      <img class="summary-table-list-row-money-icon" src="/../client/assets/icon-moneytime.svg" />
    </span>
    <span class="summary-table-list-row-description">
      <strong>Pay-as-you-go!</strong> You will be billed hourly and you can terminate your cluster at any time.
    </span>
  </div>
</div>`}> 
        </Code>
      </div>
    </div>
  </div>
);

export default UITables;
