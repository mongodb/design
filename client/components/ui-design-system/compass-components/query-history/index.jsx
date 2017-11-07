// ==================================================
//  DesignSystem - Query History Cards
// ==================================================

import React from 'react';
import '../../../../bem-components/root.less';
import Code from '../../../../site-components/code';

const UIQueryHistoryCard = () => (
  <div className="wrap button-ui">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Query History</h1>
      </div>
    </div>

    {/* Query Cards */}
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Query Cards</h2>
        <p>In Compass, users can view queries that they have either favorited or previously used in the following cards. 
        The cards separate each query option <i>(e.g. Filter or Limit)</i> into separate code snippets.
        We use <a href="https://github.com/mongodb-js/codemirror-mongodb">codemirror</a> to pretty print and color code the queries to heighten legibility.</p> 
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-6">
        <div className="query-history-recent-query">
          <div className="button-group">
            <button title="Favorite Query" className="button button-is-small query-history-button query-history-button-favorite">
              <span aria-hidden="true" className="fa fa-star-o"></span>
            </button>
            <button title="Copy Query to Clipboard" className="button button-is-small query-history-button query-history-button-copy">
              <span aria-hidden="true" className="fa fa-clipboard"></span>            
            </button>
            <button title="Delete Query from Favorites List" className="button button-is-small query-history-button">
              <span aria-hidden="true" className="fa fa-trash"></span>            
            </button>
          </div>
          <div className="query-history-card">
            <div className="query-history-card-title">
              Tue Sep 05 2017 13:15:32 GMT-0400 (EDT)
            </div>
            <ul>
              <li>
                <h className="query-history-card-label">filter</h>
                <pre>
                  <code className="js hljs javascript"> 
                    <div>{ '{' }</div>
                    <div>{ '  field_1:' }<span className="hljs-string">'value'</span></div>
                    <div>{ '  field_2:' }<span className="hljs-string">'value'</span></div>
                    <div>{ '}' }</div>
                  </code>
                </pre>
              </li>
              <li>
                <h className="query-history-card-label">sort</h>
                <pre>
                  <code className="js hljs javascript">
                    <div>{ '{' }</div>
                    <div>{ '  field_1: ' }<span className="hljs-number">-1</span></div>
                    <div>{ '}' }</div>
                  </code>
                </pre>
              </li>
              <li>
                <h className="query-history-card-label">limit</h>
                <pre>
                  <code className="js hljs javascript">
                    <span className="hljs-number">
                      100
                    </span>
                  </code>
                </pre>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="columns small-6">
        <div className="query-history-favorite-query">
          <div className="button-group">
            <button title="Copy Query to Clipboard" className="button button-is-small query-history-button query-history-button-copy">
              <span aria-hidden="true" className="fa fa-clipboard"></span>            
            </button>
            <button title="Delete Query from Favorites List" className="button button-is-small query-history-button">
              <span aria-hidden="true" className="fa fa-trash"></span>            
            </button>
          </div>
          <div className="query-history-card">
            <div className="query-history-card-title">
              Favorite Query Name
            </div>
            <ul>
              <li>
                <h className="query-history-card-label">filter</h>
                <pre>
                  <code className="js hljs javascript"> 
                    <div>{ '{' }</div>
                    <div>{ '  field_1: {' }</div>
                    <div>{ '    $'}<b>in:</b> [</div>
                    <div>{ '      '}<span className="hljs-string">'value_1'</span>,</div>
                    <div>{ '      '}<span className="hljs-string">'value_2'</span>,</div>
                    <div>{ '      '}<span className="hljs-string">'value_3'</span>,</div>
                    <div>{ '      '}<span className="hljs-string">'value_4'</span>,</div>
                    <div>{ '    ]'}</div>
                    <div>{ '  }'}</div>
                    <div>{ '}' }</div>
                  </code>
                </pre>
              </li>
              <li>
                <h className="query-history-card-label">limit</h>
                <pre>
                  <code className="js hljs javascript">
                    <span className="hljs-number">
                      25
                    </span>
                  </code>
                </pre>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="query-history-favorite-query">
<div class="button-group-button">
  <button class="button button-is-small query-history-button query-history-button-copy">
    <span aria-hidden="true" class="fa fa-clipboard"></span>
  </button>
  <button class="button button-is-small query-history-button">
    <span aria-hidden="true" class="fa fa-trashcan"></span>
  </button>
</div">
  <div class="query-history-card">
    <div class="query-history-card-title"> Favorite Query Name</div>
    <ul>
      <li>
        <h class="query-history-card-label">Query Option Label</h>
        <pre>
          <code> Insert Codemirror Snippet </code>
        </pre>
    </ul>
  </div>
</div>`}> 
        </Code>
      </div>
    </div>

    {/* Zero States */}
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Zero States</h2>
        <p>These simple zero state cards notify users to favorite or run a query.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-6">
        <div className="query-history-zero-state">
          <div className="query-history-zero-state-title">Run a query to see it saved here!</div>
        </div>
      </div>
      <div className="columns small-6">
        <div className="query-history-zero-state">
          <div className="query-history-zero-state-title">Favorite a query to see it saved here!</div>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <Code
          language='language-html'
          text={`<div class="query-history-zero-state">
  <div class="query-history-zero-state-title"> Insert Text Here </div>
</div>`}> 
        </Code>
      </div>
    </div>
  </div>
);

export default UIQueryHistoryCard;
