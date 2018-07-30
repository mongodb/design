'use strict';

// 3rd
const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const classNames = require('classnames');

class SplashView extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    headline: PropTypes.string,
    description: PropTypes.string,
    primaryCTA: PropTypes.string,
    secondaryCTA: PropTypes.string,
    linkCTA: PropTypes.string,
    linkTarget: PropTypes.string,
    graphic: PropTypes.string
  };

  static defaultProps = {
    isLoading: false,
    headline: null,
    description: null,
    primaryCTA: null,
    secondaryCTA: null,
    linkCTA: null,
    linkTarget: null,
    graphic: null
  };

  render() {
    const {
      isLoading,
      headline,
      description,
      primaryCTA,
      secondaryCTA,
      linkCTA,
      linkTarget,
      graphic
    } = this.props;

    return (
      <div className="empty-view">
        <div className={classNames('empty-view-graphic',
          {'u-display-none': graphic == null}
        )}></div>

        <div className={classNames('empty-view-text',
          {'u-display-none': (headline == null && description == null)}
        )}>
          <h1 className={classNames('empty-view-text-is-heading',
            {'u-display-none': headline == null}
          )}>{headline}</h1>
          <h3 className={classNames('empty-view-text-is-description',
            {'u-display-none': description == null}
          )}>{description}</h3>
        </div>

        <div className={classNames('empty-view-cta',
          {'u-display-none': (primaryCTA == null && secondaryCTA == null)}
        )}>
          <button className={classNames('button button-is-primary button-is-large',
            {'u-display-none': primaryCTA == null}
          )}>{primaryCTA}</button>
          <button className={classNames('button button-is-info button-is-large',
            {'u-display-none': secondaryCTA == null}
          )}>{secondaryCTA}</button>
        </div>

        <p className={classNames('empty-view-link',
          {'u-display-none': linkCTA == null}
        )}><a href={linkTarget} target="_blank">{linkCTA}</a></p>

        <div className={classNames('empty-view-loading',
          {'u-display-none': !isLoading}
        )}></div>
      </div>
    );

  }
}

export default SplashView;
