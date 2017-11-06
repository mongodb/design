// ==================================================
// DesignSystem - DSIcons
// ==================================================

import React from 'react';

const UIIcons = () => (
  <div className="wrap">
		<h1 className="heading">Icons</h1>
		<p>We use several sets of icons in our products, including Google's Material Design and Font Awesome, 
		as well as icons developed internally for MMS (our cloud products) and brand marketing.</p>

		<h2>MMS Icons</h2>
		<h3>Agents</h3>
		<table className="table">
			<thead>
		    <tr className="table-row">
		        <th className="table-header">Name</th>
		        <th className="table-header">Icon</th>
		        <th className="table-header">Add</th>
		        <th className="table-header">Edit</th>
		        <th className="table-header">Remove</th>
		        <th className="table-header">Restart</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr className="table-row">
		        <td className="table-column table-cell">Monitoring</td>
		        <td className="table-column table-cell"><i className="mms-icon-monitoring"></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-monitoring-add"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-monitoring-edit"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-monitoring-remove"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-monitoring-restart"><i></i></i></td>
		    </tr>
		    <tr className="table-row">
		        <td className="table-column table-cell">Backup</td>
		        <td className="table-column table-cell"><i className="mms-icon-backup"></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-backup-add"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-backup-edit"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-backup-remove"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-backup-restart"><i></i></i></td>
		    </tr>
		    <tr className="table-row">
		        <td className="table-column table-cell">Automation</td>
		        <td className="table-column table-cell"><i className="mms-icon-automation"></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-automation-add"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-automation-edit"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-automation-remove"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-automation-restart"><i></i></i></td>
		    </tr>
		  </tbody>
		</table>

		<h3>Deployment Items</h3>
		<table className="table">
			<thead>
		    <tr className="table-row">
	        <th className="table-header">Name</th>
	        <th className="table-header">Icon</th>
	        <th className="table-header">Add</th>
	        <th className="table-header">Edit</th>
	        <th className="table-header">Remove</th>
	        <th className="table-header">Restart</th>
        </tr>
		  </thead>
		  <tbody>
		    <tr className="table-row">
	        <td className="table-column table-cell">Standalone</td>
          <td className="table-column table-cell"><i className="mms-icon-standalone"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-standalone-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-standalone-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-standalone-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-standalone-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Replica Set</td>
          <td className="table-column table-cell"><i className="mms-icon-replica-set"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-replica-set-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-replica-set-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-replica-set-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-replica-set-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Cluster</td>
          <td className="table-column table-cell"><i className="mms-icon-cluster"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-cluster-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-cluster-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-cluster-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-cluster-restart"><i></i></i></td>
        </tr>
        <tr>
          <td className="table-column table-cell">MongoS</td>
          <td className="table-column table-cell"><i className="mms-icon-mongos"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-mongos-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-mongos-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-mongos-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-mongos-restart"><i></i></i></td>
        </tr>
        <tr>
          <td className="table-column table-cell">Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-restart"><i></i></i></td>
        </tr>
		  </tbody>
		</table>

		<h3>Replica Set Members</h3>
		<table className="table">
			<thead>
				<tr className="table-row">
					<th className="table-header">Name</th>
	        <th className="table-header">Icon</th>
	        <th className="table-header">Selected</th>
	        <th className="table-header">Add</th>
	        <th className="table-header">Edit</th>
	        <th className="table-header">Remove</th>
	        <th className="table-header">Restart</th>
        </tr>
		  </thead>
		  <tbody>
		     <tr className="table-row">
		        <td className="table-column table-cell">Primary</td>
		        <td className="table-column table-cell"><i className="mms-icon-primary"></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-primary-selected"></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-primary-add"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-primary-edit"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-primary-remove"><i></i></i></td>
		        <td className="table-column table-cell"><i className="mms-icon-primary-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Secondary</td>
            <td className="table-column table-cell"><i className="mms-icon-secondary"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-secondary-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-secondary-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-secondary-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-secondary-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-secondary-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Arbiter</td>
            <td className="table-column table-cell"><i className="mms-icon-arbiter"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-arbiter-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-arbiter-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-arbiter-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-arbiter-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-arbiter-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Hidden</td>
            <td className="table-column table-cell"><i className="mms-icon-hidden-s"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-hidden-s-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-hidden-s-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-hidden-s-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-hidden-s-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-hidden-s-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Delayed</td>
            <td className="table-column table-cell"><i className="mms-icon-delayed"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-delayed-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-delayed-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-delayed-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-delayed-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-delayed-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">No State</td>
            <td className="table-column table-cell"><i className="mms-icon-nostate"></i></td>
            <td className="table-column table-cell muted">N/A</td>
            <td className="table-column table-cell"><i className="mms-icon-nostate-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-nostate-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-nostate-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-nostate-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Startup</td>
            <td className="table-column table-cell"><i className="mms-icon-startup"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-startup-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-startup-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-startup-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-startup-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-startup-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Startup2</td>
            <td className="table-column table-cell"><i className="mms-icon-startup2"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-startup2-selected"></i></td>
            <td className="table-column table-cell muted">N/A</td>
            <td className="table-column table-cell muted">N/A</td>
            <td className="table-column table-cell muted">N/A</td>
            <td className="table-column table-cell"></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Recovering</td>
            <td className="table-column table-cell"><i className="mms-icon-recovering"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-recovering-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-recovering-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-recovering-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-recovering-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-recovering-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Rollback</td>
            <td className="table-column table-cell"><i className="mms-icon-rollback"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-rollback-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-rollback-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-rollback-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-rollback-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-rollback-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Down</td>
            <td className="table-column table-cell"><i className="mms-icon-down"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-down-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-down-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-down-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-down-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-down-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Fatal</td>
            <td className="table-column table-cell"><i className="mms-icon-fatal"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-fatal-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-fatal-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-fatal-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-fatal-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-fatal-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Shunned</td>
            <td className="table-column table-cell"><i className="mms-icon-shunned"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-shunned-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-shunned-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-shunned-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-shunned-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-shunned-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
            <td className="table-column table-cell">Unknown</td>
            <td className="table-column table-cell"><i className="mms-icon-unknown"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-unknown-selected"></i></td>
            <td className="table-column table-cell"><i className="mms-icon-unknown-add"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-unknown-edit"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-unknown-remove"><i></i></i></td>
            <td className="table-column table-cell"><i className="mms-icon-unknown-restart"><i></i></i></td>
        </tr>
		  </tbody>
		</table>

		<h3>Config Server Replica Sets</h3>
		<table className="table">
			<thead>
        <th className="table-header">Name</th>
        <th className="table-header">Icon</th>
        <th className="table-header">Selected</th>
        <th className="table-header">Add</th>
        <th className="table-header">Edit</th>
        <th className="table-header">Remove</th>
        <th className="table-header">Restart</th>
		  </thead>
		  <tbody>
			  <tr className="table-row">
          <td className="table-column table-cell">Primary Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-primary"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-primary"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-primary-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-primary-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-primary-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-primary-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Secondary Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-secondary"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-secondary-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-secondary-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-secondary-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-secondary-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-secondary-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Arbiter Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-arbiter"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-arbiter-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-arbiter-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-arbiter-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-arbiter-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-arbiter-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Hidden Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-hidden"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-hidden-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-hidden-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-hidden-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-hidden-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-hidden-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Delayed Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-delayed"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-delayed-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-delayed-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-delayed-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-delayed-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-delayed-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">No State Config</td>
          <td className="table-column table-cell"><i className="mms-icon-nostate"></i></td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-nostate-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-nostate-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-nostate-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-nostate-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Startup Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup-restart"><i></i></i></td>
        </tr>
      <tr className="table-row">
          <td className="table-column table-cell">Startup2 Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup2"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-startup2-selected"></i></td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell muted">N/A</td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Recovering Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-recovering"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-recovering-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-recovering-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-recovering-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-recovering-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-recovering-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Rollback Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-rollback"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-rollback-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-rollback-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-rollback-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-rollback-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-rollback-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Down Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-down"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-down-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-down-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-down-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-down-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-down-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Fatal Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-fatal"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-fatal-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-fatal-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-fatal-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-fatal-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-fatal-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Shunned Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-shunned"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-shunned-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-shunned-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-shunned-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-shunned-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-shunned-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Unknown Config</td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-unknown"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-unknown-selected"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-unknown-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-unknown-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-unknown-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-configsvr-unknown-restart"><i></i></i></td>
        </tr>
		  </tbody>
		</table>

		<h3>Other Managed Features</h3>
		<table className="table">
			<thead>
				<tr className="table-row">
	        <th className="table-header">Name</th>
	        <th className="table-header">Icon</th>
	        <th className="table-header">Add</th>
	        <th className="table-header">Edit</th>
	        <th className="table-header">Remove</th>
	        <th className="table-header">Manual Mode</th>
	        <th className="table-header">Restart</th>
        </tr>
		  </thead>
		  <tbody>
        <tr className="table-row">
          <td className="table-column table-cell">Project</td>
          <td className="table-column table-cell"><i className="mms-icon-group"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-group-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-group-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-group-remove"><i></i></i></td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell"><i className="mms-icon-group-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">User</td>
          <td className="table-column table-cell"><i className="mms-icon-user"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-user-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-user-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-user-remove"><i></i></i></td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell"><i className="mms-icon-user-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
	        <td className="table-column table-cell">Role</td>
          <td className="table-column table-cell"><i className="mms-icon-role"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-role-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-role-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-role-remove"><i></i></i></td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell"><i className="mms-icon-role-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">MongoDB Version</td>
          <td className="table-column table-cell"><i className="mms-icon-leaf"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-leaf-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-leaf-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-leaf-remove"><i></i></i></td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell"><i className="mms-icon-leaf-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
	        <td className="table-column table-cell">Server</td>
          <td className="table-column table-cell"><i className="mms-icon-server"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-server-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-server-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-server-remove"><i></i></i></td>
          <td className="table-column table-cell muted">N/A</td>
          <td className="table-column table-cell"><i className="mms-icon-server-restart"><i></i></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell">Automation Wrench</td>
          <td className="table-column table-cell"><i className="mms-icon-wrench"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-wrench-add"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-wrench-edit"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-wrench-remove"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-wrench-exclamation"><i></i></i></td>
          <td className="table-column table-cell"><i className="mms-icon-wrench-restart"><i></i></i></td>
        </tr>
		  </tbody>
		</table>

		<h3>Misc UI</h3>
		<table className="table">
		  <tbody>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-dragtopleft"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-bell"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-list"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-topology"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-cloud"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-lock"></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-laptop"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-office"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-floppy"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-support1"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-support2"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-add"></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-remove"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-check"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-creditcard"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-graph"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-api"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-2fa"></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-smartphone"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-continuous"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-pointintime"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-hammer"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-edit"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-umbrella"></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-ellipsis"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-dragleft"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-list-skinny"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-grid"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-ssl"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-auth"></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-database"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-databases"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-servers"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-server"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-dashboard"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-setup"></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-settings"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-activity"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-ops-manager"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-addcenter"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-modify"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-metrics"></i></td>
        </tr>
        <tr className="table-row">
          <td className="table-column table-cell"><i className="mms-icon-back"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-surprisedface"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-sadface"></i></td>
          <td className="table-column table-cell"><i className="mms-icon-deadface"></i></td>
        </tr>
		  </tbody>
		</table>

  </div>
);

export default UIIcons;
