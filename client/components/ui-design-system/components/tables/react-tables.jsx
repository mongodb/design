// ==================================================
//  DesignSystem - DSReactTables
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Table from '../../react-components/Table.js';
import TablePaginated from '../../react-components/TablePaginated.js';

class UITablesReact extends React.Component {

  renderButtons() {
    return (
      <div>
        <button className="button table-button button-is-xs u-mr-1">data</button>
        <button className="button table-button button-is-xs u-mr-1">metrics</button>
        <button className="button table-button button-is-xs">modify</button>
      </div>
    );
  }

  returnData() {
    return (
      [
        {
          name: <a className="link">free-shard-0</a>,
          status: '1 min ago',
          version: '3.4.4',
          actions: this.renderButtons()
        },
        {
          name: <a className="link">free-shard-1</a>,
          status: '3 min ago',
          version: '3.4.4',
          actions: this.renderButtons()
        },
        {
          name: <a className="link">free-shard-2</a>,
          status: '1 min ago',
          version: '5.4.4',
          actions: this.renderButtons()
        }
      ]
    );
  }

   render () {
    return(
      <div className="wrap">
        <div className="row">
          <div className="columns small-12">
            <h1>Tables</h1>
          </div>
        </div>

        <div className="row">
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

        <div className="row">
          <div className="columns small-12">
            <h2>Standard Table</h2>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Light Theme</h3>
            <p>Use on a light background.</p>
          </div>
        </div>

        <Table 
          data={this.returnData()} 
          tableClassName={"table"}
          headerRowClassName={"table-header"}
          headerCellClassName={"table-row"}
          rowClassName={() => "table-row"}
        >
          <Table.Column
            header="Name"
            accessor="name"
            className="table-column table-cell"
            cell = {(props) => (
              <Table.Cell className="table-column table-cell" key="name">
                {props.value}
              </Table.Cell>
            )}
          />
          <Table.Column
            header="Status"
            accessor="status"
            cell = {(props) => (
              <Table.Cell className="table-column table-cell" key="status">
                {props.value}
              </Table.Cell>
            )}
          />
          <Table.Column
            header="Version"
            accessor="version"
            cell = {(props) => (
              <Table.Cell className="table-column table-cell" key="version">
                {props.value}
              </Table.Cell>
            )}
          />
          <Table.Column
            header="Actions"
            accessor="actions"
            className="table-cell-has-actions"
            cell = {(props) => (
              <Table.Cell className="table-column table-cell table-cell-has-actions" key="actions">
                {props.value}
              </Table.Cell>
            )}
          />
        </Table>

        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-jsx'
              text={`<Table 
  data={ Data Array } 
  tableClassName={"table"}
  headerRowClassName={"table-header"}
  headerCellClassName={"table-row"}
  rowClassName={() => "table-row"}
>
  <Table.Column
    header="Name"
    accessor="name"
    className="table-column table-cell"
    cell = {(props) => (
      <Table.Cell className="table-column table-cell" key="name">
        {props.value}
      </Table.Cell>
    )}
  />
  <Table.Column
    header="Status"
    accessor="status"
    cell = {(props) => (
      <Table.Cell className="table-column table-cell" key="status">
        {props.value}
      </Table.Cell>
    )}
  />
  <Table.Column
    header="Version"
    accessor="version"
    cell = {(props) => (
      <Table.Cell className="table-column table-cell" key="version">
        {props.value}
      </Table.Cell>
    )}
  />
  <Table.Column
    header="Actions"
    accessor="actions"
    className="table-cell-has-actions"
    cell = {(props) => (
      <Table.Cell className="table-column table-cell table-cell-has-actions" key="actions">
        {props.value}
      </Table.Cell>
    )}
  />
</Table>`}
            >
            </Code>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <h2>Pagination States</h2>
          </div>
        </div>
 
        <TablePaginated
          data={this.returnData()}
          pageSize={2}
        >
          <Table.Column
            header="Name"
          />
        </TablePaginated>

        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-jsx'
              text={`<TablePaginated
  data={ Data Array }
  pageSize={2}
>
  <Table.Column
    header="Username"
    accessor="username"
  />
</TablePaginated>`}
            >
            </Code>
          </div>
        </div>
      </div>
    );
  }
}

export default UITablesReact;
