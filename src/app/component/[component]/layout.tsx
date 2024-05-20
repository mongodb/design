"use client";

import { css } from "@emotion/css";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

import IconButton from "@leafygreen-ui/icon-button";
import { CodeSandbox, Figma, Github } from "@/components/glyphs";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { Tabs, Tab } from "@leafygreen-ui/tabs";
import { color, spacing } from "@leafygreen-ui/tokens";
import { H2 } from "@leafygreen-ui/typography";

import useComponentFields from "@/hooks/useComponentFields";
import { getGithubLink } from "@/utils";

const liveExamplePath = "live-example";
const designDocsPath = "design-docs";
const codeDocsPath = "code-docs";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentComponent = pathname.split("/")[2];
  const { theme } = useDarkMode();

  const component = useComponentFields({ componentName: currentComponent });

  const getSelected = () => {
    const suffix = pathname.split("/")[3];
    if (suffix === liveExamplePath) {
      return 0;
    }

    if (suffix === designDocsPath) {
      return 1;
    }

    if (suffix === codeDocsPath) {
      return 2;
    }
  };

  const externalLinks = [
    {
      'aria-label': 'View Figma file',
      href: component?.figmaurl,
      icon: <Figma />,
    },
    {
      'aria-label': 'View GitHub package',
      href: getGithubLink(component?.private ?? false, component?.title),
      icon: <Github />,
    },
    {
      'aria-label': 'Edit in CodeSandbox',
      href: component?.codesandbox_url?.href,
      icon: <CodeSandbox />,
    },
  ]

  return (
    <div
      className={css`
        min-height: 100vh;
      `}
    >
      <H2
        className={css`
          text-transform: capitalize;
          margin-bottom: ${spacing[600]}px;
        `}
      >
        {currentComponent.split("-").join(" ")}
      </H2>
      <Tabs
        selected={getSelected()}
        aria-label="main tabs"
        className={css`
          margin-bottom: ${spacing[800]}px;
        `}
        inlineChildren={
          <div
            className={css`
              display: flex;
              gap: ${spacing[200]}px;
              border-bottom: 1px solid ${color[theme].border.secondary.default};
              flex: 1;
              justify-content: flex-end;
              height: 100%;
            `}
          >
            {externalLinks.map(({ 'aria-label': ariaLabel, href, icon }, index) => (
              <IconButton
                key={ariaLabel + index}
                aria-label={ariaLabel}
                size="large"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </IconButton>
            ))}
          </div>
        }
      >
        <Tab
          onClick={() =>
            router.push(`/component/${currentComponent}/${liveExamplePath}`)
          }
          name="Live Example"
        >
          <></>
        </Tab>
        <Tab
          onClick={() =>
            router.push(`/component/${currentComponent}/${designDocsPath}`)
          }
          name="Design Documentation"
        >
          <></>
        </Tab>
        <Tab
          onClick={() =>
            router.push(`/component/${currentComponent}/${codeDocsPath}`)
          }
          name="Code Documentation"
        >
          <></>
        </Tab>
      </Tabs>

      <div>{children}</div>
    </div>
  );
}
