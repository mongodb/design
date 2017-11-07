// ==================================================
// Layout
// ==================================================

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
require('../../bem-components/root.less');

const parent_class = "navigation-is-horizontal-parent";

class Layout extends React.Component { 

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  getClassName(parent_class) {
    if (this.state.open) {
      return `${parent_class} ${parent_class}-is-open`;
    }
    return parent_class;
  }

  toggleHamburgerMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { children } = this.props;
    return (
      <div className="row">
        <Helmet
          title="MongoDB Design System"
          meta={[
            { name: 'description', content: 'Design resources from MongoDB, Inc.' }
          ]}
        />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js"></script>
        <div className="columns small-12">
          <div className="header row">
            <div className="columns small-12">
              <div className="row">
                <div className="brand columns small-4">
                    <Link to='/' className="brand-logo"></Link>
                </div>
                  <nav className="navigation columns small-8">
                    <button className="navigation-hamburger-button fa fa-bars" onClick={this.toggleHamburgerMenu.bind(this)}></button>
                    <ul className={this.getClassName(parent_class)} onClick={this.toggleHamburgerMenu.bind(this)}>
                      <li className="navigation-is-horizontal-child"><Link to='/ui-design-system/welcome' className="navigation-link">Design System</Link></li>
                      <li className="navigation-is-horizontal-child"><a href='https://www.mongodb.com/careers/departments/engineering' target="_blank" className="navigation-link">Careers</a></li>
                    </ul>
                  </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
