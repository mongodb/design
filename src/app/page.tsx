"use client";

import { css } from "@emotion/css";
import { Body, H1 } from "@leafygreen-ui/typography";
import { spacing } from "@leafygreen-ui/tokens";
import { ComponentCard, HomeCard } from "@/components/home";

export default function Home() {
  return (
    <div
      className={css`
        min-height: 100vh;
      `}
    >
      <div
        className={css`
          margin-bottom: ${spacing[1000]}px;
        `}
      >
        <H1>LeafyGreen Design System</H1>
        <Body baseFontSize={16}>
          MongoDB’s open-source design system for building intuitive, and
          beautiful experiences
        </Body>
      </div>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: ${spacing[600]}px;
          max-width: 1152px;
        `}
      >
        <ComponentCard />

        <HomeCard
          key="Foundations"
          title="Foundations"
          description="These define broader guidance on typography, iconography, and our
            color palette."
          link="/foundations/grid"
        />

        <HomeCard
          key="Resources"
          title="Resources"
          description=" Resources include guidelines on accessibility, and icon creation."
          link="/resources/accessibility"
        />
      </div>
    </div>
  );
}
