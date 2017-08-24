// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const BrandColors = () => (
  <div className="wrap">
    <h1 className="heading">Colors</h1>
    <div className="elementGroup">
      <div className="row-content">
        <h2>Primary Colors</h2>
        <ul className="color-block">
        <span className="palette-label">
          <li className="green9"></li>
          <h4>MongoDB Green</h4>
          <p>Hex: #69B241</p>
          <p>RGB: 105, 179, 64</p>
          <p>CMYK: 65, 6, 100, 0</p>
          <p>PMS: 7737C</p>
        </span>
        <span className="palette-label">
          <li className="mongodbslate"></li>
          <h4>Dark Slate</h4>
          <p>Hex: #42494F</p>
          <p>RGB: 67, 74, 80</p>
          <p>CMYK: 72, 60, 53, 37</p>
          <p>PMS: 432C</p>
        </span>
        <span className="palette-label">
          <li className="charcoal"></li>
          <h4>Charcoal</h4>
          <p>Hex: #212121</p>
          <p>RGB: 67, 74, 80</p>
          <p>CMYK: 72, 60, 53, 37</p>
          <p>PMS: 432C</p>
        </span>
        </ul>
      </div>
      <hr/>
      <div className="row-content">
        <h2>Secondary Colors</h2>
        <ul className="color-block">
        <span className="palette-label">
          <li className="magenta li-small"></li>
          <h4>Magenta</h4>
          <p>Hex: #E24F6A1</p>
          <p>RGB: 250, 166, 41</p>
          <p>CMYK: 0, 40, 94, 0</p>
        </span>
        <span className="palette-label">
          <li className="clementine li-small"></li>
          <h4>Clementine</h4>
          <p>Hex: #FCA539</p>
          <p>RGB: 250, 166, 41</p>
          <p>CMYK: 0, 40, 94, 0</p>
        </span>
        <span className="palette-label">
          <li className="blue li-small"></li>
          <h4>Blue</h4>
          <p>Hex: #32BDCF</p>
          <p>RGB: 54, 194, 214</p>
          <p>CMYK: 66, 0, 16, 0</p>
        </span>
        </ul>
      </div>
    </div>
  </div>
);

export default BrandColors;
