'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const TAB_TYPES = ['active', 'beta', 'moreToggle', 'regular']; 

function SectionHeaderTab(props) {
    const {
        children,
        href,
        type,
        linkText,
    } = props;

    return (
        <li
            className={classNames({
              'section-header-tab section-header-tab-is-active': type=='active'
            }, {
              'section-header-tab': type=='regular',
            }, {
              'section-header-more': type=='moreToggle',
            },
              {'section-header-tab section-header-tab-is-beta': type=='beta' 
            })}
        >
            {children || (
                <a 
                    href={href}
                    className={type!='moreToggle' ? 'section-header-tab-link' : 'section-header-more dropdown-toggle'}
                > 
                    {linkText}
                    {type=='moreToggle' ? <i className="fa fa-caret-down section-header-more-icon u-ml-1"></i> : ''}
                </a>
            )}
        </li>
    );
}

SectionHeaderTab.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(TAB_TYPES).isRequired,
    href: PropTypes.string,
    linkText: PropTypes.string,
};

SectionHeaderTab.defaultProps = {
    children: null,
    type: 'regular',
    href: '',
    linkText: '',
};

function SectionHeaderRRTab(props) {
    const {
        href,
        exact,
        linkText,
    } = props;

    return (
        <Route
            path={href}
            exact={exact}
        >
            {({ match }) => (
                <SectionHeaderTab
                    {...props}
                >
                    <Link to={href} className="section-header-tab-link">
                        {linkText}
                    </Link>
                </SectionHeaderTab>
            )}
        </Route>
    );
}

SectionHeaderRRTab.propTypes = {
    exact: PropTypes.bool,
    href: PropTypes.string,
    linkText: PropTypes.string.isRequired,
};

SectionHeaderRRTab.defaultProps = {
    exact: false,
    href: '',
};

function SectionHeaderTabs({ children }) {
    return (
        <ul className="section-header-tabs">
            {children}
        </ul>
    );
}

SectionHeaderTabs.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf([SectionHeaderTab, SectionHeaderRRTab]),
    })).isRequired,
};

SectionHeaderTabs.Tab = SectionHeaderTab;
SectionHeaderTabs.RRTab = SectionHeaderRRTab;

module.exports = SectionHeaderTabs;
