'use strict';

const PropTypes = require('prop-types');

function Column() {
    return null;
}

Column.propTypes = {
    header: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.func,
    ]),
    accessor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    cell: PropTypes.func,
    sortable: PropTypes.bool,
    className: PropTypes.string,
};

Column.defaultProps = {
    sortable: false,
    cell: null,
    className: '',
    accessor: () => undefined,
};

module.exports = Column;