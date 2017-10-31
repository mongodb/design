import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import CopyableCommand from '../../react-components/CopyableCommand.js';
import Button from '../../react-components/Button.js';

class UICopyableCommandReact extends React.Component {

  render() {
    return (
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1>Code</h1>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <ul className="tabs">
              <li className="tabs-tab">
                <Link to='/ui-design-system/components/code' className="tabs-tab-link">CSS</Link>
              </li>
              <li className="tabs-tab tabs-tab-is-active">
                <Link to='/ui-design-system/components/code/react-copyablecommand' className="tabs-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h2>Code Styles</h2>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>Copyable Command</h3>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <CopyableCommand 
              copyableText='This is a command that you can copy. It will not break onto the next line since the overflow will keep scrolling horizontally.' wrapText>
            </CopyableCommand>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<CopyableCommand 
  copyableText='This is a command that you can copy. It will not break onto the next line since the overflow will keep scrolling horizontally.' wrapText>
</CopyableCommand>`}> 
            </Code>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <CopyableCommand 
              copyableText='By default command snippets are not full width.' wrapText>
            </CopyableCommand>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<CopyableCommand 
  copyableText='By default command snippets are not full width.' wrapText>
</CopyableCommand>`}> 
            </Code>
          </div>
        </div>

        <div className="row u-mb-2">
          <div className="columns small-12">
            <CopyableCommand 
              copyableText='However, you can force the snippet to be full width by adding an additional class.' 
              otherClasses='copy-command-is-full-width' wrapText>
            </CopyableCommand>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<CopyableCommand 
  copyableText='However, you can force the snippet to be full width by adding an additional class.' wrapText>
</CopyableCommand>`}> 
            </Code>
          </div>
        </div>
      </div>
    );
  }
}

export default UICopyableCommandReact;
