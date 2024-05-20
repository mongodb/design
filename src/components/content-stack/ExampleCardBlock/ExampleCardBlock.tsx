import { css } from "@emotion/css";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { color, spacing } from "@leafygreen-ui/tokens";
import { Body } from "@leafygreen-ui/typography";
import { ExampleCardBlockProps } from "../types";
import {
  BorderColors,
  IconColors,
  Icons,
  TextColors,
  VariantHeaders,
} from "./constants";
import { ImageContainer } from "./ImageContainer";

export const ExampleCardBlock = ({
  entry,
}: {
  entry: ExampleCardBlockProps;
}) => {
  const { theme } = useDarkMode();
  const IconComponent = Icons[entry.variant];

  return (
    <div
      className={css`
        margin-block: ${spacing[800] + spacing[200]}px;
      `}
    >
      <ImageContainer gradient={BorderColors(theme)[entry.variant]}>
        {/**
         * TODO: fix this
         * Contentstack doesn't send image sizes,
         * so we can't appropriately size a Next/Image component.
         *
         * Also can't use `ContentstackImage`, since the `entry.image` object
         * is not a `CSNode` type
         */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={entry.image?.url} alt={entry.title} />
      </ImageContainer>
      <div
        className={css`
          display: flex;
          gap: ${spacing[150]}px;
          margin-left: ${spacing[200]}px;
        `}
      >
        <IconComponent
          fill={IconColors(theme)[entry.variant]}
          width={spacing[600]}
          height={spacing[600]}
          css={css`
            width: auto;
          `}
        />
        <div>
          <Body
            className={css`
              color: ${TextColors(theme)[entry.variant]};
            `}
          >
            <b>{VariantHeaders[entry.variant]}</b>
          </Body>
          <Body
            className={css`
              color: ${color[theme].text.secondary.default};
            `}
          >
            {entry.subtext}
          </Body>
        </div>
      </div>
    </div>
  );
};
