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
    };

    static defaultProps = {
        name: null,
        checked: false,
        disabled: false,
        label: null,
    };

    state = {
        checked: false
    };

    componentDidMount() {
        this.state.checked = this.props.checked;
    };

    onChange = (e) => {
        this.setState({checked: e.target.checked});
        console.log(this.state.checked);
    };
    
    render() {
        const {
            checked,
        } = this.state;
        const {
            name,
            disabled,
            label,
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

// module.exports = Checkbox;
export default Checkbox;
