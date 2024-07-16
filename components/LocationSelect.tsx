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
import { Loader2, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedLocation, setSelectedLocation] = useState<Option | null>(null);

  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/locations/regencies/${value}`
        );
        const result = await response.json();
        console.log(result.data);
        setSelectedLocation(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (value !== 'all') {
      fetchLocationDetails();
    }
  }, [value]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/v1/locations/regencies?name=${debouncedSearch}`
        );
        const result = await response.json();
        console.log(result.data);
        setOptions(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (debouncedSearch) {
      fetchLocations();
    }
  }, [debouncedSearch]);

  const handleChange = (option: Option) => {
    setSelectedLocation(option);
    onChange(option.code);
  };

  const resetSearch = () => {
    setSearch('');
    setOptions([]);
    inputRef.current?.focus();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className={cn('bg-white h-10 text-sm hover:bg-white', className)}>
          {value && value !== 'all'
            ? selectedLocation?.name
            : 'Select Location'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-64'>
        <div className='relative'>
          <Input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search location'
          />
          {search && (
            <button
              onClick={resetSearch}
              className='hover:bg-slate-100 p-1 rounded-full absolute top-1/2 -translate-y-1/2 right-2'>
              <X className='size-4 text-slate-500' />
            </button>
          )}
        </div>

        {!debouncedSearch && (
          <DropdownMenuCheckboxItem
            checked={value === 'all'}
            onCheckedChange={() => onChange('all')}>
            All location
          </DropdownMenuCheckboxItem>
        )}
        {loading ? (
          <div className='flex items-center justify-center h-10'>
            <Loader2 className='size-4 animate-spin' />
          </div>
        ) : options.length > 0 ? (
          <div>
            {options.map((option) => (
              <DropdownMenuCheckboxItem
                key={option.code}
                checked={option.code === value}
                onCheckedChange={() => handleChange(option)}>
                {option.name}
              </DropdownMenuCheckboxItem>
            ))}
          </div>
        ) : (
          search &&
          debouncedSearch && (
            <div className='p-4 text-sm text-center'>No locations found.</div>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocationSelect;
