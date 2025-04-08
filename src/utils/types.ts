export interface SubPathMeta {
  /**
   * Determines the subpath of the component. This is used for routing
   */
  name: string;

  /**
   * Determines the path
   */
  navPath: string;

  /**
   * Determines whether the component is private or not
   */
  isPrivate?: boolean;

  /**
   * Determines whether this should render as a component
   */
  isComponent?: boolean;

  /**
   * Determines what component props to display in the code documentation tab
   */
  subComponents?: Array<string>;
}
