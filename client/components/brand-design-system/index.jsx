// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import '../../styling/root.less';

const container_class = "navigation-is-vertical-container";

class BrandDesignSystem extends React.Component { 
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

  render () {
    const { children } = this.props;
    return (
      <div className="wrap">
        <nav className="navigation-is-vertical">
          <button className="navigation-mobile-menu-button button button-extra-small" onClick={this.toggleMobileMenu.bind(this)} onBlur={this.closeMobileMenu.bind(this)}>Component Navigation</button>
          <ul className={this.getClassName(container_class)} onClick={this.closeMobileMenu.bind(this)}>
            <li className="navigation-is-vertical-parent"><h1><b>Brand</b> Design</h1>
              <ul className="navigation-is-vertical-child">
                <li><Link to='/brand-design-system/' className="navigation-link">Welcome</Link></li>
              </ul>
            </li>
            <li className="navigation-is-vertical-parent"><h4>Base Styles</h4>
              <ul className="navigation-is-vertical-child">
                <li><Link to='/brand-design-system/logo' className="navigation-link">Logo</Link></li>
                <li><Link to='/brand-design-system/typography' className="navigation-link">Typography</Link></li>
                <li><Link to='/brand-design-system/colors' className="navigation-link">Colors</Link></li>
              </ul>
            </li>
        	</ul>
        </nav>
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default BrandDesignSystem;
