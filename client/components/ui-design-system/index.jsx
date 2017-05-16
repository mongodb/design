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
            <li><Link to='/ui-design-system/'>Welcome</Link></li>
            <li><Link to='/ui-design-system/buttons'>Buttons</Link></li>
            <li><Link to='/ui-design-system/colors'>Colors</Link></li>
            <li><Link to='/ui-design-system/grid'>Grid</Link></li>
            <li><Link to='/ui-design-system/tables'>Tables</Link></li>
            <li><Link to='/ui-design-system/typography'>Typography</Link></li>
    	</ul>
    </nav>
    <div className="content">{children}</div>
  </div>
);

export default UIDesignSystem;
