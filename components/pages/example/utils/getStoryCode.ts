import { createElement, ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { ComponentStoryFn, Meta } from '@storybook/react';
import pascalcase from 'pascalcase';

/**
 * Returns example code for the given component data
 */
export function getStoryCode({
  componentName,
  meta,
  StoryFn,
  knobValues,
}: {
  componentName: string;
  meta?: Meta<any>;
  StoryFn?: ComponentStoryFn<any>;
  knobValues?: { [arg: string]: any };
}): string | undefined {
  const useStorySourceForComponents = ['typography'];

  const getStoryJSX = (element: ReactNode, displayName: string): string =>
    element
      ? reactElementToJSXString(element, {
          displayName: (child: ReactNode) =>
            // @ts-expect-error - correct type for `child` is too verbose
            child?.type?.displayName ?? pascalcase(displayName),
          showFunctions: true,
          showDefaultProps: true,
          useBooleanShorthandSyntax: false,
          useFragmentShortSyntax: true,
        })
      : '';

  const getStorySourceCode = (meta?: Meta<any>) => {
    if (meta && meta.parameters) {
      const {
        parameters: { default: defaultStoryName, storySource },
      } = meta;

      const locationsMap = defaultStoryName
        ? storySource.locationsMap[defaultStoryName]
        : Object.values(storySource.locationsMap)[0];
      const lines = (storySource.source as string).match(/^.*$/gm);

      const storyCode = lines
        ?.slice(
          locationsMap?.startLoc?.line - 1,
          locationsMap?.endLoc?.line - 1,
        )
        .join('\n');
      return storyCode;
    }
  };

  /**
   * If this is the Typography component,
   * we use the original story code,
   * otherwise we convert the component to JSX
   */
  if (useStorySourceForComponents.includes(componentName)) {
    return getStorySourceCode(meta);
  } else {
    const renderedStory = StoryFn
      ? createElement(StoryFn, { ...knobValues })
      : undefined;
    return getStoryJSX(renderedStory, componentName);
  }
}
