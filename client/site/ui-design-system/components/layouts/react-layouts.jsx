import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../site-components/code';
import Button from '../../../../react-components/Button.js';
import SplashView from '../../../../react-components/SplashView.js';

class UILayoutsReact extends React.Component {

  render() {
    return (
      <div className="wrap">
        <div className="row">
          <div className="columns small-12">
            <h1>Layouts</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <ul className="section-header-tabs">
              <li className="section-header-tab">
                <Link to='/ui-design-system/components/layouts' className="section-header-tab-link">CSS</Link>
              </li>
              <li className="section-header-tab section-header-tab-is-active">
                <Link to='/ui-design-system/components/layouts/react-layouts' className="section-header-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h2>Zero States</h2>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Empty State</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <SplashView 
              graphic={null} 
              headlineText="Enter your empty view placeholder text here.">
              <Button
                label="Do Something"
                className="button-is-primary button-is-large"
                onClick={() => {return null}}
              />
            </SplashView>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<SplashView 
  graphic={null}
  headlineText="Enter your empty view placeholder text here.">
  <Button
    label="Do Something"
    className="button-is-primary button-is-large"
  />
</SplashView>`}> 
            </Code>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Loading State</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <SplashView headlineText="Retrieving list of databases and collections..." isLoading />
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<SplashView headlineText="Retrieving list of databases and collections..." isLoading />`}> 
            </Code>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Error State</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <SplashView headlineText="Write something about what they did wrong here." isError >            
              <Button
                label="Do Something Else"
                className="button-is-large"
                onClick={() => {return null}}
              />
            </SplashView>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<SplashView headlineText="Write something about what they did wrong here." isError >
  <Button
    label="Do Something Else"
    className="button-is-large"
  />
</SplashView>`}> 
            </Code>
          </div>
        </div>
      </div>
    );
  }
}

export default UILayoutsReact;
