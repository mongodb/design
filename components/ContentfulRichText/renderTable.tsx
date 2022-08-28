import ContentfulRichText from "."

export const renderTable = (node, children) => <table>{node.content.map(node => <ContentfulRichText document={node} />)}</table>
export const renderTableRow = (node, children) => <tr>{node.content.map(node => <ContentfulRichText document={node} />)}</tr>
export const renderTableCell = (node, children) => <td>{node.content.map(node => <ContentfulRichText document={node} />)}</td>
export const renderTableHeaderCell = (node, children) => <th>{node.content.map(node => <ContentfulRichText document={node} />)}</th>