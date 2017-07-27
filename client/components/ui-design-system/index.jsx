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
            <li><h4>Base Styles</h4>
              <ul>
                  <li><Link to='/ui-design-system/base-styles/colors' className="link">Colors</Link></li>
                  <li><Link to='/ui-design-system/base-styles/icons' className="link">Icons</Link></li>
                  <li><Link to='/ui-design-system/base-styles/typography' className="link">Typography</Link></li>
              </ul>
            </li>
            <li><h4>Components</h4>
              <ul>
                <li><Link to='/ui-design-system/components/banners' className="link">Banners</Link></li>
                <li><Link to='/ui-design-system/components/bubbles' className="link">Bubbles</Link></li>
                <li><Link to='/ui-design-system/components/buttons' className="link">Buttons</Link></li>
                <li><Link to='/ui-design-system/components/code' className="link">Code</Link></li>
                <li><Link to='/ui-design-system/components/forms' className="link">Forms</Link></li>
                <li><Link to='/ui-design-system/components/view-modal' className="link">Modals</Link></li>
                <li><Link to='/ui-design-system/components/tabs' className="link">Tabs</Link></li>
                <li><Link to='/ui-design-system/components/tables' className="link">Tables</Link></li>
                <li><Link to='/ui-design-system/components/utilities' className="link">Utilities</Link></li>
              </ul>
            </li>
            <li><h4>Patterns</h4>
                <ul>
                  <li><Link to='/ui-design-system/patterns/modify' className="link">Modify</Link></li>
                </ul>
            </li>
            <li><h4>Layouts</h4>
                <ul>
                  <li><Link to='/ui-design-system/layouts/grid' className="link">Grid</Link></li>
                </ul>
            </li>
    	</ul>
    </nav>
    <div className="content">{children}</div>
  </div>
);

export default UIDesignSystem;
