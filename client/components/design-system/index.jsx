// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import { wrap, heading, content, sidebar } from './style.css';

const DesignSystem = ({ children }) => (
  <div className={wrap}>
    <nav className={sidebar}>
    	<ul>
    		<Link to='/design-system/'><li>Welcome</li></Link>
    		<Link to='/design-system/typography'><li>Typography</li></Link>
    		<Link to='/design-system/colors'><li>Colors</li></Link>
    		<Link to='/design-system/buttons'><li>Buttons</li></Link>
    		<Link to='/design-system/forms'><li>Forms</li></Link>
    	</ul>
    </nav>
    <div className={content}>{children}</div>
  </div>
);

export default DesignSystem;
