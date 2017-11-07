'use strict';

const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const Column = require('./Column');
const CellHeader = require('./CellHeader');
const Cell = require('./Cell');
const Empty = require('./Empty');

function normalizeAccessor(accessor) {
    let accessorFn = accessor;

    if (typeof accessor === 'string') {
        if (accessor.includes('.')) {
            const accessorArr = accessor.split('.');
            accessorFn = (data) => {
                return accessorArr.reduce((obj, access) => {
                    return obj[access];
                }, data);
            };
        } else {
            accessorFn = (data) => data[accessor];
        }
    }

    return accessorFn;
}

class Table extends Component {
    static Column = Column;
    static CellHeader = CellHeader;
    static Cell = Cell;
    static Empty = Empty;

    static propTypes = {
        children: PropTypes.node.isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        sortOverride: PropTypes.func,
        tableClassName: PropTypes.string,
        headerRowClassName: PropTypes.string,
        rowClassName: PropTypes.func,
        empty: PropTypes.node,
    };

    static defaultProps = {
        sortOverride: null,
        tableClassName: 'table table-new table-has-no-margin',
        headerRowClassName: '',
        rowClassName: () => '',
        empty: null,
    };

    state = {
        sortColumnId: null,
        sortValueAccessor: null,
        sortOrder: null,
    };

    render() {
        const {
            children,
            data,
            sortOverride,
            tableClassName,
            headerRowClassName,
            rowClassName,
            empty,
        } = this.props;
        const {
            sortColumnId,
            sortValueAccessor,
            sortOrder,
        } = this.state;

        const columns = React.Children.toArray(children).reduce((acc, child) => {
            if (!React.isValidElement(child)) {
                return acc;
            }

            acc.push(
                {
                    ...child.props,
                    // Normalize the accessor (as it can be either a string or a function)
                    // so that when we iterate over the array of data we have a consistent
                    // method to access the data, and don't have to switch logic depending
                    // on if it's a string or a function.
                    accessor: normalizeAccessor(child.props.accessor),

                    // We're caching the originalAccessor as well so we can use it as an
                    // unique way to identify a column. For example when a user sorts
                    // a column we need to track which column is being sorted.
                    // Rather than add an additional prop of `id` we're using the original
                    // accessor value as our way to uniquely identify a column.
                    originalAccessor: child.props.accessor,
                }
            );
            return acc;
        }, []);

        let sortedData = data;
        if (sortColumnId) {
            sortedData = data.sort((a, b) => {
                let sort = sortValueAccessor(a) < sortValueAccessor(b) ? -1 : 1;
                if (sortOrder === 'ascending') {
                    sort = -sort;
                }
                return sort;
            });
        }

        const emptyProps = {};
        if (typeof empty === 'string') {
            emptyProps.text = empty;
        } else if (empty != null) {
            emptyProps.children = empty;
        }

        return (
            <div>
                <table className={tableClassName}>
                    <thead>
                        <tr className={headerRowClassName}>
                            {columns.map((column, columnIndex) => {
                                if (typeof column.header === 'object') {
                                    return column.header;
                                }

                                const columnProps = {
                                    className: column.className,
                                    sortable: column.sortable,
                                    sortOrder: sortColumnId === column.originalAccessor ?
                                        sortOrder :
                                        null,
                                    onClick: () => {
                                        if (sortOverride) {
                                            sortOverride(column);
                                        } else {
                                            this.setState({
                                                sortColumnId: column.originalAccessor,
                                                sortValueAccessor: column.accessor,
                                                sortOrder: sortOrder === 'descending' ?
                                                    'ascending' :
                                                    'descending',
                                            });
                                        }
                                    },
                                };

                                if (typeof column.header === 'function') {
                                    return column.header(columnProps);
                                }

                                return (
                                    <CellHeader
                                        {...columnProps}
                                        key={column.header || columnIndex}
                                    >
                                        {column.header}
                                    </CellHeader>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((datum, rowIndex) => {
                            /* eslint-disable react/no-array-index-key */
                            return (
                                <tr key={rowIndex} className={rowClassName(datum)}>
                                    {columns.map((column, index) => {
                                        const value = column.accessor(datum);

                                        if (typeof column.cell === 'function') {
                                            return column.cell({
                                                column,
                                                data: datum,
                                                value,
                                            });
                                        }

                                        return (
                                            <Cell key={index}>{value}</Cell>
                                        );
                                    })}
                                </tr>
                            );
                            /* eslint-enable react/no-array-index-key */
                        })}
                    </tbody>
                </table>
                {(data.length === 0 && empty) && <Table.Empty {...emptyProps} />}
            </div>
        );
    }
}

export default Table;