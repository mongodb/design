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
            <li className="navigation-is-vertical-parent">
              <h4><Link to='/ui-design-system/welcome' className="navigation-link">Welcome</Link></h4>
              <ul className="navigation-is-vertical-child">
                <li className="navigation-link"><Link to='/ui-design-system/principles' className="navigation-link" activeClassName="navigation-link-active">Design Principles</Link></li>
              </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Base Styles</h4>
             <ul className="navigation-is-vertical-child">
               <li><Link to='/ui-design-system/base-styles/colors' className="navigation-link" activeClassName="navigation-link-active">Colors</Link></li>
               <li><Link to='/ui-design-system/base-styles/icons' className="navigation-link" activeClassName="navigation-link-active">Icons</Link></li>
               <li><Link to='/ui-design-system/base-styles/typography' className="navigation-link" activeClassName="navigation-link-active">Typography</Link></li>
             </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Components</h4>
             <ul className="navigation-is-vertical-child">
              <li><Link to='/ui-design-system/components/banners' className="navigation-link" activeClassName="navigation-link-active">Banners</Link></li>
              <li><Link to='/ui-design-system/components/bubbles' className="navigation-link" activeClassName="navigation-link-active">Bubbles</Link></li>
              <li><Link to='/ui-design-system/components/buttons' className="navigation-link" activeClassName="navigation-link-active">Buttons</Link></li>
              <li><Link to='/ui-design-system/components/code' className="navigation-link" activeClassName="navigation-link-active">Code</Link></li>
              <li><Link to='/ui-design-system/components/forms' className="navigation-link" activeClassName="navigation-link-active">Forms</Link></li>
              <li><Link to='/ui-design-system/components/layouts' className="navigation-link" activeClassName="navigation-link-active">Layouts</Link></li>
              <li><Link to='/ui-design-system/components/lists' className="navigation-link" activeClassName="navigation-link-active">Lists</Link></li>
              <li><Link to='/ui-design-system/components/view-modal' className="navigation-link" activeClassName="navigation-link-active">Modals</Link></li>
              <li><Link to='/ui-design-system/components/tabs' className="navigation-link" activeClassName="navigation-link-active">Tabs</Link></li>
              <li><Link to='/ui-design-system/components/tables' className="navigation-link" activeClassName="navigation-link-active">Tables</Link></li>
              <li><Link to='/ui-design-system/components/utilities' className="navigation-link" activeClassName="navigation-link-active">Utilities</Link></li>
             </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Compass</h4>
             <ul className="navigation-is-vertical-child">
              <li><Link to='/ui-design-system/compass-components/query-history' className="navigation-link" activeClassName="navigation-link-active">Query History</Link></li>
             </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Guidelines</h4>
              <ul className="navigation-is-vertical-child">
               <li><Link to='/ui-design-system/guidelines/grid' className="navigation-link" activeClassName="navigation-link-active">Grid</Link></li>
               <li><Link to='/ui-design-system/guidelines/modify' className="navigation-link" activeClassName="navigation-link-active">Modify</Link></li>
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
