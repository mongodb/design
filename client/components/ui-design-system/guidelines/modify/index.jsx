// ==================================================
// DesignSystem - UIModify
// ==================================================

import React from 'react';
import '../../../../styling/root.less';
var modPattern100 = require('../../../../assets/product-design/guidelines/mod-pattern-1-00.png');
var modPattern101 = require('../../../../assets/product-design/guidelines/mod-pattern-1-01.png');
var modPattern102 = require('../../../../assets/product-design/guidelines/mod-pattern-1-02.png');
var modPattern103 = require('../../../../assets/product-design/guidelines/mod-pattern-1-03.png');

var modPattern200 = require('../../../../assets/product-design/guidelines/mod-pattern-2-00.png');
var modPattern201 = require('../../../../assets/product-design/guidelines/mod-pattern-2-01.png');

var modPattern300 = require('../../../../assets/product-design/guidelines/mod-pattern-3-00.png');
var modPattern301 = require('../../../../assets/product-design/guidelines/mod-pattern-3-01.png');
var modPattern302 = require('../../../../assets/product-design/guidelines/mod-pattern-3-02.png');
var modPattern303 = require('../../../../assets/product-design/guidelines/mod-pattern-3-03.png');

var modPattern400 = require('../../../../assets/product-design/guidelines/mod-pattern-4-00.png');
var modPattern401 = require('../../../../assets/product-design/guidelines/mod-pattern-4-01.png');
var modPattern402 = require('../../../../assets/product-design/guidelines/mod-pattern-4-02.png');
var modPattern403 = require('../../../../assets/product-design/guidelines/mod-pattern-4-03.png');
var modPattern404 = require('../../../../assets/product-design/guidelines/mod-pattern-4-04.png');

var modPattern500 = require('../../../../assets/product-design/guidelines/mod-pattern-5-00.png');
var modPattern501 = require('../../../../assets/product-design/guidelines/mod-pattern-5-01.png');
var modPattern502 = require('../../../../assets/product-design/guidelines/mod-pattern-5-02.png');
var modPattern503 = require('../../../../assets/product-design/guidelines/mod-pattern-5-03.png');
var modPattern504 = require('../../../../assets/product-design/guidelines/mod-pattern-5-04.png');
var modPattern505 = require('../../../../assets/product-design/guidelines/mod-pattern-5-05.png');

