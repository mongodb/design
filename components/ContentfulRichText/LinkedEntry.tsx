import { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import { getEntryById } from 'utils/getContentfulResources';
import EmbeddedEntry from './EmbeddedEntry';

const LinkedEntry = ({ sysId }) => {
  const [entry, setEntry] = useState<Entry<unknown>>();

  useEffect(() => {
    getEntryById(sysId)
      .then(entry => {
        setEntry(entry);
      })
      .catch(error => {
        console.error(error);
      });
  }, [sysId]);

  if (!entry) {
    return <>Loading...</>;
  } else {
    return <EmbeddedEntry nodeTarget={entry} />;
  }
};

export default LinkedEntry;
