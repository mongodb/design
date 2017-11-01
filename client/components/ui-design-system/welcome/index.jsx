// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const UIWelcome = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1 className="heading">Welcome</h1>
      </div>
      <div className="columns small-12">
        <p>This site aims to provide everything you need to get up to speed quickly when designing for MongoDB. 
        In this site you will find documentation for HTML/CSS components, React components, Sketch assets, 
        and usage guidelines. This site currently focuses on all things related to the design of our products. 
        If you are looking for brand assets and guidelines, or press kits, those can be found in the <a href="https://mongodb.frontify.com" target="_blank">MongoDB Brand Portal</a>.</p>

        <h2>Contents</h2>

        <h3>Base Styles</h3>
        <p>For guidelines around global color palettes, typography, iconography, and a general-purpose 12-column grid.</p>

        <h3>Components</h3>
        <p>The core components common to all of our products.</p>

        <h3>Application-Specific Components</h3>
        <p>Listed in the navigation under their respective product names (<Link to="/ui-design-system/compass-components">Compass</Link>, Cloud, Stitch, University)</p>

        <h2>Contribute</h2>
        <p>The contents of this site will forever be a work in progress. If you would like to contribute you can do 
        so via the <a href="https://github.com/mongodb/design" target="_blank">MongoDB Design repository</a>.</p>
      </div>
    </div>
  </div>
);

export default UIWelcome;
