'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/useDebounce';
import React, { useEffect, useState } from 'react';

interface Option {
  code: string;
  name: string;
}

const LocationSelect = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/locations/regencies?name=${debouncedSearch}`
        );
        const result = await response.json();
        console.log(result.data);
        setOptions(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocations();
  }, [debouncedSearch]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='bg-white h-10 text-sm hover:bg-white'>
          Select Location
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-64'>
        <DropdownMenuLabel>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search location'
          />
        </DropdownMenuLabel>

        {options.length > 0 ? (
          <div>
            {!debouncedSearch && (
              <DropdownMenuCheckboxItem
                checked={true}
                onCheckedChange={() => {}}>
                All location
              </DropdownMenuCheckboxItem>
            )}
            {options.map((option) => (
              <DropdownMenuCheckboxItem
                key={option.code}
                checked={parseInt(option.code) === 1101}
                onCheckedChange={() => console.log(option.code)}>
                {option.name}
              </DropdownMenuCheckboxItem>
            ))}
          </div>
        ) : (
          <div className='p-4 text-sm text-center'>No locations found.</div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocationSelect;
