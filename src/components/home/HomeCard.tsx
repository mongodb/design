import React from "react";
import { css } from "@emotion/css";
import Card from "@leafygreen-ui/card";
import { Body, H3, Link } from "@leafygreen-ui/typography";
import { Foundations, Resources } from "@/components/glyphs";
import { spacing } from "@leafygreen-ui/tokens";
import { useRouter } from "next/navigation";

const imageMap = {
  Foundations: Foundations,
  Resources: Resources,
} as const;

type HomeCardProps = JSX.IntrinsicElements["div"] & {
  title: "Foundations" | "Resources";
  description: string;
  link?: string;
};

export function HomeCard({ title, description, link, ...rest }: HomeCardProps) {
  const Graphic = imageMap[title];
  const router = useRouter();

  return (
    <Card
      className={css`
        height: 350px;
      `}
      {...rest}
    >
      <H3
        className={css`
          margin-bottom: ${spacing[200]}px;
          position: relative;
        `}
      >
        {title}
      </H3>
      <Body baseFontSize={16}>{description}</Body>
      {link && (
        <Link
          as="button"
          className={css`
            padding-top: ${24}px;
          `}
          arrowAppearance="persist"
          onClick={() => router.push(link)}
        >
          Learn More
        </Link>
      )}
      <Graphic
        aria-hidden
        className={css`
          position: absolute;
          bottom: 0;
          right: 0;
        `}
      />
    </Card>
  );
}
