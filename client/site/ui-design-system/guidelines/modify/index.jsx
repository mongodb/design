// ==================================================
// DesignSystem - UIModify
// ==================================================

import React from 'react';
import '../../../../css/root.less';
var modPattern1alt = require('../../../../assets/product-design/guidelines/modify1-alt.gif');
var modPattern2alt = require('../../../../assets/product-design/guidelines/modify2-alt.gif');
var modPattern3alt = require('../../../../assets/product-design/guidelines/modify3-alt.gif');
var modPattern4alt = require('../../../../assets/product-design/guidelines/modify4-alt.gif');
var modPattern5alt = require('../../../../assets/product-design/guidelines/modify5-alt.gif');

const UIModify = () => (
  <div className="wrap guidelines-modify">
    <h1 className="heading">Modifying Elements</h1>
    
    <h2>Client-Side Application Data</h2>
    <p>When modifying client-side application data, there are fewer performance concerns for end users and their systems. Therefore the patterns are less precautionary and pretty straight forward.</p>

    <h3>Change Instantly</h3>
    <div className="row u-mb-2">
    	<div className="columns small-12">
		      <img className="u-mb-3" src={modPattern1alt} />
      </div>
      <div className="columns small-6">
	      <p>In this pattern, information is modified and committed at once, without additional views or actions. It's most appropriate for small changes.</p>
      </div>
      <div className="columns small-6">
	      <p><strong>When to use</strong></p>
				<ul>
	        <li><p>To modify an inline element</p></li>
	        <li><p>Presentation layer matches complexity of configurable options.</p></li>
	        <li><p>Example: a MongoDB Charts chart title</p></li>
	      </ul>
      </div>
    </div>

    <h3>Commit Changes</h3>
    <div className="row u-mb-2">
    	<div className="columns small-12">
	      <img className="u-mb-3" src={modPattern2alt} />
      </div>
      <div className="columns small-6">
	      <p>In this pattern, changes require an additional action, like Save, to be committed. Users are warned if changes they made are about to be lost.</p>
			</div>
      <div className="columns small-6">
		    <p><strong>When to use</strong></p>
		    <ul>
		      <li><p>Parent container with any number of inline child elements</p></li>
		      <li><p>Presentation matches complexity of configurable options</p></li>
		      <li><p>Example: settings form in MongoDB Cloud</p></li>
		    </ul>
      </div>
    </div>


    <h2>User’s MongoDB Data and Infrastructure</h2>
    <p>Higher performance concerns for end users</p>
    <p>When manipulating MongoDB data and infrastructure, there are greater performance concerns for end users and their systems. Therefore the following patterns aim to manage complexity and progressively disclose precise changes that will take place as the user advances through their pattern towards a final commitment. It is recommended that a container map directly to a single MongoDB concept within our existing documentation.</p>
    <p>If communicating application behaviors and status is competing with efforts to communicate MongoDB behaviors and status, elevate and reveal the MongoDB concepts in favor of the application concepts wherever possible.</p>

    <h3>Commit Changes on Parent</h3>
    <div className="row u-mb-2">
    	<div className="columns small-12">
				<img src={modPattern3alt} />
      </div>
      <div className="columns small-6">
      <p>Explain here</p>
      </div>
      <div className="columns small-6">
		    <p><strong>When to use</strong></p>
	      <ul>
	        <li><p>Parent container with any number of inline child elements (all three below)</p></li>
	        <li><p>Presentation layer matches complexity of configurable options</p></li>
	        <li><p>e.g., Compass Document CRUD</p></li>
	      </ul>
      </div>
    </div>

      <h3>Modification Layer</h3>
	    <div className="row u-mb-2">
	    	<div className="columns small-12">
					<img src={modPattern4alt} />
	      </div>
	      <div className="columns small-6">
	      <p>Explain here</p>
	      </div>
	      <div className="columns small-6">
			    <p><strong>When to use</strong></p>
	      <ul>
	        <li><p>Presentation layer obfuscates complexity of configurable options</p></li>
	        <li><p>e.g., Atlas clusters</p></li>
	      </ul>
      </div>
    </div>

      <h3>Modification Layer with Confirmation Layer</h3>
	    <div className="row u-mb-2">
	    	<div className="columns small-12">
					<img src={modPattern5alt} />
	      </div>
	      <div className="columns small-6">
	      <p>Explain here</p>
	      </div>
	      <div className="columns small-6">
			    <p><strong>When to use</strong></p>
		      <ul>
		        <li><p>Presentation layer obfuscates complexity of configurable options</p></li>
		        <li><p>Subsequent modification layer also obfuscates complexity of configurable options through processes like bulk edits</p></li>
		        <li><p>e.g., Cloud Manager Automation</p></li>
		      </ul>
	      </div>
      </div>
  </div>
);

export default UIModify;
