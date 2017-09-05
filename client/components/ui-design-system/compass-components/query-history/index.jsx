// ==================================================
//  DesignSystem - Query History Cards
// ==================================================

import React from 'react';
import '../../../../styling/root.less';

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
        <p>Insert some details about cards.</p>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-6">
        <div className="query-history-recent-query">
          <div className="btn-group">
            <button title="Favorite Query" className="button button-is-small query-history-button query-history-button-favorite">
              X
            </button>
            <button title="Copy Query to Clipboard" className="button button-is-small query-history-button query-history-button-copy">
              X
            </button>
            <button title="Delete Query from Favorites List" className="button button-is-small query-history-button">
              X
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
                    &#123;
                    <p className="indented-line">field_1:
                      <span className="hljs-string">'value'</span>
                      ,
                    </p>
                    <p className="indented-line">field_2: 
                      <span className="hljs-string">'value'</span>
                    </p>
                    &#125;
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
      <div className="columns small-6">
        <div className="query-history-favorite-query">
          <div className="btn-group">
            <button title="Copy Query to Clipboard" className="button button-is-small query-history-button query-history-button-copy">
              X
            </button>
            <button title="Delete Query from Favorites List" className="button button-is-small query-history-button">
              X
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
                    &#123;
                    <p className="indented-line">field_1:
                      <span className="hljs-string">'value'</span>
                      ,
                    </p>
                    <p className="indented-line">field_2: 
                      <span className="hljs-string">'value'</span>
                    </p>
                    &#125;
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="query-history-card">...</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    {/* Zero States */}
    <div className="row u-mb-2">
      <div className="columns small-12">
        <h2>Zero States</h2>
        <p>Insert some details about cards.</p>
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
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="query-history-zero-state">...</div>' }</div>
          </code>
        </pre>
      </div>
    </div>
  </div>
);

export default UIQueryHistoryCard;
