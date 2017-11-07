// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const DesignSystem = () => (
  <div> 
    <div className="hero">
      <div className="hero-container">
        <h1><strong>MongoDB</strong> Design</h1>
        <h3>Design for mission-critical applications.</h3>
        <div className="button-container">
          <Link to='/ui-design-system/welcome' className="button button-is-info button-mktg">Design System</Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="columns">
        <div className="footer">
          <div className="footer-social">
            <a href="https://github.com/mongodb/design" target="_blank" className="footer-social-github u-mh-3"></a>
            <a href="https://dribbble.com/MongoDB" target="_blank" className="footer-social-dribbble u-mh-3"></a>
          </div>
          <p>Made with 💚 by MongoDB Design</p>
          <p>MongoDB &copy; 2017</p>
        </div>
      </div>
    </div>
  </div>
);

export default DesignSystem;
