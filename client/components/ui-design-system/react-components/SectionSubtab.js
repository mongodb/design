'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const TAB_TYPES = ['active', 'regular']; 

function SectionSubtab(props) {
    const {
        children,
        href,
        type,
        linkText,
    } = props;

    return (
    	<li className='section-subtabs-tab'>

    	{children || (
      	<a 
        	href={href}
        	className={classNames('section-subtabs-tab-link',
                     {'section-subtabs-tab-is-active': type=='active' }
          )}
        > 
        {linkText}
        </a>
      )}
    	</li>
    );
   }

SectionSubtab.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(TAB_TYPES).isRequired,
    href: PropTypes.string,
    linkText: PropTypes.string,
};

SectionSubtab.defaultProps = {
    children: null,
    type: 'regular',
    href: '',
    linkText: '',
};


function SectionSubtabs({ children }) {
    return (
        <ul className="section-subtabs">
            {children}
        </ul>
    );
}

SectionSubtabs.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf([SectionSubtab]),
    })).isRequired,
};

SectionSubtabs.Tab = SectionSubtab;

module.exports = SectionSubtabs;
