// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIButtons = () => (
  <div className="wrap">
    <h1 className="heading">Buttons</h1>
    <div>

    	<div className="elementGroup">
    		<h2>Primary Buttons</h2>
    		<p>Our primary buttons comes in four different sizes.</p>
    		<div className="element"><button className="button button-is-primary button-is-xs">Small Button</button></div>
    		<div className="element"><button className="button button-is-primary button-is-small">Small Button</button></div>
    		<div className="element"><button className="button button-is-primary">Normal Button</button></div>
    		<div className="element"><button className="button button-is-primary button-is-large">Large Button</button></div>
    		<pre>
    			<code className="language-html hljs xml" data-lang="html">
    				<div>{ '<button class="button button-is-primary button-is-xs">Small Button</button>' }</div>
				    <div>{ '<button class="button button-is-primary button-is-small">Small Button</button>' }</div>
                    <div>{ '<button class="button button-is-primary">Normal Button</button>' }</div>
                    <div>{ '<button class="button button-is-primary button-is-large">Large Button</button>' }</div>
                </code>
    		</pre>
    	</div>

    	<div className="elementGroup">
    		<h2>Secondary Buttons</h2>
    		<p>Our secondary buttons can be used in four different sizes, too.</p>
    		<div className="element"><button className="button button-is-xs">Extra Small</button></div>
    		<div className="element"><button className="button button-is-small">Small Button</button></div>
    		<div className="element"><button className="button">Normal Button</button></div>
            <div className="element"><button className="button button-is-large">Large Button</button></div>
            <pre>
                <code className="language-html hljs xml" data-lang="html">
                    <div>{ '<button className="button button-is-xs">Extra Small</button>' }</div>
                    <div>{ '<button className="button button-is-small">Small Button</button>' }</div>
                    <div>{ '<button className="button">Normal Button</button>' }</div>
                    <div>{ '<button className="button button-is-large">Large Button</button>' }</div>
                </code>
            </pre>
    	</div>

    </div>
  </div>
);

export default UIButtons;
