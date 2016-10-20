// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import '../../styling/root.css';

const UIDesignSystem = ({ children }) => (
  <div className="wrap">
    <nav className="sidebar">
    	<ul>
    		<Link to='/ui-design-system/'><li>Welcome</li></Link>
    		<Link to='/ui-design-system/typography'><li>Typography</li></Link>
    		<Link to='/ui-design-system/colors'><li>Colors</li></Link>
    		<Link to='/ui-design-system/buttons'><li>Buttons</li></Link>
    		<Link to='/ui-design-system/forms'><li>Forms</li></Link>
    	</ul>
    </nav>
    <div className="content">{children}</div>
  </div>
);

export default UIDesignSystem;
