import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';
import Button from '../../../../react-components/Button.js';
import SplashView from '../../../../react-components/SplashView.js';
import Checkbox from '../../../../react-components/Checkbox.js';

class UILayoutsReact extends React.Component {

  state = {
    hasGraphic: true,
    hasHeadline: true,
    hasDescription: true,
    hasPrimaryCTA: true,
    hasSecondaryCTA: true,
    hasLink: true,
    isLoading: false
  };

  codeSnippetHandler() {
    const disabled = this.state.controlDisabled ? `,\n  disabled={true}` : '';
    const className = this.state.controlTypeClassName ? ` ${this.state.controlTypeClassName}` : '';
    return `<Button
  label="${this.state.controlLabel}",
  className="button${className}"${disabled}
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
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Empty State</h3>
              <Checkbox
                  label="Graphic"
                  checked={this.state.hasGraphic}
                  onChange={hasGraphic => {
                    this.setState({ hasGraphic });
                  }}
              />
              <Checkbox
                  label="Headline"
                  checked={this.state.hasHeadline}
                  onChange={hasHeadline => {
                    this.setState({ hasHeadline });
                  }}
              />
              <Checkbox
                  label="Description"
                  checked={this.state.hasDescription}
                  onChange={hasDescription => {
                    this.setState({ hasDescription });
                  }}
              />
              <Checkbox
                  label="Primary CTA"
                  checked={this.state.hasPrimaryCTA}
                  onChange={hasPrimaryCTA => {
                    this.setState({ hasPrimaryCTA });
                  }}
              />
              <Checkbox
                  label="Secondary CTA"
                  checked={this.state.hasSecondaryCTA}
                  onChange={hasSecondaryCTA => {
                    this.setState({ hasSecondaryCTA });
                  }}
              />
              <Checkbox
                  label="Link"
                  checked={this.state.hasLink}
                  onChange={hasLink => {
                    this.setState({ hasLink });
                  }}
              />
              <Checkbox
                  label="Loading"
                  checked={this.state.isLoading}
                  onChange={isLoading => {
                    this.setState({ isLoading });
                  }}
              />
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <SplashView
              hasGraphic = {this.state.hasGraphic}
              hasHeadline = {this.state.hasHeadline}
              hasDescription = {this.state.hasDescription}
              hasPrimaryCTA = {this.state.hasPrimaryCTA}
              hasSecondaryCTA = {this.state.hasSecondaryCTA}
              hasLink = {this.state.hasLink}
              isLoading = {this.state.isLoading} >
            </SplashView>
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
