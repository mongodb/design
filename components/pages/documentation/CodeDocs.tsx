import { BaseLayoutProps } from 'utils/ContentStack/types';
import { InstallInstructions } from './InstallInstructions';
import { Subtitle } from '@leafygreen-ui/typography';
import { TSDocPropTableSection } from './TSDocPropTable/PropTableSection';

function CodeDocs({
  componentKebabCaseName,
  changelog,
  tsDoc: tsDocArray,
}: BaseLayoutProps) {
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
