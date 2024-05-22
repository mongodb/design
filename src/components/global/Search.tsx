import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Fuse, { IFuseOptions } from 'fuse.js';
import { SearchInput, SearchResult } from '@leafygreen-ui/search-input';
import { components } from '@/utils/components';

const fuseOptions = {
  includeScore: true,
  keys: ['name', 'subComponents'],
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

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      setSearchTerm(term);
      setResults(search(term));
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
    >
      {results.map(item => (
        <SearchResult
          key={item.name}
          description={item.group.split('-').join(' ')}
          href={item.navPath ?? '/'}
          as={Link}
        >
          {item.name}
        </SearchResult>
      ))}
    </SearchInput>
  );
}
