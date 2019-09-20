// ==================================================
// DesignSystem - DSWelcome
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import WebStyleGuide from '../../../assets/WebStyleGuide.pdf'

const UIPrinciples = () => (
  <div className="wrap">
		<div className="row">
      <div className="columns small-12">
        <h1 className="heading">Website Guidelines</h1>
        <p>For website style guidelines please use <a href={WebStyleGuide} download><b>this document</b></a>.</p>
      </div>
		</div>
  </div>
);

export default UIPrinciples;
