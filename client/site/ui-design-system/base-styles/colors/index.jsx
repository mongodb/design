// ==================================================
// DesignSystem - DSColors
// ==================================================

import React from 'react';
import ColorChip from '../../../../react-components/site/color-chip';

const UIColors = () => (
  <div className="wrap">
    <div className="row">
      <div className="columns small-12">
        <h1>Colors</h1>
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
          hex="#0E7E3D"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green1"
          className="green1"
          hex="#168B46"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green2"
          className="green2"
          hex="#13AA52"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@green3"
          className="green3"
          hex="#1CC061"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green4"
          className="green4"
          hex="#89E5B3"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@green5"
          className="green5"
          hex="#CCFFE1"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@green8"
          className="green8"
          hex="#EFFEF6"
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
          hex="#ebebeb"
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
        <h2>Heavy Banners</h2>
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
          hex="#13AA52"
        />
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h2>Desaturated Banners</h2>
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@alertRedBannerText"
          className="alert-red-banner-text"
          hex="#AC0F0F"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertRedBannerBG"
          className="alert-red-banner-bg"
          hex="#FFF6F6"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertRedBannerBorder"
          className="alert-red-banner-border"
          hex="#F8D3D3"
        />
      </div>
    </div>

    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@alertBlueBannerText"
          className="alert-blue-banner-text"
          hex="#006CBC"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertBlueBannerBG"
          className="alert-blue-banner-bg"
          hex="#E7F5FB"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertBlueBannerBorder"
          className="alert-blue-banner-border"
          hex="#A4D2E7"
        />
      </div>
    </div>

    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@alertOrangeBannerText"
          className="alert-orange-banner-text"
          hex="#94640B"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertOrangeBannerBG"
          className="alert-orange-banner-bg"
          hex="#FFFBF5"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertOrangeBannerBorder"
          className="alert-orange-banner-border"
          hex="#F2DCB5"
        />
      </div>
    </div>

    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@alertGreenBannerText"
          className="alert-green-banner-text"
          hex="#0E7C3C"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertGreenBannerBG"
          className="alert-green-banner-bg"
          hex="#EFFEF6"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@alertGreenBannerBorder"
          className="alert-green-banner-border"
          hex="#98EFBB"
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
          hex="#13AA52"
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

    <div className="row">
      <div className="columns small-12">
        <h2>Charts Colors</h2>
      </div>
    </div>

    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@chart0"
          className="chart0"
          hex="#16CC62"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@chart1"
          className="chart1"
          hex="#196EE6"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@chart2"
          className="chart2"
          hex="#E6B219"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@chart3"
          className="chart3"
          hex="#E6196E"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@chart4"
          className="chart4"
          hex="#19C3E6"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@chart5"
          className="chart5"
          hex="#116149"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@chart6"
          className="chart6"
          hex="#E65D19"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@chart7"
          className="chart7"
          hex="#ABABAB"
        />
      </div>
      <div className="columns small-4">
        <ColorChip
          code="@chart8"
          className="chart8"
          hex="#1392AB"
        />
      </div>
    </div>
    <div className="row u-mb-5">
      <div className="columns small-4">
        <ColorChip
          code="@chart9"
          className="chart9"
          hex="#80340E"
        />
      </div>
      <div className="columns small-4">

      </div>
      <div className="columns small-4">

      </div>
    </div>


  </div>
);

export default UIColors;
