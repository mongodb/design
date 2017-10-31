'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Component } = React;

const ALERT_LEVELS = ['success', 'warning', 'danger', 'info'];

class Alert extends Component {
    static propTypes = {
        level: PropTypes.oneOf(ALERT_LEVELS).isRequired,
        dismissible: PropTypes.bool,
        onDismiss: PropTypes.func,
        children: PropTypes.node
    };

    static defaultProps = {
        level: 'info',
        dismissible: false,
        onDismiss: () => undefined,
        children: undefined,
    };

    render() {
        const { level, dismissible, onDismiss, children } = this.props;
        return (
            <div className={`bem-alert bem-alert-is-${level}`}>
                {dismissible && (
                    <button type="button" className="bem-alert-close-button" aria-label="Close" onClick={onDismiss}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                )}
                <div>
                    {children}
                </div>
            </div>
        );
    }
}

export default Alert;