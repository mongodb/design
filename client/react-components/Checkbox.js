'use strict';

const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');


class Checkbox extends Component {
    
    static propTypes = {
        name: PropTypes.string,
        label: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        name: null,
        checked: false,
        disabled: false,
        label: null,
    };

    onChange = (e) => {
        this.props.onChange(e.target.checked);
    };
    
    render() {
        const {
            name,
            disabled,
            label,
            checked,
        } = this.props;

        return (
            <label className="checkbox">
                <input 
                    className="checkbox-control"
                    type="checkbox"
                    name={name}
                    onChange={this.onChange}
                    checked={checked}
                    disabled={disabled} /> {label}
            </label>
        );
    }
}

export default Checkbox;
