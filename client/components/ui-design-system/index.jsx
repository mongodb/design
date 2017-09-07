// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const container_class = "navigation-is-vertical-container";

class UIDesignSystem extends React.Component { 

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  getClassName(container_class) {
    if (this.state.open) {
      return `${container_class} ${container_class}-is-open`;
    }
    return container_class;
  }

  toggleMobileMenu() {
    this.setState({ open: !this.state.open})
  }

  closeMobileMenu() {
    this.setState({ open: false });
  }
  
  render() {
    const { children } = this.props;
    return (
      <div className="wrap">
        <nav className="navigation-is-vertical">
          <button className="navigation-mobile-menu-button button button-extra-small" onClick={this.toggleMobileMenu.bind(this)} onBlur={this.closeMobileMenu.bind(this)}>Component Navigation</button>
          <ul className={this.getClassName(container_class)} onClick={this.closeMobileMenu.bind(this)}>
            <li className="navigation-is-vertical-parent"><h4>Product Design</h4>
             <ul className="navigation-is-vertical-child">
              <li><Link to='/ui-design-system/welcome' className="navigation-link">Welcome</Link></li>
             </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Base Styles</h4>
             <ul className="navigation-is-vertical-child">
               <li><Link to='/ui-design-system/base-styles/colors' className="navigation-link">Colors</Link></li>
               <li><Link to='/ui-design-system/base-styles/icons' className="navigation-link">Icons</Link></li>
               <li><Link to='/ui-design-system/base-styles/typography' className="navigation-link">Typography</Link></li>
             </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Components</h4>
             <ul className="navigation-is-vertical-child">
              <li><Link to='/ui-design-system/components/banners' className="navigation-link">Banners</Link></li>
              <li><Link to='/ui-design-system/components/bubbles' className="navigation-link">Bubbles</Link></li>
              <li><Link to='/ui-design-system/components/buttons' className="navigation-link">Buttons</Link></li>
              <li><Link to='/ui-design-system/components/code' className="navigation-link">Code</Link></li>
              <li><Link to='/ui-design-system/components/forms' className="navigation-link">Forms</Link></li>
              <li><Link to='/ui-design-system/components/layouts' className="navigation-link">Layouts</Link></li>
              <li><Link to='/ui-design-system/components/lists' className="navigation-link">Lists</Link></li>
              <li><Link to='/ui-design-system/components/view-modal' className="navigation-link">Modals</Link></li>
              <li><Link to='/ui-design-system/components/tabs' className="navigation-link">Tabs</Link></li>
              <li><Link to='/ui-design-system/components/tables' className="navigation-link">Tables</Link></li>
              <li><Link to='/ui-design-system/components/utilities' className="navigation-link">Utilities</Link></li>
             </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Compass</h4>
             <ul className="navigation-is-vertical-child">
              <li><Link to='/ui-design-system/compass-components/query-history' className="navigation-link">Query History</Link></li>
             </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Guidelines</h4>
              <ul className="navigation-is-vertical-child">
               <li><Link to='/ui-design-system/guidelines/grid' className="navigation-link">Grid</Link></li>
               <li><Link to='/ui-design-system/guidelines/modify' className="navigation-link">Modify</Link></li>
              </ul>
            </li>
         </ul>
        </nav>
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default UIDesignSystem;
