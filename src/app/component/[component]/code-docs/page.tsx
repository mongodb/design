"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { TableSkeleton } from "@leafygreen-ui/skeleton-loader";
import { spacing } from "@leafygreen-ui/tokens";
import { InstallCard, PropsTable, VersionCard } from "@/components/code-docs";
import { components } from "@/utils";
import {
  TSDocResponse,
  PropTableState,
  mergeProps,
} from "@/components/code-docs";

import { getTSDocFromServer, getChangelogFromServer } from "./server";

/*
 * TODO:
 * Broken components:
 * SideNav: Item props don't render
 * Understand null defaults (and fix)
 */

export default function Page({ params }: { params: { component: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [componentProps, setComponentProps] = useState<Array<PropTableState>>(
    []
  );

  useEffect(() => {
    if (!params.component) {
      return;
    }

    const component = params.component;
    const subComponents = components.find(
      (componentMeta) =>
        componentMeta.name.toLowerCase().replace(/\s/g, "") ===
        component.split("-").join("")
    )?.subComponents;

    getTSDocFromServer(component)
      .then((response: Array<TSDocResponse>) => {
        if (response != null) {
          if (!!subComponents) {
            const propTables = response.filter((response) =>
              subComponents.includes(response.displayName)
            );

            const reducedPropTables: Array<PropTableState> = propTables.reduce(
              (acc: Array<PropTableState>, value: TSDocResponse) => {
                const mergedProps = mergeProps(value.props);
                return [
                  ...acc,
                  { name: value.displayName, props: mergedProps },
                ];
              },
              []
            );

            setComponentProps(reducedPropTables);
          } else {
            const centralProps = response.find((response) => {
              return response.displayName
                .toLowerCase()
                .replace(/\s/g, "")
                .includes(component.toLowerCase().split("-").join(""));
            });
            const mergedProps = mergeProps(centralProps?.props);
            setComponentProps([{ name: component, props: mergedProps }]);
          }
        }
      })
      .finally(() => setIsLoading(false));
  }, [params.component]);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: ${spacing[800]}px;
      `}
    >
      <div
        className={css`
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: ${spacing[800]}px;
        `}
      >
        <InstallCard component={params.component} />
        <VersionCard
          component={params.component}
          getChangelog={getChangelogFromServer}
        />
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        componentProps.map(({ name, props }) => {
          return <PropsTable key={name} name={name} props={props} />;
        })
      )}
    </div>
  );
}
