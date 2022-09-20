import ContentfulRichText from '.';

const verticalAlignments = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
};

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
    <ContentfulRichText document={content} />
  </div>
);

export default HorizontalLayoutColumn;
