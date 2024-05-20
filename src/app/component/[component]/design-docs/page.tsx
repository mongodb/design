"use client";

import { css } from "@emotion/css";

import Card from "@leafygreen-ui/card";

import { ContentstackRichText } from "@/components/content-stack";
import useComponentFields from "@/hooks/useComponentFields";

export default function Page({ params: { component: componentName } }: { params: { component: string } }) {
  const component = useComponentFields({ componentName, includeContent: true });

  return (
    <Card
      className={css`
        max-width: 1000px; // TODO: Make this responsive
      `}
    >
      <ContentstackRichText content={component?.designguidelines} />
    </Card>
  );
}
