import { kebabCase } from 'lodash';
import { BaseLayoutProps } from 'utils/ContentStack/types';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { Subtitle } from '@leafygreen-ui/typography';

import { TSDocPropTableSection } from './TSDocPropTable/PropTableSection';
import { InstallInstructions } from './InstallInstructions';

function CodeDocs({
  componentKebabCaseName,
  changelog,
  tsDoc,
}: BaseLayoutProps & { tsDoc?: Array<CustomComponentDoc> }) {
  const tsDocArray = tsDoc?.sort(
    (
      { displayName: a }: CustomComponentDoc,
      { displayName: b }: CustomComponentDoc,
    ) => {
      // Display names that match the package name are sorted first
      if (kebabCase(a) === componentKebabCaseName) return -1;
      else if (kebabCase(b) === componentKebabCaseName) return 1;
      // Next are display names that include the package name
      else if (kebabCase(a).includes(componentKebabCaseName)) return -1;
      else if (kebabCase(b).includes(componentKebabCaseName)) return 1;
      // The rest of the package components are sorted alphabetically
      else return a.localeCompare(b);
    },
  );

  return (
    <>
      <InstallInstructions
        componentKebabCaseName={componentKebabCaseName}
        changelog={changelog}
      />
      {tsDocArray && tsDocArray.length > 0 ? (
        <TSDocPropTableSection tsDocArray={tsDocArray} />
      ) : (
        <Subtitle>No prop definitions found</Subtitle>
      )}
    </>
  );
}

CodeDocs.displayName = 'CodeDocs';

export default CodeDocs;
