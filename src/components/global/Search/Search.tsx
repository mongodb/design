import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Fuse, { IFuseOptions } from 'fuse.js';
import debounce from 'lodash/debounce';
// @ts-expect-error
import LockIcon from '@leafygreen-ui/icon/dist/Lock';
// @ts-expect-error
import UnlockIcon from '@leafygreen-ui/icon/dist/Unlock';
import { SearchInput, SearchResult } from '@leafygreen-ui/search-input';
import { useSession } from '@/hooks';
import { components } from '@/utils/components';

import {
  descriptionStyle,
  searchInputStyle,
  searchResultStyle,
} from './Search.styles';

const fuseOptions = {
  includeScore: true,
  keys: ['name', 'subComponents', 'group'],
};

const useFuseSearch = (data: any[], options: IFuseOptions<any>) => {
  const fuse = new Fuse(data, options);
  return (term: string) =>
    term ? fuse.search(term).map(result => result.item) : data;
};

export function Search() {
  const session = useSession();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(components);

  const search = useFuseSearch(components, fuseOptions);

  const debouncedSearch = debounce((term: string) => {
    setResults(search(term));
  }, 300);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      setSearchTerm(term);

      debouncedSearch(term);
    },
    [debouncedSearch],
  );

  useEffect(() => {
    if (!searchTerm) {
      setResults(components);
    }
  }, [searchTerm]);

  const PrivateIcon = session?.user ? UnlockIcon : LockIcon;

  return (
    <SearchInput
      aria-label="Search Components"
      size="small"
      value={searchTerm}
      onChange={handleSearchChange}
      className={searchInputStyle}
    >
      {results.map(item => (
        <SearchResult
          key={item.name}
          href={item.navPath ?? '/'}
          as={Link}
          description={
            <div className={descriptionStyle}>
              {item.group.split('-').join(' ')}
            </div>
          }
        >
          <div className={searchResultStyle}>
            {item.name}
            {item.isPrivate && <PrivateIcon size="small" />}
          </div>
        </SearchResult>
      ))}
    </SearchInput>
  );
}
