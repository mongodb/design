import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';
import Fuse, { IFuseOptions } from 'fuse.js';
import debounce from 'lodash/debounce';
// @ts-expect-error
import LockIcon from '@leafygreen-ui/icon/dist/Lock';
import { SearchInput, SearchResult } from '@leafygreen-ui/search-input';
import { spacing } from '@leafygreen-ui/tokens';
import { useSession } from '@/hooks';
import { components } from '@/utils/components';

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

  return (
    <SearchInput
      aria-label="Search Components"
      size="small"
      value={searchTerm}
      onChange={handleSearchChange}
      className={css`
        margin: ${spacing[400]}px ${spacing[600]}px;
      `}
    >
      {results.map(item => (
        <SearchResult
          key={item.name}
          description={
            <div
              className={css`
                text-transform: capitalize;
              `}
            >
              {item.group.split('-').join(' ')}
            </div>
          }
          href={item.navPath ?? '/'}
          // @ts-expect-error Polymorphic
          as={Link}
        >
          <div
            className={css`
              display: flex;
              align-items: center;

              gap: ${spacing[200]}px;
            `}
          >
            {item.name}
            {item.isPrivate && !session?.user && <LockIcon size="small" />}
          </div>
        </SearchResult>
      ))}
    </SearchInput>
  );
}
