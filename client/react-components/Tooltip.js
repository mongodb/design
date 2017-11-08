'use strict';

// React
const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const ReactTooltip = require('react-tooltip');

// 3rd
const _ = require('underscore');

// constants
const PLACEMENT_OPTIONS = ['top', 'right', 'bottom', 'left'];
const TRIGGER_OPTIONS = ['hover', 'click'];

class Tooltip extends Component {
    static propTypes = {
        display: PropTypes.string,
        children: PropTypes.node.isRequired,
        hide: PropTypes.bool,
        placement: PropTypes.oneOf(PLACEMENT_OPTIONS),
        content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
        className: PropTypes.string,
        triggerEvent: PropTypes.oneOf(TRIGGER_OPTIONS),
    };

    static defaultProps = {
        hide: false,
        display: 'inline-block',
        className: '',
        placement: 'top',
        triggerEvent: 'hover',
    };

    componentDidUpdate(prevProps) {
        // hide and reshow the tooltip if the content has changed while it was visible
        // hide and show need to be called during separate frames, so we resolve a promise

        const propsHaveChanged = prevProps.content !== this.props.content;

        if (this.visible && propsHaveChanged) {
            ReactTooltip.hide(this.tooltip);
            Promise.resolve().then(() => { ReactTooltip.show(this.tooltip); });
        }
    }

    visible = false;

    ref = el => { this.tooltip = el; };

    render() {
        const {
            hide,
            placement,
            className,
            content,
            children,
            display,
            triggerEvent,
        } = this.props;

        const id = _.uniqueId('tooltip_');

        const targetProps = {
            style: { display },
            'data-for': id,
            'data-place': placement,
            'data-class': className,
            ref: this.ref,
        };

        const tooltipProps = {
            effect: 'solid',
            afterShow: () => {
                this.visible = true;
            },
            afterHide: () => {
                this.visible = false;
            },
            id,
        };

        // we only set the event if it needs to override the default behavior of
        // react-tooltip (mouseenter and mouseleave)
        if (triggerEvent !== 'hover') {
            targetProps['data-event'] = triggerEvent;
        }

        // if we have a custom class, set the type to custom so that no
        // additional styling is provided by default (avoiding specificity battles)
        if (className) {
            targetProps['data-type'] = 'custom';
        }

        let tooltipChildren;
        if (typeof content === 'function') {
            // if the content is a function, set it as getContent so that it is
            // evoked the first time the tooltip is shown
            targetProps['data-tip'] = true;
            tooltipProps.getContent = content;
        } else if (React.isValidElement(content)) {
            // if the content is a react element, provide it as a child of the
            // tooltip itself, so it is rendered when shown
            targetProps['data-tip'] = true;
            tooltipChildren = content;
        } else {
            // if the content is a string, set it as a data attribute
            targetProps['data-tip'] = content;
        }

        return (
            <span>
                <span {...targetProps}>
                    {children}
                </span>
                {!hide && (
                    <ReactTooltip {...tooltipProps}>
                        {tooltipChildren}
                    </ReactTooltip>
                )}
            </span>
        );
    }
}

export default Tooltip;
