import {
  PropTableState,
  TSDocResponse,
  mergeProps,
} from '@/components/code-docs';
import { findComponent } from '@/utils';
import { kebabCase } from 'lodash';

export function parseComponentPropsFromTSDocs(
  tsDocs: Array<TSDocResponse> | null,
  componentName: string,
): Array<PropTableState> | undefined {
  if (!tsDocs) return;

  const componentMeta = findComponent(componentName); //TODO: needs to look through pattern components
  const subComponents = componentMeta?.subComponents;

  console.log('🔍', { componentName, componentMeta });

  if (!!subComponents) {
    console.log('🏈', { subComponents });
    const propTables = tsDocs.filter(tsdoc =>
      subComponents.includes(tsdoc.displayName),
    );

    const reducedPropTables: Array<PropTableState> = propTables.reduce(
      (acc: Array<PropTableState>, value: TSDocResponse) => {
        const mergedProps = mergeProps(value.props);
        return [...acc, { name: value.displayName, props: mergedProps }];
      },
      [],
    );

    return reducedPropTables;
  } else {
    const centralProps = tsDocs.find(tsdoc => {
      return kebabCase(tsdoc.displayName).includes(kebabCase(componentName));
    });
    const mergedProps = mergeProps(centralProps?.props);

    return [{ name: componentName, props: mergedProps }];
  }
}
