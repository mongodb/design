// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';

const UICode = () => (
      <div className="wrap">
        <div className="row">
          <div className="columns small-12">
            <h1>Code</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <ul className="section-header-tabs">
              <li className="section-header-tab section-header-tab-is-active">
                <Link to='/ui-design-system/components/code' className="section-header-tab-link">CSS</Link>
              </li>
              <li className="section-header-tab">
                <Link to='/ui-design-system/components/code/react-copyablecommand' className="section-header-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h2>Code Styles</h2>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Copyable Command</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <div className="copy-command copy-command-single">
              <div className="copy-command-single-container">
                <code className="copy-command-text">By default command snippets are not full width.</code>
              </div>
              <div className="copy-command-button-container">
                <button className="button copy-command-button">
                  <i className="fa fa-files-o"></i> Copy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<div class="copy-command copy-command-single">
  <div class="copy-command-single-container">
    <code class="copy-command-text">By default command snippets are not full width.</code>
  </div>
  <div class="copy-command-button-container">
    <button class="button copy-command-button">
      <i class="fa fa-files-o"></i> Copy
    </button>
  </div>
</div>`}> 
            </Code>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <div className="copy-command copy-command-single copy-command-is-full-width">
              <div className="copy-command-single-container">
                <code className="copy-command-text">However, you can force the snippet to be full width by adding an additional class. this code runs extra long.</code>
              </div>
              <div className="copy-command-button-container">
                <button className="button copy-command-button">
                  <i className="fa fa-files-o"></i> Copy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<div class="opy-command copy-command-single copy-command-is-full-width">
  <div class="copy-command-single-container">
    <code class="copy-command-text">However, you can force the snippet to be full width by adding an additional class. this code runs extra long.</code>
  </div>
  <div class="copy-command-button-container">
    <button class="button copy-command-button">
      <i class="fa fa-files-o"></i> Copy
    </button>
  </div>
</div>`}> 
            </Code>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Codeblock</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <div className="copy-command copy-command-block">
              <div className="copy-command-block-container">
                <code className="copy-command-text">
                  <div>{ 'const exampleCodeblock = {' }</div>
                  <div>{ '  description: \'this is a codeblock that preserves whitespace\',' }</div>
                  <div>{ '  overflow: \'this is also scrollable horizontally, so it won\'t break onto the next line even if it\'s really long, it just keeps scrolling and scrolling and scrolling...\'' }</div>
                  <div>{ '};' }</div>
                </code>
              </div>
              <div className="copy-command-button-container">
                <button className="button copy-command-button">
                  <i className="fa fa-files-o"></i> Copy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<div class="copy-command copy-command-block">
  <div class="copy-command-block-container">
    <code class="copy-command-text">
      <div>{ 'const exampleCodeblock = {' }</div>
        <div>{ '  description: 'this is a codeblock that preserves whitespace',' }</div>
        <div>{ '  overflow: 'this is also scrollable horizontally, so it won't break onto the next line even if it's really long, it just keeps scrolling and scrolling and scrolling...'' }</div>
      <div>{ '};' }</div>
    </code>
  </div>
  <div class="copy-command-button-container">
    <button class="button copy-command-button">
      <i class="fa fa-files-o"></i> Copy
    </button>
  </div>
</div>`}> 
            </Code>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>JSON View</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <div className="json-view-object">
              <div>
                <span className="json-view-key">_id:</span>
                <span>ObjectID('2340808293cc4750a928x223')</span>
              </div>
              <div>
                <span className="json-view-key">address:</span>
                <span>Object</span>
                <div className="json-view-object">
                  <div>
                    <span className="json-view-key">street:</span>
                    <span>"1839 Nostrand Ave"</span>
                  </div>
                  <div>
                    <span className="json-view-key">zip:</span>
                    <span>"11226"</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="json-view-key">borough:</span>
                <span>"Brooklyn"</span>
              </div>
              <div>
                <span className="json-view-key">cuisine:</span>
                <span>"Ice Cream, Gelato, Yogurt, Ices"</span>
              </div>
              <div>
                <span className="json-view-key">grades:</span>
                <span>Array[4]</span>
                <div className="json-view-object">
                  <div>
                    <span className="json-view-key">0:</span>
                    <span>"92"</span>
                  </div>
                  <div>
                    <span className="json-view-key">1:</span>
                    <span>"79"</span>
                  </div>
                  <div>
                    <span className="json-view-key">2:</span>
                    <span>"88"</span>
                  </div>
                  <div>
                    <span className="json-view-key">3:</span>
                    <span>Object</span>
                    <div className="json-view-object">
                      <div>
                        <span className="json-view-key">service:</span>
                        <span>"80"</span>
                      </div>
                      <div>
                        <span className="json-view-key">food:</span>
                        <span>"95"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="json-view-key">name:</span>
                <span>"Taste The Tropics Ice Cream"</span>
              </div>
              <div>
                <span className="json-view-key">restaurant_id:</span>
                <span>"40356731"</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<div class="json-view-object">
   <div>
      <span class="json-view-key">_id:</span>
      <span>ObjectID(\'2340808293cc4750a928x223\')</span>
   </div>
   <div>
      <span class="json-view-key">address:</span>
      <span>Object</span>
      <div class="json-view-object">
         <div>
            <span class="json-view-key">street:</span>
            <span>"1839 Nostrand Ave"</span>
         </div>
         <div>
            <span class="json-view-key">zip:</span>
            <span>"11226"</span>
         </div>
      </div>
   </div>
   <div>
      <span class="json-view-key">borough:</span>
      <span>"Brooklyn"</span>
   </div>
   <div>
      <span class="json-view-key">cuisine:</span>
      <span>"Ice Cream, Gelato, Yogurt, Ices"</span>
   </div>
   <div>
      <span class="json-view-key">grades:</span>
      <span>Array[4]</span>
      <div class="json-view-object">
         <div>
            <span class="json-view-key">0:</span>
            <span>"92"</span>
         </div>
         <div>
            <span class="json-view-key">1:</span>
            <span>"79"</span>
         </div>
         <div>
            <span class="json-view-key">2:</span>
            <span>"88"</span>
         </div>
         <div>
            <span class="json-view-key">3:</span>
            <span>Object</span>
            <div class="json-view-object">
               <div>
                  <span class="json-view-key">service:</span>
                  <span>"80"</span>
               </div>
               <div>
                  <span class="json-view-key">food:</span>
                  <span>"95"</span>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div>
      <span class="json-view-key">name:</span>
      <span>"Taste The Tropics Ice Cream"</span>
   </div>
   <div>
      <span class="json-view-key">restaurant_id:</span>
      <span>"40356731"</span>
   </div>
</div> `}> 
           </Code>
          </div>
        </div>
      </div>
);

export default UICode;
