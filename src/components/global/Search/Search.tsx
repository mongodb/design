'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Fuse, { IFuseOptions } from 'fuse.js';
import debounce from 'lodash/debounce';
import { SearchInput, SearchResult } from '@leafygreen-ui/search-input';
import { components } from '@/utils/components';

import { searchInputStyle, searchResultStyle } from './Search.styles';

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
      className={searchInputStyle}
    >
      {results.map(item => (
        <SearchResult key={item.name} href={item.navPath ?? '/'} as={Link}>
          <div className={searchResultStyle}>{item.name}</div>
        </SearchResult>
      ))}
    </SearchInput>
  );
}
