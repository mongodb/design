import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Button from '../../react-components/Button.js';
import Checkbox from '../../react-components/Checkbox.js';
import { RadioGroup, Radio } from '../../react-components/RadioGroup.js';
const Prism = require('prismjs');

class UITabsReact extends React.Component {

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
      </div>
    );
  }
}

export default UITabsReact;
