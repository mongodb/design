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
        <h3>Two teams, one vision… consectetur adipiscing elit. 
        Sed hendrerit consectetur mauris vel mollis. Donec id 
        posuere arcu, eu mattis erat. Vivamus eleifend justo et tristique.</h3>
        <div className="button-container">
          <Link to='/brand-design-system' className="button button-is-info button-mktg">Brand Guidelines</Link>
          <Link to='/ui-design-system/welcome' className="button button-is-info button-mktg">Design System</Link>
        </div>
      </div>
    </div>

{/*
    <div className="row u-ma-9">
      <div className="columns">
        <div className="featured">
          <div className="row u-mb-9">
            <div className="columns small-3">
              <h4>no 1</h4>
              <h2>A Design Principle</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam in libero ac augue ultrices molestie et quis velit. 
              Curabitur at consequat lectus. Phasellus eu sapien sem. 
              Nulla sollicitudin, neque facilisis laoreet tempus, 
              tortor dui dignissim lectus, et laoreet ligula eros ac tellus. 
              Maecenas mattis ipsum vel mi luctus porttitor.</p>
            </div>
          </div>
          <div className="row u-mb-9">
            <div className="columns small-3">
              <h4>no 2</h4>
              <h2>A Design Principle</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam in libero ac augue ultrices molestie et quis velit. 
              Curabitur at consequat lectus. Phasellus eu sapien sem. 
              Nulla sollicitudin, neque facilisis laoreet tempus, 
              tortor dui dignissim lectus, et laoreet ligula eros ac tellus. 
              Maecenas mattis ipsum vel mi luctus porttitor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
*/}
    <div className="row">
      <div className="columns">
        <div className="footer">
          <div className="footer-social">
            <a href="https://github.com/leafygreen/design" target="_blank" className="footer-social-github u-mh-3"></a>
            <a href="https://dribbble.com/MongoDB" target="_blank" className="footer-social-dribbble u-mh-3"></a>
          </div>
          <p>Made with 💚 by MongoDB.</p>
          <p>Probably some other legal/copyright stuff would go here, too.</p>
        </div>
      </div>
    </div>
  </div>
);

export default DesignSystem;
