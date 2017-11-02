// ==================================================
//  DesignSystem - DSReactLists
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import TablePaginated from '../../react-components/TablePaginated.js';
import Table from '../../react-components/Table.js';

var tableData = [
    {
        created: '2016-01-27T21:33:41Z',
        multiFactorAuth: true,
        roles: ['MEMBER'],
        username: 'big.bird',
    },
    {
        created: '2016-01-28T13:35:52Z',
        multiFactorAuth: true,
        roles: ['GROUP_OWNER'],
        username: 'oscar.grouch',
    },
    {
        created: '2016-02-09T21:27:21Z',
        multiFactorAuth: false,
        roles: ['GROUP_OWNER'],
        username: 'bert',
    },
    {
        created: '2016-08-02T15:14:39Z',
        multiFactorAuth: true,
        roles: ['GROUP_OWNER'],
        username: 'ernie',
    },
];

class UIListsReact extends React.Component {
  codeSnippetHandler() {
  return `<TablePaginated
  data={tableData}
  pageSize={2}
>
  <Table.Column
    header="Username"
    accessor="username"
  />
</TablePaginated>`
  }

 render() {
    return (
      <div className="wrap">
          <div className="row u-mb-3">
            <div className="columns small-12">
              <h1>Lists</h1>
            </div>
          </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <ul className="tabs">
              <li className="tabs-tab">
                <Link to='/ui-design-system/components/lists' className="tabs-tab-link">CSS</Link>
              </li>
              <li className="tabs-tab tabs-tab-is-active">
                <Link to='/ui-design-system/components/lists/react-lists' className="tabs-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>

         <div className="row u-mb-2">
          <div className="columns small-12">
            <h2>Pagination States</h2>
          </div>
        </div>
 
        <TablePaginated
          data={tableData}
          pageSize={2}
        >
          <Table.Column
            header="Username"
            accessor="username"
          />
        </TablePaginated>

        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-jsx'
              text={this.codeSnippetHandler()}
            >
            </Code>
          </div>
        </div>
    </div>
    );
  }
}

export default UIListsReact;
