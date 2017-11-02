// ==================================================
//  DesignSystem - DSReactTables
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Table from '../../react-components/Table.js';

var tableData = [
    {
        name: 'free-shard-0',
        status: '1 min ago',
        version: '3.4.4',
        actions: ''
    },
    {
        name: 'free-shard-0',
        status: '1 min ago',
        version: '3.4.4',
        actions: ''
    },
    {
        name: 'free-shard-0',
        status: '1 min ago',
        version: '3.4.4',
        actions: ''
    }
];

class UITablesReact extends React.Component {
  codeSnippetHandler() {
  return `<Table 
    data={tableData} 
    tableClassName={"table"}
    headerRowClassName={"table-header"}
    headerCellClassName={"table-row"}
    rowClassName={() => 'plain-table-row plain-table-row-is-tall'}
>
    <Table.Column
        header="Name"
        accessor="name"
    />
    <Table.Column
        header="Status"
        accessor="status"
    />
    <Table.Column
        header="Version"
        accessor="version"
    />
    <Table.Column
        header="Actions"
        accessor="actions"
    />
</Table>`
  }

   render () {
    return(
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1>Tables</h1>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <ul className="tabs">
              <li className="tabs-tab">
                <Link to='/ui-design-system/components/tables' className="tabs-tab-link">CSS</Link>
              </li>
              <li className="tabs-tab tabs-tab-is-active">
                <Link to='/ui-design-system/components/tables/react-tables' className="tabs-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row u-mb-3">
          <div className="columns small-12">
            <h2>Standard Table</h2>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>Light Theme</h3>
            <p>Use on a light background.</p>
          </div>
        </div>

        <Table 
            data={tableData} 
            tableClassName={"table"}
            headerRowClassName={"table-header"}
            headerCellClassName={"table-row"}
            rowClassName={() => 'plain-table-row plain-table-row-is-tall'}
        >
            <Table.Column
                header="Name"
                accessor="name"
            />
            <Table.Column
                header="Status"
                accessor="status"
            />
            <Table.Column
                header="Version"
                accessor="version"
            />
            <Table.Column
                header="Actions"
                accessor="actions"
            />
        </Table>

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
}}

export default UITablesReact;
