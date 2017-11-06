// ==================================================
// DesignSystem - DSIcons
// ==================================================

import React from 'react';

const UIIcons = () => (
  <div className="wrap">
		<h1 className="heading">Icons</h1>
		<p>I'm working on bringing in alll the icons. Get ready.</p>

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
		  </thead>
		  <tbody>
		  </tbody>
		</table>

		<h3>Misc UI</h3>
		<table className="table">
			<thead>
		  </thead>
		  <tbody>
		  </tbody>
		</table>

  </div>
);

export default UIIcons;
