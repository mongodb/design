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
        		<li><Link to='/brand-design-system/'>Welcome</Link></li>
            <li><Link to='/brand-design-system/logo'>Logo</Link></li>
        		<li><Link to='/brand-design-system/typography'>Typography</Link></li>
        		<li><Link to='/brand-design-system/colors'>Colors</Link></li>
        	</ul>
        </nav>
    <div className="content">{children}</div>
  </div>
);

export default BrandDesignSystem;
