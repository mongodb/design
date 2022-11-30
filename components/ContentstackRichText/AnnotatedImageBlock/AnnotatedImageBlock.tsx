import ImageContainer from './ImageContainer';
import StyledList from './StyledList';
import StyledListItem from './StyledListItem';

const AnnotatedImageBlock = ({ entry }) => {
  return (
    <div>
      <ImageContainer>
        <img src={entry.image.url} alt={entry.title} />
      </ImageContainer>
      <StyledList>
        {entry.steps.map(obj => (
          <StyledListItem
            title={obj.step.title}
            description={obj.step.description}
          />
        ))}
      </StyledList>
    </div>
  );
};

export default AnnotatedImageBlock;
