// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import Code from '../../subcomponents/code';

const UIForms = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1>Forms</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Inputs</h2>
        <p>Inputs are used throughout the UI for several different purposes. Most frequently, inputs are used within the context of a form. Other uses include searching and filtering.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Default Input</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<input type="text" placeholder={"Something"} class="input" />`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Small Input</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input input-is-small" />
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<input type="text" placeholder={'Something'} class="input input-is-small" />`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Input with Button</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-10">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
      <div className="columns small-2">
        <button className="button button-is-primary button-is-full">Submit Form</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<input type="text" placeholder={"Something"} class="input" />
<button class="button button-is-primary button-is-full">Submit Form</button>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Input States</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h4>Input Success</h4>
        <div className="input-with-message">
          <input type="text" placeholder={'Something'} className="input input-is-success input-form-control"/>
          <div className="success-label">Success</div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="input-with-message">
  <input type="text" placeholder={'Something'} class="input input-is-success input-form-control"/>
  <div class="success-label">Success</div>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
       <h4>Input Error</h4>
        <div className="input-with-message">
          <input type="text" placeholder={'Something'} className="input input-has-error"/>
          <p className="error-message">Contextual alert message goes here</p>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="input-with-message">
  <input type="text" placeholder={'Something'} class="input input-has-error"/>
  <p class="error-message">Contextual alert message goes here</p>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Obscurable Input</h3>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <div className="input-with-message">
          <input type="password" readonly="" placeholder={'This is an obscurable input for viewing things like passwords'} className="input input-form-control" />
          <div className="input-with-message-toggle">Show</div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="input-with-message">
          <input type="text" readonly="" placeholder={'This is an input for viewing things like keys'} className="input input-form-control" />
          <div className="input-with-message-toggle">Hide</div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="input-with-message">
  <input type="password" readonly="" placeholder={'This is an obscurable input for viewing things like passwords'} class="input input-form-control" />
  <div class="input-with-message-toggle">Show</div>
</div>
<div class="input-with-message">
  <input type="text" readonly="" placeholder={'This is an input for viewing things like keys'} class="input input-form-control" />
  <div class="input-with-message-toggle">Hide</div>
</div>`}> 
        </Code>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Rich Form Controls</h2>
        <p>Occasionally a form calls for more than a simple radio button or checkbox. These rich form controls pack that extra punch.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Implicit Rich Radio</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked="" />
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
        <h3>With Select Buttons</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked />
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
        <h3>Large Rich Radio</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-large rich-radio-is-checked">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" checked />
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
        <h3>In Columns with Rich Content</h3>
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
        <h3>With Illustrations</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="3" checked />
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

export default UIForms;
