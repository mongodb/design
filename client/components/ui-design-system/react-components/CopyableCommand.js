'use strict';

// 3rd
const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const Clipboard = require('clipboard');
const classNames = require('classnames');

// Components
const Tooltip = require('../react-components/Tooltip.js');

class CopyableCommand extends Component {
    static propTypes = {
        copyableText: PropTypes.string.isRequired,
        otherClasses: PropTypes.string,
        children: PropTypes.node,
        wrapText: PropTypes.bool,
    };

    static defaultProps = {
        otherClasses: '',
        children: null,
        wrapText: false
    };

    state = {
        tooltipText: 'Click to Copy'
    };

    componentDidMount() {
        this.clipboard = new Clipboard(this.copyButton);

        this.clipboard.on('success', () => {
            this.setState({ tooltipText: 'Copied!' });
        });

        this.clipboard.on('error', () => {
            this.setState({ tooltipText: 'Copying Failed!' });
        });
    }

    componentWillUnmount() {
        if (this.clipboard) this.clipboard.destroy();
    }

    onMouseLeave = () => {
        this.setState({ tooltipText: 'Click to Copy'});
    };

    render() {
        const {
            copyableText,
            otherClasses,
            wrapText
        } = this.props;

        const {
            tooltipText
        } = this.state;

        return (
            <div className={classNames('copy-command', {
                [otherClasses]: !!otherClasses
            })}
            >
                <span className={classNames('copy-command-text copy-command-text-is-full-width',
                     {'copy-command-text copy-command-text-is-wrap': wrapText }
                )}
                >
                    {this.props.children || copyableText}
                </span>
                <button
                    ref={(button) => { this.copyButton = button; }}
                    className="copy-command-button copy-command-button-is-not-uppercase"
                    data-clipboard-mixin
                    data-clipboard-text={copyableText}
                    onMouseLeave={this.onMouseLeave}
                >
                    <Tooltip content={tooltipText}>
                        <i className="fa fa-files-o" /> COPY
                    </Tooltip>
                </button>
            </div>
        );
    }
}

export default CopyableCommand;
