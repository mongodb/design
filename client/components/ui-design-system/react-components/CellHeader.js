'use strict';

const _ = require('underscore');
const React = require('react');
const { PureComponent } = React;
const PropTypes = require('prop-types');
const classNames = require('classnames');

class CellHeader extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        onClick: PropTypes.func,
        sortable: PropTypes.bool,
        sortOrder: PropTypes.oneOf([
            'ascending',
            'descending'
        ]),
    };

    static defaultProps = {
        children: null,
        className: '',
        sortable: false,
        sortOrder: undefined,
        onClick: _.noop,
    };

    render() {
        const {
            sortable,
            children,
            sortOrder,
            onClick,
            className
        } = this.props;

        return (
            <th className={className}>
                {sortable ? (
                    <a
                        role="button"
                        tabIndex={0}
                        onClick={onClick}
                        className={classNames('table-header-is-sortable', {
                            'table-header-is-descending': sortOrder === 'descending',
                            'table-header-is-ascending': sortOrder === 'ascending'
                        })}
                    >
                        {children}
                    </a>
                ) : (
                    children
                )}
            </th>
        );
    }
}

module.exports = CellHeader;