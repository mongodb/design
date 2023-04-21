import React, { FunctionComponentElement, ReactElement } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import prepass from 'react-ssr-prepass'; // lets us traverse the react tree
import pascalcase from 'pascalcase';

import { LiveExampleContext } from '../useLiveExampleState';
import { assertCompleteContext } from '../useLiveExampleState/utils';

/**
 * Returns example code for the given component data
 */
export function getStoryCode(context: LiveExampleContext): string | undefined {
  /** Treat these packages differently */
  const packageNameDoesNotMatchComponent = ['typography'];

  if (assertCompleteContext(context)) {
    const { componentName, StoryFn, knobValues, knobsArray } = context;

    const renderedStory: FunctionComponentElement<any> = React.createElement(
      StoryFn,
      { ...knobValues },
    );

    const componentRoot = getComponentRoot(renderedStory, componentName);

    if (componentRoot) {
      return reactElementToJSXString(componentRoot, {
        showFunctions: true,
        showDefaultProps: false,
        useBooleanShorthandSyntax: false,
        useFragmentShortSyntax: true,
        filterProps: (_, propName) =>
          // Only display props that we allow users to control in the example
          knobsArray.map(knob => knob.name).includes(propName),
      });
    }
  }

  /** Returns the component root we want to generate source code for */
  function getComponentRoot(
    renderedStory: FunctionComponentElement<any>,
    componentName: string,
  ) {
    let isRootSet = false;
    let componentRoot: ReactElement<any> = renderedStory;

    // @ts-expect-error - prepass callback args are incorrectly typed (see FormidableLabs/react-ssr-prepass#86). Need to explicitly re-type them here
    prepass(renderedStory, (element: ReactElement<any>) => {
      if (!isRootSet && isFunctionComponentElement(element)) {
        if (packageNameDoesNotMatchComponent.includes(componentName)) {
          // We take the first element that is not the Story element
          if (!element.type.displayName?.includes('Story')) {
            componentRoot = element;
            isRootSet = true;
          }
        } else if (element.type.displayName === pascalcase(componentName)) {
          componentRoot = element;
          isRootSet = true;
        }
      }
    });

    return componentRoot;
  }
}

/** Returns whether a React Element is a Component vs just an intrinsic element */
function isFunctionComponentElement(
  node: React.ReactElement<any>,
): node is React.FunctionComponentElement<React.JSXElementConstructor<any>> {
  return typeof node === 'object' && typeof node.type === 'function';
}
