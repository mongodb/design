'use strict';

const React = require('react');
const PropTypes = require('prop-types');

function SplashViewGraphic(props) {
    const {
        fallback,
        isError,
        isLoading,
    } = props;

    if (isError) {
        return (
            <div className="empty-view-graphic">
                <i className="fa fa-exclamation-triangle empty-view-icon" />
                <svg className="empty-view-shadow empty-view-shadow-is-error">
                    <ellipse cx="50%" cy="50%" rx="50%" ry="50%" />
                </svg>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="empty-view-graphic">
                <i className="mms-icon-continuous empty-view-icon empty-view-icon-is-rotating" />
                <svg className="empty-view-shadow">
                    <ellipse cx="50%" cy="50%" rx="50%" ry="50%" />
                </svg>
            </div>
        );
    }

    return fallback;
}

SplashViewGraphic.propTypes = {
    fallback: PropTypes.node,
    isError: PropTypes.bool,
    isLoading: PropTypes.bool,
};

SplashViewGraphic.defaultProps = {
    fallback: null,
    isError: false,
    isLoading: false,
};

export default SplashViewGraphic;
