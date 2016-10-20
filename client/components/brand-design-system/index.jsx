// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import '../../styling/root.less';

const BrandDesignSystem = ({ children }) => (
  <div className="wrap">
    <nav className="sidebar">
    	<ul>
    		<Link to='/brand-design-system/'><li>Welcome</li></Link>
            <Link to='/brand-design-system/logo'><li>Logo</li></Link>
    		<Link to='/brand-design-system/typography'><li>Typography</li></Link>
    		<Link to='/brand-design-system/colors'><li>Colors</li></Link>
    	</ul>
    </nav>
    <div className="content">{children}</div>
  </div>
);

export default BrandDesignSystem;
