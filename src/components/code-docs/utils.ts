import { pickBy } from "lodash";
import { TSDocResponse } from "./types";

const InheritablePropGroup = [
  "HTMLAttributes",
  "DOMAttributes",
  "AriaAttributes",
  "SVGAttributes",
  "String",
] as const;

export const isInheritableGroup = (_: never, key: any) =>
  InheritablePropGroup.includes(key) || key.endsWith("HTMLAttributes");

function getInheritedProps(componentProps: TSDocResponse["props"] | undefined) {
  return Object.entries(pickBy(componentProps, isInheritableGroup)).map(
    ([groupName]: [string, TSDocResponse["props"]]) => ({
      groupName,
    })
  );
}

export function mergeProps(componentProps: TSDocResponse["props"] | undefined) {
  if (!componentProps) {
    return {};
  }

  let mergedProps = {};

  Object.keys(componentProps).forEach((key) => {
    if (typeof componentProps[key] === "object") {
      mergedProps = { ...mergedProps, ...componentProps[key] };
    }
  });

  return {
    componentProps: mergedProps,
    inheritedProps: getInheritedProps(componentProps),
  };
}

export function getHTMLAttributesLink(groupName: string) {
  switch (groupName) {
    case "SVGAttributes":
      return "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute";
    case "HTMLAttributes":
      return "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes";

    default: {
      let tag = groupName
        .slice(0, groupName.indexOf("HTMLAttributes"))
        .toLowerCase();

      tag = tag == "anchor" ? "a" : tag;
      return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`;
    }
  }
}

export function formatType(type: { raw?: string; name?: string; value?: any }) {
  if (!type) {
    return;
  }

  if (type.raw === "boolean" || type.raw === "ReactNode") {
    return type.raw;
  }

  if (type.value && Array.isArray(type.value)) {
    return type.value.map((obj) => obj.value).join(", ");
  }

  return type.name;
}
