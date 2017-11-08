'use strict';

const React = require('react');
const { PureComponent } = React;
const PropTypes = require('prop-types');

class Empty extends PureComponent {
    static propTypes = {
        text: PropTypes.string,
        children: PropTypes.node,
    };

    static defaultProps = {
        text: undefined,
        children: undefined,
    };

    render() {
        const { children, text } = this.props;
        return (
            <div className="table-empty-container well text-center">
                {children || (
                    <em>{text}</em>
                )}
            </div>
        );
    }
}

module.exports = Empty;