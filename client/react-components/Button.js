'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

const Button = ({ onClick, className, label, children, name, value, disabled }) => (
    <button
        className={classNames('button', className)}
        name={name}
        onClick={onClick}
        type="button"
        aria-pressed="false"
        tabIndex={0}
        value={value}
        disabled={disabled}
    >
        {label || children}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.node,
    children: PropTypes.node,
    value: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    className: '',
    name: null,
    value: undefined,
    disabled: false,
    label: null,
    children: null,
};

module.exports = Button;
