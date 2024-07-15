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
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Option {
  code: string;
  name: string;
}

interface LocationSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const LocationSelect = ({
  value,
  onChange,
  className,
}: LocationSelectProps) => {
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
          className={cn('bg-white h-10 text-sm hover:bg-white', className)}>
          {value
            ? options.find((option) => option.code === value)?.name
            : 'Select Location'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-64'>
        <div className='relative'>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search location'
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className='hover:bg-slate-100 p-1 rounded-full absolute top-1/2 -translate-y-1/2 right-2'>
              <X className='size-4 text-slate-500' />
            </button>
          )}
        </div>

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
                checked={option.code === value}
                onCheckedChange={() => onChange(option.code)}>
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
