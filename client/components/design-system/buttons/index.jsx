// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import { wrap, heading, elementGroup, element } from './style.css';

const DSButtons = () => (
  <div className={wrap}>
    <h1 className={heading}>Buttons</h1>
    <div>

    	<div className={elementGroup}>
    		<h2>Primary Buttons</h2>
    		<p>Our primary buttons comes in four different sizes.</p>
    		<div className={element}><button className="button button-is-primary button-is-xs">Small Button</button></div>
    		<div className={element}><button className="button button-is-primary button-is-small">Small Button</button></div>
    		<div className={element}><button className="button button-is-primary">Normal Button</button></div>
    		<div className={element}><button className="button button-is-primary button-is-large">Large Button</button></div>
    		<pre>
    			<code className="language-html hljs xml" data-lang="html">
    				code goes here
				</code>
    		</pre>
    	</div>

    	<div className={elementGroup}>
    		<h2>Secondary Buttons</h2>
    		<p>Our secondary buttons can be used in two different sizes</p>
    		<div className={element}><button className="button button-is-xs">Extra Small</button></div>
    		<div className={element}><button className="button button-is-small">Small Button</button></div>
    		<div className={element}><button className="button">Normal Button</button></div>
    	</div>

    </div>
  </div>
);

export default DSButtons;
