'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

function ButtonGroup(props) {
    const {
        options,
        buttonClassName,
        value: selectedValue,
        onChange,
    } = props;

    return (
        <span>
            <div
                className="button-group"
            >
                {
                    options.map((option) => {
                        const {
                            label,
                            iconClassName,
                            value,
                        } = option;
                        return (
                            <button
                                key={value}
                                onClick={() => onChange(value)}
                                className={classNames('button', 'button-group-button', buttonClassName, {
                                    'button-is-active': value === selectedValue
                                })}
                            >
                                {iconClassName && <i
                                    className={classNames(iconClassName, 'button-left-icon')}
                                    aria-hidden />}
                                {label}
                            </button>
                        );
                    })
                }
            </div>
        </span>
    );
}

ButtonGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string.isRequired,
        iconClassName: PropTypes.string,
    })).isRequired,
    buttonClassName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

ButtonGroup.defaultProps = {
    options: [],
    buttonClassName: '',
};

module.exports = ButtonGroup;
