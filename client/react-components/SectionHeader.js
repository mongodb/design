'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

function SectionHeader(props) {
    const {
        headlineText,
        hasBottomSpacing,
        children,
    } = props;

    return (
        <h1
            className={classNames('section-header-title', {
                'section-header-title-with-bottom-spacing': hasBottomSpacing,
            })}>
            <span className={'section-header-title-text'}>
                {headlineText}
            </span>
            {children && (
                <span className="section-header-title-actions">
                    {children}
                </span>
            )}
        </h1>
    );
}

SectionHeader.propTypes = {
    headlineText: PropTypes.string.isRequired,
    hasBottomSpacing: PropTypes.bool,
    children: PropTypes.node,
};

SectionHeader.defaultProps = {
    children: null,
    hasBottomSpacing: false,
};

module.exports = SectionHeader;
