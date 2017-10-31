// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import ColorChip from '../../subcomponents/color-chip';

const UIColors = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1>Design Principles</h1>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>UI Greens</h2>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@green0"
          className="green0"
          hex="#224620"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green1"
          className="green1"
          hex="#4E8E36"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green2"
          className="green2"
          hex="#69B241"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@green3"
          className="green3"
          hex="#86C16A"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green4"
          className="green4"
          hex="#A4D18F"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green5"
          className="green5"
          hex="#C2E0B4"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@green8"
          className="green8"
          hex="#EFF6EC"
        />
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>UI Grays</h2>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@gray0"
          className="gray0"
          hex="#303434"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@gray1"
          className="gray1"
          hex="#464c4f"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@gray2"
          className="gray2"
          hex="#626668"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@gray3"
          className="gray3"
          hex="#818487"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@gray4"
          className="gray4"
          hex="#9fa1a2"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@gray5"
          className="gray5"
          hex="#babdbe"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@gray6"
          className="gray6"
          hex="#d7dbdb"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@gray7"
          className="gray7"
          hex="#e8e9e9"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@gray8"
          className="gray8"
          hex="#f5f6f7"
        />
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Alert Colors</h2>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@alertOrange"
          className="alert-orange"
          hex="#fbb129"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertBlue"
          className="alert-blue"
          hex="#43b1e5"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertRed"
          className="alert-red"
          hex="#ef4c4c"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@alertGreen"
          className="alert-green"
          hex="#69B241"
        />
      </div>
      <div className="columns small-4">
       <ColorChip
          code="@alertBlueInputDisabled"
          className="alert-blue-input-disabled"
          hex="#C9DBE4"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertBlueTextDisabled"
          className="alert-blue-text-disabled"
          hex="#5A869C"
        />
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h2>Text Colors</h2>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@linkText"
          className="link-text"
          hex="#006cbc"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@linkTextOnDark"
          className="link-text-on-dark"
          hex="#2898dd"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@warningText"
          className="warning-text"
          hex="#fbb129"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@errorText"
          className="error-text"
          hex="#ef4c4c"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@successText"
          className="success-text"
          hex="#69B241"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@mutedText"
          className="muted-text"
          hex="#9fa1a2"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@veryMutedText"
          className="very-muted-text"
          hex="#babdbe"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@subNavText"
          className="sub-nav-text"
          hex="#6f6763"
        />
      </div>
    </div>
  </div>
);

export default UIColors;
