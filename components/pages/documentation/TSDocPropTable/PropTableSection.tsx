import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { css } from '@leafygreen-ui/emotion';

import { TSDocPropTable } from './TSDocPropTable';

export const TSDocPropTableSection = ({
  tsDocArray,
}: {
  tsDocArray: Array<CustomComponentDoc>;
}) => (
  <>
    {tsDocArray?.map(doc => (
      <TSDocPropTable
        key={doc.displayName}
        tsDoc={doc}
        className={css`
          margin-block: 2em;
        `}
      />
    ))}
  </>
);
