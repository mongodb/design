// ==================================================
// DesignSystem - DSLogo
// ==================================================

import React from 'react';
import '../../../styling/root.less';
var logoLockup = require('../../../assets/logo-lockup.png');

const BrandLogo = () => (
    <div className="wrap">
        <h1 className="heading">Logo</h1>
        <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
        <div className="container-fluid">
            <div className="row">
                <div className="content">
                    <h3>Basic Usage Guidelines</h3>
                    <ul>
                        <li>Do not rotate the MongoDB logo.</li>
                        <li>Do not change the color of the MongoDB logo.</li>
                        <li>Do not distort the MongoDB logo - be sure to scale proportionately.</li>
                        <li>Allow an appropriate amount of white space around the MongoDB logo, at least as much as the x-height of the logo (suggested).</li>
                        <li>Preferred minimum size for the MongoDB logo is 100px wide. For smaller sizes, you must seek permission from the MongoDB marketing team.</li>
                    </ul>
                </div>
                <div className="content">
                    <img alt="MongoDB logo" src="https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"></img>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="content">
                    <h3>Logo | Structure</h3>
                        <div className="content">
                            <img alt="MongoDB logo lock" src={logoLockup}/>
                        </div>
                </div>
            </div>
        </div>
    </div>
);

export default BrandLogo;
