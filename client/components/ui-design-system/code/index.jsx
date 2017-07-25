// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UICode = () => (
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
            <div>{ '<div class="copy-command">' }</div>
            <div>{ '  <span class="copy-command-text">this is a command that you can copy. it will break onto the next line even if it is really long, the overflow will keep scrolling horizontally.</span>' }</div>
            <div>{ '  <button class="copy-command-button">' }</div>
            <div>{ '    <i class="fa fa-files-o"></i> Copy' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
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
            <div>{ '<div class="copy-command">' }</div>
            <div>{ '  <span class="copy-command-text">by default these are not full width</span>' }</div>
            <div>{ '  <button class="copy-command-button">' }</div>
            <div>{ '    <i class="fa fa-files-o"></i> Copy' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
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
            <div>{ '<div class="copy-command copy-command-is-full-width">' }</div>
            <div>{ '  <span class="copy-command-text copy-command-text-is-full-width">but you can force them to be</span>' }</div>
            <div>{ '  <button class="copy-command-button">' }</div>
            <div>{ '    <i class="fa fa-files-o"></i> Copy' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
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
            <div>{ '<div class="codeblock">' }</div>
            <div>{ '  <code>' }</div>
            <div>{ '    <div>{ \'const exampleCodeblock = {\' }</div>' }</div>
            <div>{ '      <div>{ \'  description: \'this is a codeblock that preserves whitespace\',\' }</div>' }</div>
            <div>{ '      <div>{ \'  overflow: \'this is also scrollable horizontally, so it won\'t break onto the next line even if it\'s really long, it just keeps scrolling and scrolling and scrolling...\'\' }</div>' }</div>
            <div>{ '    <div>{ \'};\' }</div>' }</div>
            <div>{ '  </code>' }</div>
            <div>{ '</div>' }</div>
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
            <div>{ '<div class="json-view-object">' }</div>
            <div>{ '  <div>' }</div>
            <div>{ '    <span class="json-view-key">_id:</span>' }</div>
            <div>{ '    <span>ObjectID(\'2340808293cc4750a928x223\')</span>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div>' }</div>
            <div>{ '    <span class="json-view-key">address:</span>' }</div>
            <div>{ '    <span>Object</span>' }</div>
            <div>{ '    <div class="json-view-object">' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <span class="json-view-key">street:</span>' }</div>
            <div>{ '        <span>"1839 Nostrand Ave"</span>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <span class="json-view-key">zip:</span>' }</div>
            <div>{ '        <span>"11226"</span>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div>' }</div>
            <div>{ '    <span class="json-view-key">borough:</span>' }</div>
            <div>{ '    <span>"Brooklyn"</span>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div>' }</div>
            <div>{ '    <span class="json-view-key">cuisine:</span>' }</div>
            <div>{ '    <span>"Ice Cream, Gelato, Yogurt, Ices"</span>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div>' }</div>
            <div>{ '    <span class="json-view-key">grades:</span>' }</div>
            <div>{ '    <span>Array[4]</span>' }</div>
            <div>{ '    <div class="json-view-object">' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <span class="json-view-key">0:</span>' }</div>
            <div>{ '        <span>"92"</span>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <span class="json-view-key">1:</span>' }</div>
            <div>{ '        <span>"79"</span>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <span class="json-view-key">2:</span>' }</div>
            <div>{ '        <span>"88"</span>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <span class="json-view-key">3:</span>' }</div>
            <div>{ '        <span>Object</span>' }</div>
            <div>{ '        <div class="json-view-object">' }</div>
            <div>{ '          <div>' }</div>
            <div>{ '            <span class="json-view-key">service:</span>' }</div>
            <div>{ '            <span>"80"</span>' }</div>
            <div>{ '          </div>' }</div>
            <div>{ '          <div>' }</div>
            <div>{ '            <span class="json-view-key">food:</span>' }</div>
            <div>{ '            <span>"95"</span>' }</div>
            <div>{ '          </div>' }</div>
            <div>{ '        </div>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div>' }</div>
            <div>{ '    <span class="json-view-key">name:</span>' }</div>
            <div>{ '    <span>"Taste The Tropics Ice Cream"</span>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '  <div>' }</div>
            <div>{ '    <span class="json-view-key">restaurant_id:</span>' }</div>
            <div>{ '    <span>"40356731"</span>' }</div>
            <div>{ '  </div>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UICode;
