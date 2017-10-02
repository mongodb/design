// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

class UICode extends React.Component { 

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1>Code</h1>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h2>Code Styles</h2>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>Copyable Command</h3>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <div className="copy-command">
              <span className="copy-command-text">this is a command that you can copy. it will not break onto the next line even if it is really long, the overflow will keep scrolling horizontally.</span>
              <button className="copy-command-button">
                <i className="fa fa-files-o"></i> Copy
              </button>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <pre>
              <code className="language-html hljs xml" data-lang="html">
{`<div class="copy-command">
  <span class="copy-command-text">this is a command that you can copy. it will break onto the next line even if it is really long, the overflow will keep scrolling horizontally.</span>
  <button class="copy-command-button">
    <i class="fa fa-files-o"></i> Copy
  </button>
</div>` }
              </code>
            </pre>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <div className="copy-command">
              <span className="copy-command-text">by default these are not full width</span>
              <button className="copy-command-button">
                <i className="fa fa-files-o"></i> Copy
              </button>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <pre>
              <code className="language-html hljs xml" data-lang="html">
{`<div class="copy-command">
  <button class="copy-command-button">
  <span class="copy-command-text">by default these are not full width</span>
    <i class="fa fa-files-o"></i> Copy
  </button>
</div>` }
              </code>
            </pre>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <div className="copy-command copy-command-is-full-width">
              <span className="copy-command-text copy-command-text-is-full-width">but you can force them to be</span>
              <button className="copy-command-button">
                <i className="fa fa-files-o"></i> Copy
              </button>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <pre>
              <code className="language-html hljs xml" data-lang="html">
  {`<div class="copy-command copy-command-is-full-width">
    <span class="copy-command-text copy-command-text-is-full-width">but you can force them to be</span>
    <button class="copy-command-button">
      <i class="fa fa-files-o"></i> Copy
    </button>
  </div>` }
              </code>
            </pre>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>Codeblock</h3>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <div className="codeblock">
              <code>
                <div>{ 'const exampleCodeblock = {' }</div>
                <div>{ '  description: \'this is a codeblock that preserves whitespace\',' }</div>
                <div>{ '  overflow: \'this is also scrollable horizontally, so it won\'t break onto the next line even if it\'s really long, it just keeps scrolling and scrolling and scrolling...\'' }</div>
                <div>{ '};' }</div>
              </code>
            </div>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <pre>
              <code className="language-html hljs xml" data-lang="html">
{`<div class="codeblock">
  <code>
    <div>{ 'const exampleCodeblock = {' }</div>
      <div>{ '  description: 'this is a codeblock that preserves whitespace',' }</div>
      <div>{ '  overflow: 'this is also scrollable horizontally, so it won't break onto the next line even if it's really long, it just keeps scrolling and scrolling and scrolling...'' }</div>
    <div>{ '};' }</div>
  </code>
</div>`}
              </code>
            </pre>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>JSON View</h3>
          </div>
        </div>
        <div className="row u-mb-2">
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
            <pre>
              <code className="language-html hljs xml" data-lang="html">
{`<div class="json-view-object">
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
</div> `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default UICode;
