// @ts-expect-error
import CheckmarkWithCircleIcon from "@leafygreen-ui/icon/dist/CheckmarkWithCircle";
// @ts-expect-error
import ImportantWithCircleIcon from "@leafygreen-ui/icon/dist/ImportantWithCircle";
// @ts-expect-error
import InfoWithCircleIcon from "@leafygreen-ui/icon/dist/InfoWithCircle";
// @ts-expect-error
import XWithCircle from "@leafygreen-ui/icon/dist/XWithCircle";
import { palette } from "@leafygreen-ui/palette";
import { color } from "@leafygreen-ui/tokens";
import { Variant } from "./types";

export const Icons: Record<Variant, React.ComponentType<any>> = {
  [Variant.Info]: InfoWithCircleIcon,
  [Variant.Caution]: ImportantWithCircleIcon,
  [Variant.Dont]: XWithCircle,
  [Variant.Do]: CheckmarkWithCircleIcon,
};

export const BorderColors = (theme: "light" | "dark") => {
  return {
    [Variant.Info]: theme === "dark" ? palette.blue.light2 : palette.blue.base,
    [Variant.Caution]:
      theme === "dark" ? palette.yellow.light2 : palette.yellow.base,
    [Variant.Dont]: color[theme].border.error.default,
    [Variant.Do]: color[theme].border.success.default,
  };
};

export const IconColors = (theme: "dark" | "light") => {
  return {
    [Variant.Info]: theme === "dark" ? palette.blue.light2 : palette.blue.base,
    [Variant.Caution]: color[theme].icon.warning.default,
    [Variant.Dont]: color[theme].icon.error.default,
    [Variant.Do]: color[theme].icon.success.default,
  };
};

export const TextColors = (theme: "dark" | "light") => {
  if (theme === "dark") {
    return {
      [Variant.Info]: palette.blue.light2,
      [Variant.Caution]: palette.yellow.light2,
      [Variant.Dont]: palette.red.base,
      [Variant.Do]: palette.green.base,
    };
  } else {
    return {
      [Variant.Info]: palette.blue.dark2,
      [Variant.Caution]: palette.yellow.dark2,
      [Variant.Dont]: palette.red.base,
      [Variant.Do]: palette.green.dark2,
    };
  }
};

export const VariantHeaders: Record<Variant, string> = {
  [Variant.Info]: "Info",
  [Variant.Caution]: "Use with caution",
  [Variant.Dont]: "Don't",
  [Variant.Do]: "Do",
};
