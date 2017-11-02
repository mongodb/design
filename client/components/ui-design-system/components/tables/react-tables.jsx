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
          status: '5 min ago',
          version: '5.4.4',
          actions: this.renderButtons()
        }
      ]
    );
  }

  returnTablePropData() {
    return (
      [
        {
          propName: <p className="code">data</p>,
          type: <p><b>Object Array, Required</b></p>,
          description: <p>The data gets displayed by the table</p>,
        },
        {
          propName: <p className="code">sortOverride</p>,
          type: <p><b>Function</b></p>,
          description: 
            <div>
              <p>Default = <b>null</b></p>
              <p>Click event handler for the column header.</p>
              <p>If the column component is sortable, sortOverride will replace the default <br /> function, which is to toggle the rows by ascending and descending order.</p>
            </div>,
        },
        {
          propName: <p className="code">tableClassName</p>,
          type: <p><b>String</b></p>,
          description: 
            <div>
              <p>Default = <b>'table table-new table-has-no-margin'</b></p>
              <p>Overrides the default CSS class(s) of the table parent</p>
            </div>,
        },
        {
          propName: <p className="code">headerRowClassName</p>,
          type: <p><b>String</b></p>,
          description: 
            <p>CSS class(es) passed to the header row</p>
        },
        {
          propName: <p className="code">rowClassName</p>,
          type: <p><b>Function</b></p>,
          description: 
            <p>Function that passes CSS class(es) to body rows</p>
        },
      ]
    );
  }


  returnTablePaginatedPropData() {
    return (
      [
        {
          propName: <p className="code">Table Props</p>,
          type: <p><b>All</b></p>,
          description: <p>The pagination component takes in all props from the table component</p>,
        },
        {
          propName: <p className="code">pageSize</p>,
          type: <p><b>number</b></p>,
          description: 
            <p>Defines how many rows can appear on a page</p>,
        },
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
  data={ Object Array } 
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

        <div className="row">
          <div className="columns small-12">
            <h3>Available Props</h3>
          </div>
        </div>

        <div className="row u-mb-3">
          <div className="columns small-12">
            <h4 className="u-mb-2">Table Props</h4>
            <Table 
              data={this.returnTablePropData()} 
              tableClassName={"table"}
              headerRowClassName={"table-header"}
              headerCellClassName={"table-header"}
              rowClassName={() => "table-row"}
            >
              <Table.Column
                header="Prop Name"
                accessor="propName"
                className="table-header"
                cell = {(props) => (
                  <Table.Cell className="table-column table-cell" key="propName">
                    {props.value}
                  </Table.Cell>
                )}
              />
              <Table.Column
                header="Type"
                accessor="type"
                className="table-header"
                cell = {(props) => (
                  <Table.Cell className="table-column table-cell" key="type">
                    {props.value}
                  </Table.Cell>
                )}
              />
              <Table.Column
                header="Description"
                accessor="description"
                className="table-header"
                cell = {(props) => (
                  <Table.Cell className="table-column table-cell" key="description">
                    {props.value}
                  </Table.Cell>
                )}
              />
            </Table>
          </div>
        </div>

        <div className="row">
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
  data={ Object Array }
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

        <div className="row">
          <div className="columns small-12">
            <h3>Available Props</h3>
            <Table 
              data={this.returnTablePaginatedPropData()} 
              tableClassName={"table"}
              headerRowClassName={"table-header"}
              headerCellClassName={"table-header"}
              rowClassName={() => "table-row"}
            >
              <Table.Column
                header="Prop Name"
                accessor="propName"
                className="table-header"
                cell = {(props) => (
                  <Table.Cell className="table-column table-cell" key="propName">
                    {props.value}
                  </Table.Cell>
                )}
              />
              <Table.Column
                header="Type"
                accessor="type"
                className="table-header"
                cell = {(props) => (
                  <Table.Cell className="table-column table-cell" key="type">
                    {props.value}
                  </Table.Cell>
                )}
              />
              <Table.Column
                header="Description"
                accessor="description"
                className="table-header"
                cell = {(props) => (
                  <Table.Cell className="table-column table-cell" key="description">
                    {props.value}
                  </Table.Cell>
                )}
              />
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default UITablesReact;
