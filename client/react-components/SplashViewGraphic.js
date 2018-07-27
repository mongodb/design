'use strict';

const React = require('react');
const PropTypes = require('prop-types');

function SplashViewGraphic(props) {

  const {
      url
  } = props;

  return (
    <div className="empty-view-graphic">
    </div>
  );
}

SplashViewGraphic.propTypes = {
    url: PropTypes.string
};

SplashViewGraphic.defaultProps = {
    url: null
};

export default SplashViewGraphic;
