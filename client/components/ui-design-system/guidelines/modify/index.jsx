// ==================================================
// DesignSystem - UIModify
// ==================================================

import React from 'react';
import '../../../../styling/root.less';
var modPattern1 = require('../../../../assets/mod-patterns-1.gif');
var modPattern2 = require('../../../../assets/mod-patterns-2.gif');
var modPattern3 = require('../../../../assets/mod-patterns-3.gif');
var modPattern4 = require('../../../../assets/mod-patterns-4.gif');
var modPattern5 = require('../../../../assets/mod-patterns-5.gif');

const UIModify = () => (
  <div className="wrap">
    <h1 className="heading">Modifying Elements</h1>
      <hr />
      <h3>Client-side application data</h3>
      <p>Lower performance concerns for end users.</p>

      <h3>Modification Pattern 1</h3>
      <p>e.g., a MongoDB Charts chart title</p>
      <img src={modPattern1} />
      <h5>When you should use this pattern:</h5>
      <ul>
        <li>An inline element</li>
        <li>Presentation layer matches complexity of configurable options.</li>
      </ul>
      <h5>Description of pattern:</h5>
      <ol>
        <li>Modify and commit text instantly</li>
      </ol>

      <h3>Modification Pattern 2</h3>
      <p>e.g., settings form in MongoDB Cloud</p>
      <img src={modPattern2} />
      <h5>When you should use this pattern:</h5>
      <ul>
        <li>Parent container with any number of inline child elements</li>
        <li>Presentation matches complexity of configurable options</li>
      </ul>
      <h5>Description of pattern:</h5>
      <ol>
        <li>a collection of simultaneous modifications can be made</li>
        <li>an additional user action is required to commit modifications as a group (e.g. SAVE changes)</li>
        <li>warn for unintentional discarding of modifications</li>
      </ol>

      <hr />
      <h3>User’s MongoDB data and infrastructure</h3>
      <p>Higher performance concerns for end users</p>
      <p>When manipulating MongoDB data and infrastructure, it is recommended that a container map directly to a single MongoDB concept within our existing documentation.</p>
      <p>If communicating application behaviors and status is competing with efforts to communicate MongoDB behaviors and status, elevate and reveal the MongoDB concepts in favor of the application concepts wherever possible.</p>

      <h3>Modification Pattern 3</h3>
      <p>e.g., Compass Document CRUD</p>
      <img src={modPattern3} />
      <h5>When you should use this pattern:</h5>
      <ul>
        <li>Parent container with any number of inline child elements (all three below)</li>
        <li>Presentation layer matches complexity of configurable options</li>
      </ul>
      <h5>Description of pattern:</h5>
      <ol>
        <li>Modify inline elements, display each’s modified state</li>
        <li>Synchronously display its parent container’s modified state</li>
        <li>Commit modifications to the child elements via controls on the parent container</li>
        <li>Display modification success on presentation layer</li>
      </ol>

      <h3>Modification Pattern 4</h3>
      <p>e.g., Atlas clusters</p>
      <img src={modPattern4} />
      <h5>When you should use this pattern:</h5>
      <ul>
        <li>Presentation layer obfuscates complexity of configurable options</li>
      </ul>
      <h5>Description of pattern:</h5>
      <ol>
        <li>User initiates modification layer from presentation layer, which unwinds and displays complexity underlying a component’s presentation</li>
        <li>Modify inline elements, display each’s modified state</li>
        <li>Synchronously display its parent container’s modified state</li>
        <li>Commit modifications to the child elements via controls on the modification layer’s parent container</li>
        <li>Display modification progress and success on presentation layer</li>
      </ol>

      <h3>Modification Pattern 5</h3>
      <p>e.g., Cloud Manager Automation</p>
      <h5>When you should use this pattern:</h5>
      <ul>
        <li>Presentation layer obfuscates complexity of configurable options</li>
        <li>Subsequent modification layer also obfuscates complexity of configurable options through processes like bulk edits</li>
      </ul>
      <img src={modPattern5} />
      <h5>Description of pattern:</h5>
      <ol>
        <li>
          <p>User initiates modification layer from presentation layer, which unwinds and displays complexity underlying a component’s presentation</p>
        </li>
        <li>
          <p>Modify inline elements, display each’s modified state</p>
        </li>
        <li>
          <p>Synchronously display its parent container’s modified state</p>
        </li>
        <li>
          <p>User initiates confirmation layer (from presentation or modification layer), which unwinds and displays complexity underlying as line-items</p>
        </li>
        <li>
          <p>Commit modifications to the child elements via controls on the confirmation layer</p>
        </li>
        <li>
          <p>Display modification progress and success on presentation layer</p>
        </li>
      </ol>
  </div>
);

export default UIModify;
