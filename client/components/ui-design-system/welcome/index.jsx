// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIWelcome = () => (
  <div className="wrap">
  	<div className="row u-mb-9">
    	<div className="columns small-5">
    		<div className="hero">
    			<div className="hero-container">
				  	<h2 className="home-subheader">A sub-headline suggesting something</h2>
				  	<h1 className="home-header">Some copy welcoming someone to the site.</h1>
				  	<a className="link home-link">Explore the Design System</a>
			  	</div>
		  	</div>
	  	</div>
  	</div>

  	<div className="row u-mb-9">
	  	<div className="columns small-7">
		  	<img className="home-img"></img>
	  	</div>
    	<div className="columns small-5">
		  	<h2 className="home-subheader">Value #1</h2>
		  	<h1 className="home-sub-subheader">Something we value as a design team.</h1>
		  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in finibus nisl. Cras lectus purus, placerat sit amet urna interdum, vestibulum facilisis quam.</p>
	  	</div>
  	</div>

  	<div className="row u-mb-9">
    	<div className="columns small-5">
		  	<h2 className="home-subheader">Value #2</h2>
		  	<h1 className="home-sub-subheader">Something we value as a design team.</h1>
		  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in finibus nisl. Cras lectus purus, placerat sit amet urna interdum, vestibulum facilisis quam.</p>
	  	</div>
	  	<div className="columns small-7">
		  	<img className="home-img home-img-right"></img>
		</div>
  	</div>

  	<div className="row u-mb-9">
	  	<div className="columns small-7">
		  	<img className="home-img"></img>
	  	</div>
    	<div className="columns small-5">
		  	<h2 className="home-subheader">Value #3</h2>
		  	<h1 className="home-sub-subheader">Something we value as a design team.</h1>
		  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in finibus nisl. Cras lectus purus, placerat sit amet urna interdum, vestibulum facilisis quam.</p>
	  	</div>
  	</div>




  </div>
);

export default UIWelcome;
