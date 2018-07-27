'use strict';

// 3rd
const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const classNames = require('classnames');

class SplashView extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isLoading: false,
    hasHeadline: true,
    hasDescription: true,
    hasPrimaryCTA: true,
    hasSecondaryCTA: true,
    hasLink: true,
    hasGraphic: true
  };

  render() {
    const {
      isLoading,
      hasHeadline,
      hasDescription,
      hasPrimaryCTA,
      hasSecondaryCTA,
      hasLink,
      hasGraphic
    } = this.props;

    return (
      <div className="empty-view">
        <div className={classNames('empty-view-graphic',
          {'u-display-none': !hasGraphic}
        )}></div>

        <div className="empty-view-text">
          <h1 className={classNames('empty-view-text-is-heading',
            {'u-display-none': !hasHeadline}
          )}>A positive and actionable headline</h1>
          <h3 className={classNames('empty-view-text-is-description',
            {'u-display-none': !hasDescription}
          )}>Language should be direct in setting communicating need of the feature as well as setting appropriate expectation for using the feature.</h3>
        </div>

        <div className="empty-view-cta">
          <button className={classNames('button button-is-primary button-is-large',
            {'u-display-none': !hasPrimaryCTA}
          )}>Do something</button>
          <button className={classNames('button button-is-info button-is-large',
            {'u-display-none': !hasSecondaryCTA}
          )}>Do something else</button>
        </div>

        <p className={classNames('empty-view-link',
          {'u-display-none': !hasLink}
        )}><a href="#" target="_blank">More guidelines on creating zero state can be found here.</a></p>

        <div className={classNames('empty-view-loading',
          {'u-display-none': !isLoading}
        )}></div>
      </div>
    );

  }
}

export default SplashView;
