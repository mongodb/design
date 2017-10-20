// ==================================================
// DesignSystem - DSLogo
// ==================================================

import React from 'react';
import '../../../styling/root.less';
var logoLockup = require('../../../assets/logo-lockup.png');
var logoStructure = require('../../../assets/logo-structure.png');

const BrandLogo = () => (
  <div className="wrap">
    <h1 className="heading">Logo</h1>
    <div className="elementGroup">
      <div className="row-content">
        <h3>Basic Usage Guidelines</h3>
        <ul>
          <li>Do not rotate the MongoDB logo.</li>
          <li>Do not change the color of the MongoDB logo.</li>
          <li>Do not distort the MongoDB logo - be sure to scale proportionately.</li>
          <li>Allow an appropriate amount of white space around the MongoDB logo, at least as much as the x-height of the logo (suggested).</li>
          <li>Preferred minimum size for the MongoDB logo is 100px wide. For smaller sizes, you must seek permission from the MongoDB marketing team.</li>
        </ul>
          <img alt="MongoDB logo element" src="https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"></img>
        <hr/>
      </div>
      <div className="row-content">
        <h3>Logo | Structure</h3>
        <img alt="MongoDB logo lock up" src={logoLockup}/>
      </div>
      <div className="row-content">
        <img alt="MongoDB logo structure" src={logoStructure}/>
      </div>
    </div>
  </div>
);

export default BrandLogo;
