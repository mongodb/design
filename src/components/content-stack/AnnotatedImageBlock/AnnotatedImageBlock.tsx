import { css } from "@emotion/css";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { color, spacing } from "@leafygreen-ui/tokens";
import { Body } from "@leafygreen-ui/typography";
import { ImageContainer } from "./ImageContainer";
import { StyledList } from "./StyledList";
import { StyledListItem } from "./StyledListItem";

export const AnnotatedImageBlock = ({ entry }: { entry: any }) => {
  const { theme } = useDarkMode();

  return (
    <div
      className={css`
        margin-top: ${spacing[600]}px;
        margin-bottom: ${spacing[600]}px;
      `}
    >
      <ImageContainer>
        <img src={entry.image?.url} alt={entry.title} />
      </ImageContainer>
      <StyledList>
        {entry.steps.map((obj: any, index: number) => (
          <StyledListItem key={index}>
            <Body
              className={css`
                display: inline;
                margin-left: ${spacing[100]}px;
              `}
            >
              <b
                className={css`
                  display: inline;
                `}
              >
                {obj.step.title}
                {obj.step.description ? ":" : ""}&nbsp;
              </b>
              <span
                className={css`
                  color: ${color[theme].text.secondary.default};
                  display: inline;
                `}
              >
                {obj.step.description}
              </span>
            </Body>
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
};
