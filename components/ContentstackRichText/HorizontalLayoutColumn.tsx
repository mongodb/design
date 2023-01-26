import ContentstackRichText from '.';

const verticalAlignments = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
};

/** @deprecated */
const HorizontalLayoutColumn = ({ widthRatio, verticalAlign, content }) => (
  <div
    style={{
      flex: widthRatio ?? 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: verticalAlignments[verticalAlign ?? 'center'],
      alignItems: 'baseline',
    }}
  >
    <ContentstackRichText content={content} />
  </div>
);

export default HorizontalLayoutColumn;
