import React, { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Meta } from '@storybook/react';
import { kebabCase } from 'lodash';

import { LiveExampleContext } from '../useLiveExampleState';
import { assertCompleteContext } from '../useLiveExampleState/utils';

/**
 * Returns example code for the given component data
 */
export function getStoryCode(context: LiveExampleContext): string | undefined {
  /** Skip generation, and just use the story source code for these packages */
  const useStorySourceForComponents = ['typography'];

  if (assertCompleteContext(context)) {
    const { componentName, meta, StoryFn, knobValues } = context;

    /**
     * If this is the Typography component,
     * we use the original story code,
     * otherwise we convert the component to JSX
     */
    if (useStorySourceForComponents.includes(componentName)) {
      // fetchStorySource(componentName).then(module => {
      //   parseStorySource(module);
      // });
      return getStorySourceCode(meta);
    } else {
      const renderedStory = React.createElement(StoryFn, { ...knobValues });
      return getStoryJSX(renderedStory);
    }
  }

  /** `getStoryCode` utility that returns a JSX string */
  function getStoryJSX(element: ReactNode) {
    if (element) {
      return reactElementToJSXString(element, {
        showFunctions: true,
        showDefaultProps: false,
        useBooleanShorthandSyntax: false,
        useFragmentShortSyntax: true,
      });
    }
  }

  /** Extracts the story code from the meta `storySource` */
  function getStorySourceCode(meta?: Meta<any>) {
    if (meta && meta.parameters) {
      const {
        parameters: { default: defaultStoryName, storySource },
      } = meta;

      if (storySource) {
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
    }
  }
}

async function fetchStorySource(componentName: string) {
  try {
    return import(`@leafygreen-ui/${kebabCase(componentName)}/stories.js.map`);
  } catch (error) {
    console.warn(error);
  }
}

interface SourceMap {
  file: 'stories.js';
  mappings: string;
  names: Array<string>;
  sources: Array<string>;
  sourcesContent: Array<string>;
  version: number;
}

function parseStorySource(module: { default: string }) {
  const { default: sourceString } = module;
  const sourceMap: SourceMap = JSON.parse(sourceString);
  const { sources, sourcesContent } = sourceMap;

  const indexOfStorySource = sources.findIndex(src => !!src.match(/story/));
  const storySource = sourcesContent[indexOfStorySource];

  const storySourceLines = storySource.split('\n');
}
