// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const container_class = "navigation-is-vertical-container";

const NavigationLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="navigation-link"
      activeClassName="navigation-link-active">
      {children}
    </Link>
  </li>
)

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
              <h4><Link to='/ui-design-system/welcome' className="navigation-link" activeClassName="navigation-link-active">Welcome</Link></h4>
              <ul className="navigation-is-vertical-child">
                <NavigationLink to='/ui-design-system/principles'>Design Principles</NavigationLink>
              </ul>
            </li>

            <li className="navigation-is-vertical-parent">
              <h4>Brand</h4>
              <ul className="navigation-is-vertical-child">
                <NavigationLink to='/ui-design-system/brand/brand-guidelines'>Brand Guidelines</NavigationLink>
                <NavigationLink to='/ui-design-system/brand/website-guidelines'>Website Guidelines</NavigationLink>
              </ul>
            </li>

            <li className="navigation-is-vertical-parent">
              <h4><Link to='/ui-design-system/base-styles' className="navigation-link" activeClassName="navigation-link-active">Base Styles</Link></h4>
              <ul className="navigation-is-vertical-child">
                <NavigationLink to='/ui-design-system/base-styles/colors'>Colors</NavigationLink>
                <NavigationLink to='/ui-design-system/base-styles/typography'>Typography</NavigationLink>
                <NavigationLink to='/ui-design-system/guidelines/grid'>Grid</NavigationLink>
                <NavigationLink to='/ui-design-system/base-styles/icons'>Icons</NavigationLink>
              </ul>
            </li>
            <li className="navigation-is-vertical-parent">
              <h4><Link to='/ui-design-system/components' className="navigation-link" activeClassName="navigation-link-active">Components</Link></h4>
              <ul className="navigation-is-vertical-child">
                <NavigationLink to='/ui-design-system/components/buttons'>Buttons</NavigationLink>
                <NavigationLink to='/ui-design-system/components/banners'>Banners</NavigationLink>
                <NavigationLink to='/ui-design-system/components/bubbles'>Bubbles</NavigationLink>
                <NavigationLink to='/ui-design-system/components/code'>Code</NavigationLink>
                <NavigationLink to='/ui-design-system/components/forms'>Inputs</NavigationLink>
                <NavigationLink to='/ui-design-system/components/rich-forms'>Rich Inputs</NavigationLink>
                <NavigationLink to='/ui-design-system/components/layouts'>Layouts</NavigationLink>
                <NavigationLink to='/ui-design-system/components/lists'>Lists</NavigationLink>
                <NavigationLink to='/ui-design-system/components/view-modal'>Modals</NavigationLink>
                <NavigationLink to='/ui-design-system/components/tabs'>Tabs</NavigationLink>
                <NavigationLink to='/ui-design-system/components/tables'>Tables</NavigationLink>
              </ul>
            </li>
            <li className="navigation-is-vertical-parent">
              <h4><Link to='/ui-design-system/compass-components' className="navigation-link" activeClassName="navigation-link-active">Compass</Link></h4>
              <ul className="navigation-is-vertical-child">
                <NavigationLink to='/ui-design-system/compass-components/query-history'>Query History</NavigationLink>
              </ul>
            </li>
            <li className="navigation-is-vertical-parent">
              <h4><Link to='/ui-design-system/guidelines' className="navigation-link" activeClassName="navigation-link-active">Guidelines</Link></h4>
              <ul className="navigation-is-vertical-child">
                <NavigationLink to='/ui-design-system/guidelines/modify'>Modify</NavigationLink>
              </ul>
            </li>
            <li className="navigation-is-vertical-parent">
              <h4><Link to='/ui-design-system/resources' className="navigation-link" activeClassName="navigation-link-active">Resources</Link></h4>
            </li>
         </ul>
        </nav>
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default UIDesignSystem;
