// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIWelcome = () => (
  	<div className="wrap">
	  	<div className="row">
	    	<div className="columns">
	    		<div className="hero">
	    			<div className="hero-container small-7">
					  	<h1 className="u-mb-5"><strong>MongoDB</strong> Design</h1>
					  	<h3 className="u-mb-8">Two teams, one vision… consectetur adipiscing elit. 
					  	Sed hendrerit consectetur mauris vel mollis. Donec id 
					  	posuere arcu, eu mattis erat. Vivamus eleifend justo et tristique.</h3>
					  	<button className="button button-is-info u-mr-6">Brand Guidelines</button>
					  	<button className="button button-is-info">Design System</button>
				  	</div>
			  	</div>
		  	</div>
	  	</div>
	  	{/*}
	  	<div className="row">
	    	<div className="columns">
			  	<div className="featured">
			  		<div className="row u-mb-9">
					  	<div className="columns small-7"></div>
				    	<div className="columns small-5">
						  	<h4>no 1</h4>
						  	<h2>A Design Principle</h2>
						  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						  	Nam in libero ac augue ultrices molestie et quis velit. 
						  	Curabitur at consequat lectus. Phasellus eu sapien sem. 
						  	Nulla sollicitudin, neque facilisis laoreet tempus, 
						  	tortor dui dignissim lectus, et laoreet ligula eros ac tellus. 
						  	Maecenas mattis ipsum vel mi luctus porttitor.</p>
					  	</div>
				  	</div>
				  	<div className="row u-mb-9">
				    	<div className="columns small-5">
						  	<h4>no 2</h4>
						  	<h2>A Design Principle</h2>
						  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						  	Nam in libero ac augue ultrices molestie et quis velit. 
						  	Curabitur at consequat lectus. Phasellus eu sapien sem. 
						  	Nulla sollicitudin, neque facilisis laoreet tempus, 
						  	tortor dui dignissim lectus, et laoreet ligula eros ac tellus. 
						  	Maecenas mattis ipsum vel mi luctus porttitor.</p>
					  	</div>
					  	<div className="columns small-7"></div>
				  	</div>
			  	</div>
		  	</div>
	  	</div>
	  */}

	  	<div className="row">
	    	<div className="columns">
		  		<div className="footer u-align-center u-pv-9">
			        <div className="social u-mv-9">
				        <a href="https://github.com/leafygreen/design" target="_blank"><img className="footer-social-github u-mh-3" alt="github" /></a>
				        <a href="https://dribbble.com/MongoDB" target="_blank"><img className="footer-social-dribbble u-mh-3" alt="dribbble" /></a>
				    </div>
			  		<p>Made with 💚 by MongoDB.</p>
			  		<p>Probably some other legal/copyright stuff would go here, too.</p>
				</div>
		  	</div>
	  	</div>
  	</div>
);

export default UIWelcome;
