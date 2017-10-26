// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const UIWelcome = () => (
  <div className="row">
    <div className="columns small-12">
      <h1 className="heading">Welcome</h1>
    </div>
    <div className="columns small-12 u-mb-3">
      <p>This site aims to provide everything you need to get up to speed quickly when designing for MongoDB. 
      The contents of this site will forever be a work in progress. If you'd like to contribute you can do 
      so via the <a href="https://github.com/mongodb/design" target="_blank">MongoDB Design repository</a>.</p>
    </div>
  </div>
);

export default UIWelcome;
