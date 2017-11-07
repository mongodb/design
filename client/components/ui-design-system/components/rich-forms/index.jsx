// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import Code from '../../../../site-components/code';

const UIRichForms = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1>Rich Inputs</h1>
        <p>Occasionally a form calls for more than a simple radio button or checkbox. These rich form controls pack that extra punch.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Implicit Rich Radio</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Selected Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="clearfix">
  <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">
    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked="" />
    <div class="rich-radio-main-text">A Selected Radio Option</div>
  </label>
  <label class="rich-radio rich-radio-is-medium">
    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
    <div class="rich-radio-main-text">A Radio Option</div>
  </label>
  <label class="rich-radio rich-radio-is-medium">
    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
    <div class="rich-radio-main-text">A Radio Option</div>
  </label>
</div>`}> 
        </Code>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h2>With Select Buttons</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <button className="button button-is-primary">Select</button>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <button className="button button-is-info">Select</button>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <button className="button button-is-info">Select</button>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="clearfix">
  <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">
    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked />
    <button class="button button-is-primary">Select</button>
  </label>
  <label class="rich-radio rich-radio-is-medium">
    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
    <button class="button button-is-info">Select</button>
  </label>
  <label class="rich-radio rich-radio-is-medium">
    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
    <button class="button button-is-info">Select</button>
  </label>
</div>`}> 
        </Code>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h2>Large Rich Radio</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-large rich-radio-is-checked">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Selected Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-large">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-large">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-large">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="clearfix">
  <label class="rich-radio rich-radio-is-large rich-radio-is-checked">
    <input class="rich-radio-radio-button" type="radio" name="region" value="" checked />
    <div class="rich-radio-main-text">A Selected Radio Option</div>
  </label>
  <label class="rich-radio rich-radio-is-large">
    <input class="rich-radio-radio-button" type="radio" name="region" value="" />
    <div class="rich-radio-main-text">A Radio Option</div>
  </label>
  <label class="rich-radio rich-radio-is-large">
    <input class="rich-radio-radio-button" type="radio" name="region" value="" />
    <div class="rich-radio-main-text">A Radio Option</div>
  </label>
  <label class="rich-radio rich-radio-is-large">
    <input class="rich-radio-radio-button" type="radio" name="region" value="" />
    <div class="rich-radio-main-text">A Radio Option</div>
  </label>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>In Columns with Rich Content</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns medium-6">
        <div className="rich-radio">
          <div className="rich-radio-title">Option Name</div>
          <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          <section>
            <ul className="checklist">
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
            </ul>
          </section>
          <button type="button" className="button button-is-primary button-is-full">
            Select
          </button>
        </div>
      </div>
      <div className="columns medium-6">
        <div className="rich-radio">
          <div className="rich-radio-title">Option Name</div>
          <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          <section>
            <ul className="checklist">
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
            </ul>
          </section>
          <button type="button" className="button button-is-primary button-is-full">
            Select
          </button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="rich-radio">
  <div class="rich-radio-title">Option Name</div>
  <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>
  <section>
    <ul class="checklist">
      <li class="checklist-item">feature one</li>
      <li class="checklist-item">feature one</li>
      <li class="checklist-item">feature one</li>
    </ul>
  </section>
  <button type="button" class="button button-is-primary button-is-full">
    Select
  </button>
</div>
<div class="rich-radio">
  <div class="rich-radio-title">Option Name</div>
  <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>
  <section>
    <ul class="checklist">
      <li class="checklist-item">feature one</li>
      <li class="checklist-item">feature one</li>
      <li class="checklist-item">feature one</li>
    </ul>
  </section>
  <button type="button" class="button button-is-primary button-is-full">
    Select
  </button>
</div>`}> 
        </Code>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h2>With Illustrations</h2>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="3" />
            <div className="rich-radio-illustration-container">
              <div>
                <svg className="rich-radio-illustration">
                  <g transform="translate(6, 14)">
                    <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                  </g>
                </svg>
              </div>
              <div>
                <div className="rich-radio-illustration-title">Option Name</div>
                <div className="rich-radio-illustration-description">Option Description</div>
              </div>
            </div>
          </label>

          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="5" />
            <div className="rich-radio-illustration-container">
              <div>
                <svg className="rich-radio-illustration">
                  <g transform="translate(6, 9)">
                    <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                  </g>
                </svg>
              </div>
              <div>
                <div className="rich-radio-illustration-title">Option Name</div>
                <div className="rich-radio-illustration-description">Option Description</div>
              </div>
            </div>
          </label>

          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="7" />
            <div className="rich-radio-illustration-container">
              <div>
                <svg className="rich-radio-illustration">
                  <g transform="translate(6, 3)">
                    <rect width="25" height="25" transform="translate(0, 30), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 25), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                  </g>
                </svg>
              </div>
              <div>
                <div className="rich-radio-illustration-title">Option Name</div>
                <div className="rich-radio-illustration-description">Option Description</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="clearfix">
 <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">
   <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="3" checked>
   <div class="rich-radio-illustration-container">
     <div>
       <svg class="rich-radio-illustration">
         <g transform="translate(6, 14)">
           <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
         </g>
       </svg>
     </div>
     <div>
       <div class="rich-radio-illustration-title">Option Name</div>
       <div class="rich-radio-illustration-description">Option Description</div>
     </div>
   </div>
 </label>
 <label class="rich-radio rich-radio-is-medium">
   <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="5">
   <div class="rich-radio-illustration-container">
     <div>
       <svg class="rich-radio-illustration">
         <g transform="translate(6, 9)">
           <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
         </g>
       </svg>
     </div>
     <div>
       <div class="rich-radio-illustration-title">Option Name</div>
       <div class="rich-radio-illustration-description">Option Description</div>
     </div>
   </div>
 </label>
 <label class="rich-radio rich-radio-is-medium">
   <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="7">
   <div class="rich-radio-illustration-container">
     <div>
       <svg class="rich-radio-illustration">
         <g transform="translate(6, 3)">
           <rect width="25" height="25" transform="translate(0, 30), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 25), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
           <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>
         </g>
       </svg>
     </div>
     <div>
       <div class="rich-radio-illustration-title">Option Name</div>
       <div class="rich-radio-illustration-description">Option Description</div>
     </div>
   </div>
 </label>
<div>`}> 
        </Code>
      </div>
    </div>

  </div>
);

export default UIRichForms;
