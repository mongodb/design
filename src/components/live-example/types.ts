import React from "react";

export interface Data {
  LiveExample: React.ReactElement;
  allData: {
    default: { args: Array<string>; argTypes: Array<string> };
  };
}

export type KnobProps = {
  [key: string]: { [key: string]: any };
};

export type ComponentProps = { [key: string]: any };

export type Knobs =
  | "string"
  | "text"
  | "number"
  | "range"
  | "date"
  | "boolean"
  | "array"
  | "enum"
  | "select"
  | "radio"
  | "none";
