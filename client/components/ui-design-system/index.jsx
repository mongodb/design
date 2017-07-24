// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import '../../styling/root.less';

const UIDesignSystem = ({ children }) => (
  <div className="wrap">
    <nav className="sidebar">
    	<ul>
            <li><Link to='/ui-design-system/' className="link">Welcome</Link></li>
            <li><Link to='/ui-design-system/banners' className="link">Banners</Link></li>
            <li><Link to='/ui-design-system/bubbles' className="link">Bubbles</Link></li>
            <li><Link to='/ui-design-system/buttons' className="link">Buttons</Link></li>
            <li><Link to='/ui-design-system/colors' className="link">Colors</Link></li>
            <li><Link to='/ui-design-system/forms' className="link">Forms</Link></li>
            <li><Link to='/ui-design-system/grid' className="link">Grid</Link></li>
            <li><Link to='/ui-design-system/lists' className="link">Lists</Link></li>
            <li><Link to='/ui-design-system/view-modal' className="link">Modals</Link></li>
            <li><Link to='/ui-design-system/tabs' className="link">Tabs</Link></li>
            <li><Link to='/ui-design-system/tables' className="link">Tables</Link></li>
            <li><Link to='/ui-design-system/typography' className="link">Typography</Link></li>
            <li><Link to='/ui-design-system/utilities' className="link">Utilities</Link></li>
    	</ul>
    </nav>
    <div className="content">{children}</div>
  </div>
);

export default UIDesignSystem;
