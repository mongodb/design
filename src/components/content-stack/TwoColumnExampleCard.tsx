import { css } from "@emotion/css";
import { spacing } from "@leafygreen-ui/tokens";
import { ExampleCardBlock } from "./ExampleCardBlock";
import { TwoColumnExampleCardBlockProps } from "./types";

export const TwoColumnExampleCard = ({
  entry,
}: {
  entry: TwoColumnExampleCardBlockProps;
}) => {
  return (
    <div
      className={css`
        display: flex;
        gap: ${spacing[800]}px;
        align-items: stretch;
      `}
    >
      <div
        className={css`
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: start;
          justify-content: flex-start;
          max-width: 100%;
        `}
      >
        <ExampleCardBlock
          entry={{
            title: entry.title,
            subtext: entry.column_1_subtext,
            variant: entry.column_1_variant,
            image: entry.column_1_image,
          }}
        />
      </div>
      <div>
        <ExampleCardBlock
          entry={{
            title: entry.title,
            subtext: entry.column_2_subtext,
            variant: entry.column_2_variant,
            image: entry.column_2_image,
          }}
        />
      </div>
    </div>
  );
};
