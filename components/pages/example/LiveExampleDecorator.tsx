import { useMemo } from 'react';
import {
  Args,
  DecoratorFn,
  Meta,
  ReactFramework,
  StoryContext,
} from '@storybook/react';
import { clone } from 'lodash';

export const LiveExampleDecorator = ({
  meta,
  children,
}: {
  meta?: Meta<any>;
  children: React.ReactNode;
}): JSX.Element => {
  const Decorator = useMemo(() => {
    const calculatedDecorator = recursiveRenderDecorators(meta, children);
    return calculatedDecorator ?? Decorator;
  }, [children, meta]);

  return Decorator;
};

/** Recursively iterates over the decorators array and nests them */
function recursiveRenderDecorators(
  meta?: Meta<any>,
  children?: React.ReactNode,
  arr?: Array<DecoratorFn>,
): ReturnType<DecoratorFn> | ReactFramework['storyResult'] {
  arr = clone(arr ?? meta?.decorators);

  if (arr) {
    const currentDecorator = arr.splice(0, 1)[0];

    type TMeta = StoryContext<ReactFramework, Args>;

    if (currentDecorator && children && meta) {
      if (arr.length) {
        return currentDecorator(
          () => recursiveRenderDecorators(meta, children),
          meta as TMeta,
        );
      } else {
        const renderedDecorator = currentDecorator(
          () => <>{children}</>,
          meta as TMeta,
        );
        return renderedDecorator;
      }
    }
  }

  // Children, meta, or current decorator not found
  return <>{children}</>;
}
