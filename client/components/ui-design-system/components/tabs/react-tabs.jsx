import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Alert from '../../react-components/Alert.js';
import Button from '../../react-components/Button.js';
import Checkbox from '../../react-components/Checkbox.js';
import SectionHeader from '../../react-components/SectionHeader.js';
import SectionSubtabs from '../../react-components/SectionSubtab.js';
import SectionHeaderTabs from '../../react-components/SectionHeaderTab.js';
import { RadioGroup, Radio } from '../../react-components/RadioGroup.js';
const Prism = require('prismjs');

class UITabsReact extends React.Component {
   state = {
    controlDisabled: false,
    controlTypeClassName: "",
    controlLabel: "Default Tabs",
  }

render() {
  return (
    <div className="wrap">
      <div className="row u-mb-3">
        <div className="columns small-12">
          <h1>Tabs</h1>
        </div>
      </div>
      <div className="row u-mb-2">
        <div className="columns small-12">
          <ul className="tabs">
            <li className="tabs-tab">
              <Link to='/ui-design-system/components/tabs' className="tabs-tab-link">CSS</Link>
            </li>
            <li className="tabs-tab tabs-tab-is-active">
              <Link to='/ui-design-system/components/tabs/react-tabs' className="tabs-tab-link">React</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="row u-mb-2 type-default">
        <div className="columns small-12">
          <h2>Default Tabs</h2>
            <p>We have tabs for any and all kinds of options and situations.</p>

          <SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Processes" type="active"/>, <SectionHeaderTabs.Tab linkText="Servers" />,
            <SectionHeaderTabs.Tab linkText="Agents" />, <SectionHeaderTabs.Tab linkText="Security"/>]}>
          </SectionHeaderTabs>

        <Code
          language='language-html'
          text={`<SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Processes" type="active"/>, <SectionHeaderTabs.Tab linkText="Servers" />,
  <SectionHeaderTabs.Tab linkText="Agents" />, <SectionHeaderTabs.Tab linkText="Security"/>]}>
</SectionHeaderTabs>`}> 
        </Code> 
        </div>
      </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Common Navigation</h3>
        <p>Section Header, Tabs, Subtabs, Controls and Banner</p>
      </div>
    </div>

      <div className="row u-mb-3">
          <div className="columns small-12">
            <div className="section-header">
              <SectionHeader headlineText='Section Without Tabs'>
                <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>
                <Button className="button-has-ellipsis-only"></Button>
              </SectionHeader>
            </div>

        <Code
          language='language-html'
          text={`<SectionHeader headlineText='Section Without Tabs'>
  <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>
  <Button className="button-has-ellipsis-only"></Button>
</SectionHeader>`}> 
        </Code> 

        </div>
      </div>
      

      <div className="row u-mb-2">
        <div className="columns small-12">
            <div className="section-header">
                <div className="section-header-warnings">
                <Alert level="warning" children="This is a warning"></Alert>
                </div>
                <SectionHeader headlineText="Section With Banner">
                  <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>
                  <Button className="button-has-ellipsis-only"></Button>
                </SectionHeader>
                  <SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
                    <SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="More" type="moreToggle"/>]}>
                  </SectionHeaderTabs>
            </div>
        </div>
      </div>
      <Code
          language='language-html'
          text={`<Alert level="warning" children="This is a warning"></Alert>
<SectionHeader headlineText="Section With Banner">
  <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>
  <Button className="button-has-ellipsis-only"></Button>
</SectionHeader>
<SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
  <SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="More" type="moreToggle"/>]}>
</SectionHeaderTabs>`}> 
        </Code>

      <div className="row u-mb-2">
        <div className="columns small-12">
            <div className="section-header">
              <SectionHeader headlineText="Section With Tabs">
                <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>
                <Button className="button-has-ellipsis-only"></Button>
              </SectionHeader>
                <SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
                  <SectionHeaderTabs.Tab linkText="Beta Tab" type='beta'/>, <SectionHeaderTabs.Tab linkText="More" type='moreToggle'/>]}>
                </SectionHeaderTabs>

                <SectionSubtabs children={[<SectionSubtabs.Tab linkText="Subtab"/>, <SectionSubtabs.Tab linkText="Active Subtab" type="active" />,
                  <SectionSubtabs.Tab linkText="Last Subtab"/>]}>
                </SectionSubtabs>
            </div>

            <Code
          language='language-html'
          text={`<SectionHeader headlineText="Section With Tabs">
  <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>
  <Button className="button-has-ellipsis-only"></Button>
</SectionHeader>
<SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
  <SectionHeaderTabs.Tab linkText="Beta Tab" type='beta'/>, <SectionHeaderTabs.Tab linkText="More" type='moreToggle'/>]}>
</SectionHeaderTabs>
<SectionSubtabs children={[<SectionSubtabs.Tab linkText="Subtab"/>, <SectionSubtabs.Tab linkText="Active Subtab" type="active" />,
  <SectionSubtabs.Tab linkText="Last Subtab"/>]}>
</SectionSubtabs>
          `}> 
          </Code>
        </div>
      </div>
    </div>

    );


  }
}

export default UITabsReact;
