import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';
import Fuse, { IFuseOptions } from 'fuse.js';
import debounce from 'lodash/debounce';
import { SearchInput, SearchResult } from '@leafygreen-ui/search-input';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(components);

  const search = useFuseSearch(components, fuseOptions);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setResults(search(term));
    }, 300),
    [search],
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      setSearchTerm(term);

      debouncedSearch(term);
    },
    [search],
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
        margin: 0 16px 24px 16px;
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
          as={Link}
        >
          {item.name}
        </SearchResult>
      ))}
    </SearchInput>
  );
}
