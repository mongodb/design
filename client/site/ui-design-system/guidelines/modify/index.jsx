// ==================================================
// DesignSystem - UIModify
// ==================================================

import React from 'react';
import '../../../../css/root.less';
var modPattern1 = require('../../../../assets/product-design/guidelines/modify1.mp4');
var modPattern2 = require('../../../../assets/product-design/guidelines/modify2.mp4');
var modPattern3 = require('../../../../assets/product-design/guidelines/modify3.mp4');
var modPattern4 = require('../../../../assets/product-design/guidelines/modify4.mp4');
var modPattern5 = require('../../../../assets/product-design/guidelines/modify5.mp4');

const UIModify = () => (
  <div className="wrap guidelines-modify">
    <h1 className="heading">Modifying Elements</h1>
    
    <h2 className="u-mt-6">Client-Side Application Data</h2>
    <p>We encounter fewer performance concerns when modifying client-side application data than we do with MongoDB infrastructure, so these modification patterns are less precautionary and more straightforward.</p>

    <h3>Change Instantly</h3>
    <div className="row u-mb-2">
    	<div className="columns small-12">

	      <video className="guidelines-video u-mb-4" controls>
    		  <source src={modPattern1} type="video/mp4" />
    		  I'm sorry; your browser doesn't support HTML5 video.
    		</video>

	      <p>In this pattern, information is modified and committed at once, without additional views or actions. It's most appropriate for small changes.</p>

	      <h4 className="u-mt-6">When to use</h4>
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
        <video className="guidelines-video u-mb-4" controls>
          <source src={modPattern2} type="video/mp4" />
          I'm sorry; your browser doesn't support HTML5 video.
        </video>

	      <p>In this pattern, committing changes require an additional action, like Save. Users are warned if changes they made are about to be lost.</p>

		    <h4 className="u-mt-6">When to use</h4>
		    <ul>
		      <li><p>Parent container with any number of inline child elements</p></li>
		      <li><p>Presentation matches complexity of configurable options</p></li>
		      <li><p>Example: settings form in MongoDB Cloud</p></li>
		    </ul>
      </div>
    </div>


    <h2 className="u-mt-6">MongoDB Data and Infrastructure</h2>
    <p>Modifying MongoDB data and infrastructure can have greater performance concerns, so these patterns aim to manage complexity and progressively disclose precise changes. We recommend that a container should map directly to a single MongoDB concept as described in our documentation.</p>
    <p>If application behavior and status information is competing with MongoDB behavior and status information, choose in favor of application concepts wherever possible.</p>

    <h3>Commit Changes on Object</h3>
    <div className="row u-mb-2">
    	<div className="columns small-12">
        <video className="guidelines-video" controls>
          <source src={modPattern3} type="video/mp4" />
          I'm sorry; your browser doesn't support HTML5 video.
        </video>

      <p>In this pattern, multiple inline changes can be made individually, but committing them is done from the parent container level.</p>

		    <h4 className="u-mt-6">When to use</h4>
	      <ul>
	        <li><p>Parent container with any number of inline child elements</p></li>
	        <li><p>Presentation layer matches complexity of configurable options</p></li>
	        <li><p>Example: Compass Document CRUD</p></li>
	      </ul>
      </div>
    </div>

      <h3>Modify in Separate Layer</h3>
	    <div className="row u-mb-2">
	    	<div className="columns small-12">
        <video className="guidelines-video" controls>
          <source src={modPattern4} type="video/mp4" />
          I'm sorry; your browser doesn't support HTML5 video.
        </video>

	      <p>In this pattern, modifications are made on a modification layer separate from the presentation layer. On the modification layer, changes are committed from the parent container.</p>

		    <h4 className="u-mt-6">When to use</h4>
	      <ul>
	        <li><p>Presentation layer obfuscates complexity of configurable options</p></li>
	        <li><p>Example: Atlas clusters</p></li>
	      </ul>
      </div>
    </div>

      <h3>Modify and Confirm Changes in Separate Layers</h3>
	    <div className="row u-mb-2">
	    	<div className="columns small-12">
        <video className="guidelines-video" controls>
          <source src={modPattern5} type="video/mp4" />
          I'm sorry; your browser doesn't support HTML5 video.
        </video>

	      <p>In this pattern, there are separate presentation, modification, and confirmation layers.</p>

			    <h4 className="u-mt-6">When to use</h4>
		      <ul>
		        <li><p>Presentation layer obfuscates complexity of configurable options</p></li>
		        <li><p>Subsequent modification layer also obfuscates complexity of configurable options through processes like bulk edits</p></li>
		        <li><p>Example: Cloud Manager Automation</p></li>
		      </ul>
	      </div>
      </div>
  </div>
);

export default UIModify;
