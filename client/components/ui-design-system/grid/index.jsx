// ==================================================
//  DesignSystem - DSGrid
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIGrid = () => (
  <div className="wrap">
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h1>Grid</h1>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h2>Grid 12-Column</h2>
        <p>We use the <a href={"http://foundation.zurb.com/sites/docs/grid.html"} className="link">Foundation grid</a> as our base grid system. It is customizable, flexible and responsive.</p>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12">
        <h3>Usage</h3>
        <p>When setting up your page with the grid, be sure to include the <span className="code">small-#</span>, <span className="code">medium-#</span> and <span className="code">large-#</span> values. These values represent how the grid will adapt to small, medium and large screen formats.</p>
      </div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-3 grid-item"><span>3</span></div>
      <div className="columns small-12 medium-6 large-3 grid-item"><span>3</span></div>
      <div className="columns small-12 medium-6 large-3 grid-item"><span>3</span></div>
      <div className="columns small-12 medium-6 large-3 grid-item"><span>3</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-4 grid-item"><span>4</span></div>
      <div className="columns small-12 medium-6 large-4 grid-item"><span>4</span></div>
      <div className="columns small-12 medium-6 large-4 grid-item"><span>4</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-5 grid-item"><span>5</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-5 grid-item"><span>5</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-6 grid-item"><span>6</span></div>
      <div className="columns small-12 medium-6 large-6 grid-item"><span>6</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-7 grid-item"><span>7</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-3 grid-item"><span>3</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-8 grid-item"><span>8</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-9 grid-item"><span>9</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-10 grid-item"><span>10</span></div>
      <div className="columns small-12 medium-6 large-2 grid-item"><span>2</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-11 grid-item"><span>11</span></div>
      <div className="columns small-12 medium-6 large-1 grid-item"><span>1</span></div>
    </div>
    <div className="row u-mb-1">
      <div className="columns small-12 medium-6 large-12 grid-item"><span>12</span></div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
    		<pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div className="columns small-12 medium-6 large-1">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-2">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-3">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-4">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-5">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-6">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-7">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-8">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-9">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-10">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-11">Content Here</div>' }</div>
            <div>{ '<div className="columns small-12 medium-6 large-12">Content Here</div>' }</div>
          </code>
    		</pre>
      </div>
    </div>
  </div>
);

export default UIGrid;
