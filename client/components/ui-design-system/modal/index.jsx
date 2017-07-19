// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import '../../../styling/root.less';

const UIModal = () => (
  <div className="wrap">
    <div className="row u-mb-3">
        <div className="columns small-12">
            <h1>Modal</h1>
        </div>
    </div>
    <div className="row u-mb-3">
        <div className="columns small-12">
            <h2>View Modal</h2>
            <p>The View Modal is a BEM component for the viewAsModal mixin. If you need functionality out of the header or footer that is not supported by the mixin, consider placing the functionality in the body instead and using the markup below:</p>
        </div>
    </div>
    <div className="row u-mb-3">
        <div className="columns small-12">
            <div className="modal">
                <button className="modal-with-close" data-dismiss="modal" aria-hidden="true">×</button>
                <div className="modal-has-header">
                    <h1>Modal Title</h1>
                </div>
                <div className="modal-has-body">Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.</div>
                <div className="modal-has-footer">
                    <div className="modal-has-footer-with-actions">
                        <div>
                            <button className="button">Optional Secondary Action</button>
                        </div>
                        <div>
                            <button className="button u-mr-2">Cancel</button>
                            <button className="button button-is-primary">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
);

export default UIModal;
