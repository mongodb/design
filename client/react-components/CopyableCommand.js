'use strict';

// 3rd
const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const Clipboard = require('clipboard');
const classNames = require('classnames');

// Components
const Tooltip = require('./Tooltip.js').default;

class CopyableCommand extends Component {
  static propTypes = {
    copyableText: PropTypes.string.isRequired,
    otherClasses: PropTypes.string,
    children: PropTypes.node,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    otherClasses: '',
    children: null,
    fullWidth: false
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
      fullWidth,
    } = this.props;

    const {
      tooltipText
    } = this.state;

    return (
      <div className={classNames('copy-command copy-command-single',
        {'copy-command-is-full-width': fullWidth}
      )}
      >
        <div className="copy-command-single-container">
          <code className={classNames('copy-command-text')}
          >
            {this.props.children || copyableText}
          </code>
        </div>
        <div className="copy-command-button-container">
          <button
            ref={(button) => { this.copyButton = button; }}
            className="button copy-command-button"
            data-clipboard-mixin
            data-clipboard-text={copyableText}
            onMouseLeave={this.onMouseLeave}
          >
            <Tooltip content={tooltipText}>
              <i className="fa fa-files-o" /> Copy
            </Tooltip>
          </button>
        </div>
      </div>
    );

  }
}

export default CopyableCommand;
