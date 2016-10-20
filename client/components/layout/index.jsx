// ==================================================
// Layout
// ==================================================

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
require('../../styling/root.less');

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="MongoDB.Design"
      meta={[
        { name: 'description', content: 'Design resources from MongoDB, Inc.' },
      ]}
      link={[
        { rel: 'shortcut icon', href: require('../../assets/favicon.ico') },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cloud.mongodb.com/static/assets/css/thirdparty.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cloud.mongodb.com/static/dist/styles.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cloud.mongodb.com/static/dist/v2/app.min.css' }
      ]}
    />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js"></script>
    <div className="header">
      <div className="container">
        <div className="brand">
          <h1><Link to="/">MongoDB.design</Link></h1>
        </div>
        <div className="navigation">
          <Link to="/brand-design-system">Brand &amp; Identity</Link>
          <Link to="/ui-design-system">UI Design System</Link>
          <Link to="/">Tools &amp; Resources</Link>
          <Link to="http://mongodb.com/careers">Careers</Link>
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
