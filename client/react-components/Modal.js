'use strict';

const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const classNames = require('classnames');

const KeyCodes = {
    Escape: 27,
};

const ModalFooter = ({ children }) => (
    <footer className="view-modal-footer">
        <hr />
        <div className="view-modal-actions">
            <div />
            <div>{children}</div>
        </div>
    </footer>
);

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired
};

class Modal extends Component {
    static ModalFooter = ModalFooter;

    static propTypes = {
        open: PropTypes.bool,
        title: PropTypes.string,
        children: PropTypes.node,
        size: PropTypes.oneOf([
            'xs',
            'small',
            'medium',
            'large',
            'xlarge',
        ]),
        hideClose: PropTypes.bool,
        onClose: PropTypes.func,
        onBack: PropTypes.func
    };

    static defaultProps = {
        open: true,
        children: undefined,
        title: undefined,
        size: undefined,
        hideClose: false,
        onClose: () => {},
        onBack: undefined
    };

    componentDidMount() {
        if (this.props.open) {
            this.addGlobalHandlers();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
            if (this.props.open) {
                this.addGlobalHandlers();
            } else {
                this.removeGlobalHandlers();
            }
        }
    }

    componentWillUnmount() {
        this.removeGlobalHandlers();
    }

    onDocumentClick = (e) => {
        if (!this.modalContent) {
            return;
        }

        // Don't handle this global click if the click originates from within
        // the modal content element itself.
        if (this.modalContent.contains(e.target)) {
            return;
        }

        this.props.onClose();
    };

    onDocumentKeydown = (e) => {
        if (this.props.open && e.keyCode === KeyCodes.Escape) {
            this.props.onClose();
        }
    };

    addGlobalHandlers() {
        // Create a global event handler. This is used to listen for when a user clicks
        // anywhere on the page, so we can close the dropdown if it is open.
        // Allows for better UX.
        document.addEventListener('click', this.onDocumentClick, true);

        document.addEventListener('keydown', this.onDocumentKeydown, true);
    }

    removeGlobalHandlers() {
        document.removeEventListener('click', this.onDocumentClick, true);
        document.removeEventListener('keydown', this.onDocumentKeydown, true);
    }

    render() {
        const {
            open,
            title,
            children,
            hideClose,
            onClose,
            onBack,
            size
        } = this.props;

        if (!open) {
            return null;
        }

        return (
            <div>
                <div className="view-modal-overlay" />
                <div className="view-modal-layout">
                    <div
                        ref={r => { this.modalContent = r; }}
                        tabIndex="-1"
                        className={classNames('view-modal-content', {
                            [`view-modal-content-is-${size}`]: size,
                        })}
                    >
                        {hideClose || (
                            <button
                                type="button"
                                name="close"
                                className="view-modal-close close"
                                onClick={onClose}
                                data-dismiss="modal"
                                aria-hidden="true"
                            >
                                ×
                            </button>
                        )}
                        {title && (
                            <header className="view-modal-header">
                                {onBack && (
                                    <a className="view-modal-back view-modal-back-is-high" tabIndex="0" role="button" onClick={onBack}>
                                        <i className="mms-icon-back" /> Back
                                    </a>
                                )}
                                <h3 className="view-modal-header-title">{title}</h3>
                                <hr />
                            </header>
                        )}
                        <div className="view-modal-body">{children}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
