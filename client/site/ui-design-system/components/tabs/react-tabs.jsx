import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';
import Alert from '../../../../react-components/Alert.js';
import Button from '../../../../react-components/Button.js';
import SectionHeader from '../../../../react-components/SectionHeader.js';
import SectionSubtabs from '../../../../react-components/SectionSubtab.js';
import SectionHeaderTabs from '../../../../react-components/SectionHeaderTab.js';
const Prism = require('prismjs');

class UITabsReact extends React.Component {

render() {
  return (
    <div className="wrap">
      <div className="row">
        <div className="columns small-12">
          <h1>Tabs</h1>
        </div>
      </div>
      <div className="row u-mb-2">
        <div className="columns small-12">
          <ul className="section-header-tabs">
            <li className="section-header-tab">
              <Link to='/ui-design-system/components/tabs' className="section-header-tab-link">CSS</Link>
            </li>
            <li className="section-header-tab section-header-tab-is-active">
              <Link to='/ui-design-system/components/tabs/react-tabs' className="section-header-tab-link">React</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row u-mb-2 type-default">
        <div className="columns small-12">
          <h2>Default Tabs</h2>
            <p>We have tabs for any and all kinds of options and situations.</p>
          <SectionHeaderTabs 
            children={
              [
                <SectionHeaderTabs.Tab linkText="Processes" type="active" />,
                <SectionHeaderTabs.Tab linkText="Servers" />,
                <SectionHeaderTabs.Tab linkText="Agents" />, 
                <SectionHeaderTabs.Tab linkText="Security" />
              ]
            }
          />
        <Code
          language='language-html'
          text={`<SectionHeaderTabs
  children={
    [
      <SectionHeaderTabs.Tab linkText="Processes" type="active" />,
      <SectionHeaderTabs.Tab linkText="Servers" />,
      <SectionHeaderTabs.Tab linkText="Agents" />, 
      <SectionHeaderTabs.Tab linkText="Security" />
    ]
  }
/>`}> 
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
                <Button 
                  label="Primary Action"
                  className="button-is-primary u-mr-2"
                  onClick={() => {return null}}
                />
                <Button
                  className="button-has-ellipsis-only"
                  onClick={() => {return null}}
                />
              </SectionHeader>
            </div>
        <Code
          language='language-html'
          text={`<SectionHeader headlineText='Section Without Tabs'>
  <Button label="Primary Action" className="button-is-primary u-mr-2" />
  <Button className="button-has-ellipsis-only" />
</SectionHeader>`}> 
        </Code> 
        </div>
      </div>
      <div className="row u-mb-2 u-mt-8">
        <div className="columns small-12">
            <div className="section-header section-header-has-tabs">
                <div className="section-warnings-alert">
                  <Alert level="warning" children="This is a warning" />
                </div>
                <SectionHeader headlineText="Section With Banner">
                  <Button
                    label="Primary Action"
                    className="button-is-primary u-mr-2"
                    onClick={() => {return null}}
                  />
                  <Button
                    className="button-has-ellipsis-only"
                    onClick={() => {return null}}
                  />
                </SectionHeader>
                <SectionHeaderTabs 
                  children={
                    [
                      <SectionHeaderTabs.Tab linkText="Tab" />,
                      <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
                      <SectionHeaderTabs.Tab linkText="Tab" />,
                      <SectionHeaderTabs.Tab linkText="More" type="moreToggle"/>
                    ]
                  }
                />
            </div>
        </div>
      </div>
      <Code
          language='language-html'
          text={`<div className="section-header section-header-has-tabs">
  <div className="section-warnings-alert">
    <Alert level="warning" children="This is a warning" />
  </div>
  <SectionHeader headlineText="Section With Banner">
    <Button label="Primary Action" className="button-is-primary u-mr-2" />
    <Button className="button-has-ellipsis-only" />
  </SectionHeader>
  <SectionHeaderTabs
    children={
      [
        <SectionHeaderTabs.Tab linkText="Tab" />,
        <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
        <SectionHeaderTabs.Tab linkText="Tab" />,
        <SectionHeaderTabs.Tab linkText="More" type="moreToggle"/>
      ]
    }
  />
</div>`}> 
        </Code>
      <div className="row u-mb-2 u-mt-8">
        <div className="columns small-12">
            <div className="section-header">
              <SectionHeader headlineText="Section With Tabs">
                <Button
                  label="Primary Action"
                  className="button-is-primary u-mr-2"
                  onClick={() => {return null}}
                />
                <Button
                  className="button-has-ellipsis-only"
                  onClick={() => {return null}}
                />
              </SectionHeader>
                <SectionHeaderTabs
                  children={
                    [
                      <SectionHeaderTabs.Tab linkText="Tab" />,
                      <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
                      <SectionHeaderTabs.Tab linkText="Beta Tab" type='beta' />,
                      <SectionHeaderTabs.Tab linkText="More" type='moreToggle' />
                    ]
                  }
                />
                <SectionSubtabs 
                  children={
                    [
                      <SectionSubtabs.Tab linkText="Subtab" />,
                      <SectionSubtabs.Tab linkText="Active Subtab" type="active" />,
                      <SectionSubtabs.Tab linkText="Last Subtab" />
                    ]
                  } 
                />
            </div>
            <Code
          language='language-html'
          text={`<div className="section-header">
  <SectionHeader headlineText="Section With Tabs">
    <Button label="Primary Action" className="button-is-primary u-mr-2" />
    <Button className="button-has-ellipsis-only" />
  </SectionHeader>
    <SectionHeaderTabs
      children={
        [
          <SectionHeaderTabs.Tab linkText="Tab" />,
          <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,
          <SectionHeaderTabs.Tab linkText="Beta Tab" type='beta' />,
          <SectionHeaderTabs.Tab linkText="More" type='moreToggle' />
        ]
      }
    />
    <SectionSubtabs 
      children={
        [
          <SectionSubtabs.Tab linkText="Subtab" />,
          <SectionSubtabs.Tab linkText="Active Subtab" type="active" />,
          <SectionSubtabs.Tab linkText="Last Subtab" />
        ]
      } 
    />
</div>`}> 
          </Code>
        </div>
      </div>
    </div>
    );
  }
}

export default UITabsReact;
