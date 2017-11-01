'use strict';

const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const classNames = require('classnames');
const Table = require('./Table').default;

class TablePaginated extends Component {
    static propTypes = {
        ...Table.propTypes,
        pageSize: PropTypes.number.isRequired,
    };

    static defaultProps = {
        ...Table.defaultProps
    };

    state = {
        columnSortMap: {},
        currentData: null,
        currentPage: 0,
        currentRange: 0,
        sortedData: this.props.data,
    };

    componentWillMount() {
        this.goToPage(0);
    }

    getFirstPage = () => {
        this.goToPage(0);
    };

    getNextPage = () => {
        this.goToPage(this.state.currentPage + 1);
    };

    getPreviousPage = () => {
        this.goToPage(this.state.currentPage - 1);
    };

    goToPage = (pageNumber) => {
        const {
            pageSize
        } = this.props;

        const {
            sortedData
        } = this.state;

        const newRange = pageNumber * pageSize;

        this.setState({
            currentData: sortedData.slice(newRange, newRange + pageSize),
            currentPage: pageNumber,
            currentRange: newRange
        });
    };

    sortData = (column) => {
        const {
            data
        } = this.props;

        const {
            columnSortMap,
        } = this.state;

        const columnId = column.originalAccessor;
        const sortOrder = columnSortMap[columnId] === 'descending' ?
            'ascending' :
            'descending';

        let sortedData = data.sort((a, b) => {
            let sort = column.accessor(a) < column.accessor(b) ? -1 : 1;
            if (sortOrder === 'ascending') {
                sort = -sort;
            }
            return sort;
        });

        this.setState({
            sortedData: sortedData,
            columnSortMap: {
                ...columnSortMap,
                [columnId]: sortOrder
            }
        }, () => {
            this.goToPage(this.state.currentPage);
        });
    };

    render() {
        const {
            children,
            pageSize,
            tableClassName,
            headerRowClassName,
            rowClassName,
        } = this.props;

        const {
            currentData,
            currentRange,
            sortedData,
        } = this.state;

        const endOfCurrentRange = ((currentRange + pageSize) < sortedData.length) ?
            currentRange + pageSize - 1 :
            sortedData.length - 1;

        const hasNextPage = sortedData.length - 1 > endOfCurrentRange;
        const hasPreviousPage = this.state.currentRange > 0;

        return (
            <div>
                <Table
                    data={currentData}
                    tableClassName={tableClassName}
                    headerRowClassName={headerRowClassName}
                    rowClassName={rowClassName}
                    sortOverride={this.sortData}
                >
                    {children}
                </Table>
                <div className="paginator">
                    <span
                        className={classNames('paginator-control paginator-control-is-left', {
                            'paginator-control-is-disabled': !hasPreviousPage
                        })}
                    >
                        <button
                            className="paginator-button paginator-button-is-previous"
                            disabled={!hasPreviousPage}
                            onClick={this.getPreviousPage}
                        >
                            <i className="fa fa-angle-left" />
                        </button>
                        Previous
                    </span>
                    <span className="paginator-text">
                        <strong>{currentRange + 1}</strong> to <strong>{endOfCurrentRange + 1}</strong> of <strong>{sortedData.length}</strong>
                    </span>
                    <span
                        className={classNames('paginator-control paginator-control-is-right', {
                            'paginator-control-is-disabled': !hasNextPage
                        })}
                    >
                        Next
                        <button
                            className="paginator-button paginator-button-is-next"
                            disabled={!hasNextPage}
                            onClick={this.getNextPage}
                        >
                            <i className="fa fa-angle-right" />
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default TablePaginated;