'use client';

import { useEffect, useState } from 'react';
import FilterSelect from './FilterSelect';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';

const locations = [
  {
    label: 'Jakarta',
    slug: 'music-and-entertainment',
  },
  {
    label: 'Bandung',
    slug: 'food-and-drink',
  },
  {
    label: 'Batam',
    slug: 'business',
  },
];

const freeOptions = [
  {
    label: 'Free',
    slug: 'music-and-entertainment',
  },
  {
    label: 'Paid',
    slug: 'food-and-drink',
  },
];

const Filter = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    location: 'all',
    price: 'all',
  });

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

  return (
    <div className='flex items-center gap-3'>
      <FilterSelect
        label='All Categories'
        name='category'
        options={categories}
        onChange={(value) => handleChange('category', value)}
      />
      <FilterSelect
        label='All Locations'
        name='location'
        options={locations}
        onChange={(value) => handleChange('location', value)}
      />
      <FilterSelect
        label='Free + Paid'
        name='price'
        options={freeOptions}
        onChange={(value) => handleChange('price', value)}
      />
    </div>
  );
};

export default Filter;
