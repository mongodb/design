import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';
import Button from '../../../../react-components/Button.js';
import SplashView from '../../../../react-components/SplashView.js';
import Checkbox from '../../../../react-components/Checkbox.js';
const Prism = require('prismjs');

class UILayoutsReact extends React.Component {

  state = {
    hasGraphic: true,
    hasHeadline: true,
    hasDescription: true,
    hasPrimaryCTA: true,
    hasSecondaryCTA: true,
    haslinkCTA: true,
    isLoading: false
  };

  codeSnippetHandler() {
    const graphic = this.state.hasGraphic ? `\n  graphic = \"dashboard-zero.svg\",` : '';
    const headline = this.state.hasHeadline ? `\n  headline = \"A positive and actionable headline\",` : '';
    const description = this.state.hasDescription ? `\n  description = \"Language should be direct in communicating need of the feature as well as setting appropriate expectation for using the feature.\",` : '';
    const primaryCTA = this.state.hasPrimaryCTA ? `\n  primaryCTA = \"Do something\",` : '';
    const secondaryCTA = this.state.hasSecondaryCTA ? `\n  secondaryCTA = \"Do something else\",` : '';
    const linkCTA = this.state.hasLinkCTA ? `\n  linkCTA = \"More information about choosing zero state graphics here\",` : '';
    const linkTarget = this.state.hasLinkCTA ? `\n  linkTarget = \"http://google.com\",` : '';
    const isLoading = this.state.isLoading ? `\n  isLoading = true` : '\n  isLoading = false';

    return `<SplashView${graphic}${headline}${description}${primaryCTA}${secondaryCTA}${linkCTA}${linkTarget}${isLoading}
/>`

  }

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
            <p>This zero state component can be used for features that require some user action before there is any viewable content or data. The component also provides various combinations of elements to accommodate most informational and loading scenarios. <a href="https://wiki.corp.mongodb.com/display/10GEN/Zero+States%3A+How+To" target="_blank">More information about choosing zero state graphics here.</a></p>
          </div>
        </div>

        <div className="row">
          <div className="columns small-12">
            <h3>Options</h3>
            <p><strong>Elements</strong></p>
          </div>
        </div>
        <div className="row">
          <div className="columns small-6">
            <Checkbox
                label="Headline"
                checked={this.state.hasHeadline}
                onChange={hasHeadline => {
                  this.setState({ hasHeadline });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
            <Checkbox
                label="Description"
                checked={this.state.hasDescription}
                onChange={hasDescription => {
                  this.setState({ hasDescription });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
            <Checkbox
                label="Primary CTA"
                checked={this.state.hasPrimaryCTA}
                onChange={hasPrimaryCTA => {
                  this.setState({ hasPrimaryCTA });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
            <Checkbox
                label="Secondary CTA"
                checked={this.state.hasSecondaryCTA}
                onChange={hasSecondaryCTA => {
                  this.setState({ hasSecondaryCTA });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
          </div>
          <div className="columns small-6">
            <Checkbox
                label="Graphic"
                checked={this.state.hasGraphic}
                onChange={hasGraphic => {
                  this.setState({ hasGraphic });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />

            <Checkbox
                label="Link"
                checked={this.state.hasLinkCTA}
                onChange={hasLinkCTA => {
                  this.setState({ hasLinkCTA });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
            <Checkbox
                label="Loading"
                checked={this.state.isLoading}
                onChange={isLoading => {
                  this.setState({ isLoading });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
          </div>
        </div>

        <div className="row">
          <div className="columns small-12">
            <h3>Output</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <SplashView
              graphic = {this.state.hasGraphic ? 'dashboard-zero.svg': null}
              headline = {this.state.hasHeadline ? 'A positive and actionable headline': null}
              description = {this.state.hasDescription ? 'Language should be direct in communicating need of the feature as well as setting appropriate expectation for using the feature.' : null}
              primaryCTA = {this.state.hasPrimaryCTA ? 'Do something' : null }
              secondaryCTA = {this.state.hasSecondaryCTA ? 'Do something else' : null }
              linkCTA = {this.state.hasLinkCTA ? 'More information about choosing zero state graphics here' : null }
              linkTarget = {this.state.hasLinkCTA ? 'https://wiki.corp.mongodb.com/display/10GEN/Zero+States%3A+How+To' : null }
              isLoading = {this.state.isLoading} />
          </div>
        </div>

        <div className="row">
          <div className="columns small-12">
            <Code
              language='language-jsx'
              text={this.codeSnippetHandler()}>
            </Code>
          </div>
        </div>

      </div>
    );
  }
}

export default UILayoutsReact;
