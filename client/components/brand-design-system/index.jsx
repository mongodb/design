// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import '../../styling/root.less';

const BrandDesignSystem = ({ children }) => (
  <div className="wrap">
    <nav className="navigation">
     	<ul className="navigation navigation-is-vertical navigation-is-vertical-parent">
        <li><h4>Brand Design</h4>
          <ul className="navigation-is-vertical-parent">
            <li className="navigation-is-vertical-child"><Link to='/brand-design-system/' className="navigation-link">Welcome</Link></li>
          </ul>
        </li>
        <li><h4>Base Styles</h4>
          <ul className="navigation-is-vertical-parent">
            <li className="navigation-is-vertical-child"><Link to='/brand-design-system/logo' className="navigation-link">Logo</Link></li>
            <li className="navigation-is-vertical-child"><Link to='/brand-design-system/typography' className="navigation-link">Typography</Link></li>
            <li className="navigation-is-vertical-child"><Link to='/brand-design-system/colors' className="navigation-link">Colors</Link></li>
          </ul>
        </li>
    	</ul>
    </nav>
    <div className="content">{children}</div>
  </div>
);

export default BrandDesignSystem;
