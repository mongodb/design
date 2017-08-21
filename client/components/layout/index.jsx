// ==================================================
// Layout
// ==================================================

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
require('../../styling/root.less');

const Layout = ({ children }) => (
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
                <Link to='/ui-design-system' className="brand-logo"></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
