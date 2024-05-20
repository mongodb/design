export interface TSDocResponse {
  description: string;
  displayName: string;
  methods: Array<any>;
  props: Record<string, any>;
  tags: Record<string, any>;
}

export interface PropTableState {
  name: string;
  props: {
    componentProps?: TSDocResponse["props"];
    inheritedProps?: Array<Record<"groupName", any>>;
  };
}

/** PropGroup names that are inherited from elsewhere */
export const InheritablePropGroup = [
  "HTMLAttributes",
  "DOMAttributes",
  "AriaAttributes",
  "SVGAttributes",
  "String",
] as const;

export type InheritablePropGroup = keyof typeof InheritablePropGroup;
