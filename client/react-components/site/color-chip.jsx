const React = require('react');
const PropTypes = require('prop-types');
import Clipboard from 'clipboard';
import Button from '../Button.js';

class ColorChip extends React.Component {

  componentDidMount() {
    this.clipboard = new Clipboard(this.copyButton);
  }

  render() {
    return( 
      <div className="color-chip">
        <span className={`color-chip-swatch ${this.props.className}`}></span>
        <div className='color-chip-container'>
          <span className="color-chip-code code">{this.props.code}</span>
          <p className="color-chip-hex" id={this.props.hex} value={this.props.hex} >{this.props.hex}</p>
          <button
            className='button button-is-xs color-chip-copy-button'
            ref={(button) => { this.copyButton = button; }}
            data-clipboard-text={this.props.hex}>
            Copy to Clipboard
          </button> 
        </div>
      </div>
    );
  }
}

ColorChip.propTypes = {
  code: PropTypes.string,
  className: PropTypes.string,
  hex: PropTypes.string
};

export default ColorChip;
