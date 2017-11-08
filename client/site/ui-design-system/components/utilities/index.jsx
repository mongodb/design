// ==================================================
//  DesignSystem - DSUtilities
// ==================================================

import React from 'react';

const UIUtilities = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Utilities</h1>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>About utility classes</h2>
        <p>Utility classes provide flexibility throughout our codebase. Rather than adding single-specificity to a given component, utility classes will allow us to add spacing and alignment tweaks without writing new code.</p>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h3>Spacing Rules</h3>
        <p>When working with utility classes, it's important that you first understand the spacing rules, which are applied using <span className="code">rem</span> values. Simply put, <span className="code">1rem</span> is equal to <span className="code">16px</span>.</p>
        <div className="row u-mt-4 u-mb-3">
          <div className="columns small-12">
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>REM Value</th>
                  <th>Pixel Output</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0rem</td>
                  <td>0px</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>0.25rem</td>
                  <td>4px</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>0.5rem</td>
                  <td>8px</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1rem</td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>1.5rem</td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>2rem</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>2.5rem</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>3rem</td>
                  <td>48px</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>3.5rem</td>
                  <td>56px</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>4rem</td>
                  <td>64px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-4">
      <div className="columns small-12">
        <h3>Margins</h3>
        <p>To apply a margin utility style, give the component you want to update a class name of <span className="code">.u-ma-#</span>, <span className="code">.u-mv-#</span>, <span className="code">.u-mh-#</span>, <span className="code">.u-mt-#</span>, <span className="code">.u-mb-#</span>, <span className="code">.u-ml-#</span>, <span className="code">.u-mr-#</span></p>
        <p><span className="code">ma</span> = margin on all sides</p>
        <p><span className="code">mv</span> = margin on top and bottom</p>
        <p><span className="code">mh</span> = margin on left and right</p>
        <p><span className="code">mt</span> = margin on top</p>
        <p><span className="code">mb</span> = margin on bottom</p>
        <p><span className="code">ml</span> = margin on left</p>
        <p><span className="code">mr</span> = margin on right</p>
      </div>
    </div>
    <div className="row u-mb-4">
      <div className="columns small-12">
        <h3>Padding</h3>
        <p>To apply a padding utility style, give the component you want to update a class name of <span className="code">.u-pa-#</span>, <span className="code">.u-pv-#</span>, <span className="code">.u-ph-#</span>, <span className="code">.u-pt-#</span>, <span className="code">.u-pb-#</span>, <span className="code">.u-pl-#</span>, <span className="code">.u-pr-#</span></p>
        <p><span className="code">pa</span> = padding on all sides</p>
        <p><span className="code">pv</span> = padding on top and bottom</p>
        <p><span className="code">ph</span> = padding on left and right</p>
        <p><span className="code">pt</span> = padding on top</p>
        <p><span className="code">pb</span> = padding on bottom</p>
        <p><span className="code">pl</span> = padding on left</p>
        <p><span className="code">pr</span> = padding on right</p>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h3>Floats</h3>
        <p>The margin utility class is good for adding or removing any predefined margins on any component. Margin utilities are written with the prepending <span className="code">.u-m</span> plus the defining side and amount <span className="code">b-1</span>.</p>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h3>Alignment</h3>
        <p>The margin utility class is good for adding or removing any predefined margins on any component. Margin utilities are written with the prepending <span className="code">.u-m</span> plus the defining side and amount <span className="code">b-1</span>.</p>
      </div>
    </div>
  </div>
);

export default UIUtilities;
