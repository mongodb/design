/**
 * Map of all Contentstack block types. Blocks contain inline or block nodes.
 */
export enum BLOCKS {
  DOCUMENT = 'doc',
  FRAGMENT = 'fragment',
  PARAGRAPH = 'p',
  ANCHOR = 'a',
  REFERENCE = 'reference',
  HEADING_1 = 'h1',
  HEADING_2 = 'h2',
  HEADING_3 = 'h3',
  HEADING_4 = 'h4',
  HEADING_5 = 'h5',
  HEADING_6 = 'h6',
  OL_LIST = 'ol',
  UL_LIST = 'ul',
  LIST_ITEM = 'li',
  ENTRY = 'entry',
  SPAN = 'span',

  HR = 'hr',
  QUOTE = 'blockquote',
  EMBEDDED_ENTRY = 'embedded-entry-block',
  EMBEDDED_ASSET = 'embedded-asset-block',
  TABLE = 'table',
  TABLE_ROW = 'table-row',
  TABLE_CELL = 'table-cell',
  TABLE_HEADER_CELL = 'table-header-cell',
}
