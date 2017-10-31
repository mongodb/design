// ==================================================
// Resources
// ==================================================

import React from 'react';
import '../../../styling/root.less';

class Resources extends React.Component {
  componentDidMount() {
    return fetch("https://api.github.com/graphql", {
  body: "{\"query\": \"query FindLatestCommit { repository(owner: \"leafygreen\", name: \"sketchUIlibrary\") { ref(qualifiedName: \"master\") { target { ... on Commit { history(first:1, path: \"_mongodb-core.sketch\") { edges { node { messageHeadline committedDate } } } } } } } }\"}",
  headers: {
    Authorization: "bearer f2af351e7137826fae5580c827d175816ad7349e",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1 className="heading">Resources</h1>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h2 className="heading">Sketch Templates</h2>
            <table className="table">
              <thead>
                <tr className="table-row">
                  <th className="table-header">Filename</th>
                  <th className="table-header">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_mongodb-core.sketch?raw=true"><strong>_mongodb-core.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Core components common to all MongoDB products</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_compass-template-1.7.sketch?raw=true"><strong>_compass-template-1.7.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB Compass</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_cloud-template.sketch?raw=true"><strong>_cloud-template.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB Cloud Manager, Ops Manager, and Atlas</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_stitch-template.sketch?raw=true"><strong>_stitch-template.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB Stitch</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_university-template-1.2.sketch?raw=true"><strong>_university-template-1.2.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB University</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h2 className="heading">Brand Guide</h2>
            <p>Looking for the brand guide? Visit the <a href="https://mongodb.frontify.com" target="_blank">MongoDB Brand Portal</a> for logos, icons, color palettes, illustration guidelines, and more.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
