'use strict';

const React = require('react');
const { PureComponent } = React;
const PropTypes = require('prop-types');

class Cell extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    static defaultProps = {
        children: null,
        className: '',
    };

    render() {
        const { children, className } = this.props;
        return (
            <td className={className}>
                {children}
            </td>
        );
    }
}

module.exports = Cell;