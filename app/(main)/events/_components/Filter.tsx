'use client';

import { useEffect, useState } from 'react';
import FilterSelect from './FilterSelect';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import LocationSelect from '../../../../components/LocationSelect';
import { Button } from '@/components/ui/button';

const freeOptions = [
  {
    name: 'Free',
    slug: 'true',
  },
  {
    name: 'Paid',
    slug: 'false',
  },
];

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/categories');
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (name: string, value: string) => {
    const currentQuery = queryString.parse(params.toString());

    if (value === 'all') {
      delete currentQuery[name];
    } else {
      currentQuery[name] = value;
    }

    const url = queryString.stringifyUrl(
      {
        url: '/events',
        query: currentQuery,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };

  const resetFilter = () => {
    const currentQuery = queryString.parse(params.toString());
    delete currentQuery['category'];
    delete currentQuery['location'];
    delete currentQuery['isFree'];

    const url = queryString.stringifyUrl(
      {
        url: '/events',
        query: currentQuery,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };

  return (
    <div className='flex flex-wrap justify-center items-center gap-3'>
      <FilterSelect
        label='All Categories'
        initialValue={params.get('category') || 'all'}
        name='category'
        options={categories}
        onChange={(value) => handleChange('category', value)}
      />
      <LocationSelect
        value={params.get('location') || 'all'}
        onChange={(value) => handleChange('location', value)}
      />
      <FilterSelect
        label='Free + Paid'
        initialValue={params.get('isFree') || 'all'}
        name='isFree'
        options={freeOptions}
        onChange={(value) => handleChange('isFree', value)}
      />
      <Button
        onClick={resetFilter}
        size='sm'
        variant='destructive'
        className='h-10 text-sm'>
        Reset Filter
      </Button>
    </div>
  );
};

export default Filter;