const UIModify = () => (
  <div className="wrap guidelines-modify">
    <h1 className="heading">Modifying Elements</h1>
    <p>The following is a set of guidelines for reference when considering the interaction patterns for modifying elements. There are two major categories your feature may fall under: 1). modifying application data, or 2). modifying underlying MongoDB data or infrastructure. You will find patterns below for handling each.</p>

      <h2>Client-Side Application Data</h2>
      <p>When modifying client-side application data, there are fewer performance concerns for end users and their systems. Therefore the patterns are less precautionary and pretty straight forward.</p>

      <h3>Modification Pattern 1</h3>
      <p>e.g., a MongoDB Charts chart title</p>
      <h4>Description of pattern:</h4>
      <ol>
        <li>
          <p>Modify and commit text instantly</p>
          <img className="guideline-screenshot" src={modPattern100} />
          <img className="guideline-screenshot" src={modPattern101} />
          <img className="guideline-screenshot" src={modPattern102} />
          <img className="guideline-screenshot" src={modPattern103} />
        </li>
      </ol>
      <h4>When you should use modification pattern 1:</h4>
      <ul>
        <li><p>An inline element</p></li>
        <li><p>Presentation layer matches complexity of configurable options.</p></li>
      </ul>

      <h3>Modification Pattern 2</h3>
      <p>e.g., settings form in MongoDB Cloud</p>
      <h4>Description of pattern:</h4>
      <ol>
        <li>
          <p>A collection of simultaneous modifications can be made</p>
        </li>
        <li>
          <p>An additional user action is required to commit modifications as a group (e.g. SAVE changes)</p>
          <img className="guideline-screenshot" src={modPattern200} />
        </li>
        <li>
          <p>warn for unintentional discarding of modifications</p>
          <img className="guideline-screenshot" src={modPattern201} />
        </li>
      </ol>
      <h4>When you should use modification pattern 2:</h4>
      <ul>
        <li><p>Parent container with any number of inline child elements</p></li>
        <li><p>Presentation matches complexity of configurable options</p></li>
      </ul>


      <h2>User’s MongoDB Data and Infrastructure</h2>
      <p>Higher performance concerns for end users</p>
      <p>When manipulating MongoDB data and infrastructure, there are greater performance concerns for end users and their systems. Therefore the following patterns aim to manage complexity and progressively disclose precise changes that will take place as the user advances through their pattern towards a final commitment. It is recommended that a container map directly to a single MongoDB concept within our existing documentation.</p>
      <p>If communicating application behaviors and status is competing with efforts to communicate MongoDB behaviors and status, elevate and reveal the MongoDB concepts in favor of the application concepts wherever possible.</p>

      <h3>Modification Pattern 3</h3>
      <p>e.g., Compass Document CRUD</p>
      <h4>Description of pattern:</h4>
      <ol>
        <li>
          <p>Modify inline elements, display each’s modified state</p>
          <img className="guideline-screenshot" src={modPattern300} />
          <img className="guideline-screenshot" src={modPattern301} />
        </li>
        <li>
          <p>Synchronously display its parent container’s modified state</p>
        </li>
        <li>
          <p>Commit modifications to the child elements via controls on the parent container</p>
          <img className="guideline-screenshot" src={modPattern302} />
        </li>
        <li>
          <p>Display modification success on presentation layer</p>
          <img className="guideline-screenshot" src={modPattern303} />
        </li>
      </ol>
      <h4>When you should use modification pattern 3:</h4>
      <ul>
        <li><p>Parent container with any number of inline child elements (all three below)</p></li>
        <li><p>Presentation layer matches complexity of configurable options</p></li>
      </ul>

      <h3>Modification Pattern 4</h3>
      <p>e.g., Atlas clusters</p>
      <h4>Description of pattern:</h4>
      <ol>
        <li>
          <p>User initiates modification layer from presentation layer, which unwinds and displays complexity underlying a component’s presentation</p>
          <img className="guideline-screenshot" src={modPattern400} />
          <img className="guideline-screenshot" src={modPattern401} />
        </li>
        <li>
          <p>Modify inline elements, display each’s modified state</p>
          <img className="guideline-screenshot" src={modPattern402} />
        </li>
        <li>
          <p>Synchronously display its parent container’s modified state</p>
        </li>
        <li>
          <p>Commit modifications to the child elements via controls on the modification layer’s parent container</p>
          <img className="guideline-screenshot" src={modPattern403} />
        </li>
        <li>
          <p>Display modification progress and success on presentation layer</p>
          <img className="guideline-screenshot" src={modPattern404} />
        </li>
      </ol>
      <h4>When you should use modification pattern 4:</h4>
      <ul>
        <li><p>Presentation layer obfuscates complexity of configurable options</p></li>
      </ul>

      <h3>Modification Pattern 5</h3>
      <p>e.g., Cloud Manager Automation</p>
      <h4>Description of pattern:</h4>
      <ol>
        <li>
          <p>User initiates modification layer from presentation layer, which unwinds and displays complexity underlying a component’s presentation</p>
          <img className="guideline-screenshot" src={modPattern500} />
        </li>
        <li>
          <p>Modify inline elements, display each’s modified state</p>
          <img className="guideline-screenshot" src={modPattern501} />
        </li>
        <li>
          <p>Synchronously display its parent container’s modified state</p>
          <img className="guideline-screenshot" src={modPattern502} />
        </li>
        <li>
          <p>User initiates confirmation layer (from presentation or modification layer), which unwinds and displays complexity underlying as line-items</p>
          <img className="guideline-screenshot" src={modPattern503} />
        </li>
        <li>
          <p>Commit modifications to the child elements via controls on the confirmation layer</p>
          <img className="guideline-screenshot" src={modPattern504} />
        </li>
        <li>
          <p>Display modification progress and success on presentation layer</p>
          <img className="guideline-screenshot" src={modPattern505} />
        </li>
      </ol>
      <h4>When you should use modification pattern 5:</h4>
      <ul>
        <li><p>Presentation layer obfuscates complexity of configurable options</p></li>
        <li><p>Subsequent modification layer also obfuscates complexity of configurable options through processes like bulk edits</p></li>
      </ul>
  </div>
);

export default UIModify;
