import React from 'react';
import FilterSelect from './FilterSelect';

const categories = [
  {
    label: 'Music & Entertainment',
    slug: 'music-and-entertainment',
  },
  {
    label: 'Food & Drink',
    slug: 'food-and-drink',
  },
  {
    label: 'Business',
    slug: 'business',
  },
];

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
  return (
    <div className='flex items-center gap-3'>
      <FilterSelect
        label='All Categories'
        name='category'
        options={categories}
      />
      <FilterSelect label='All Locations' name='category' options={locations} />
      <FilterSelect label='Free + Paid' name='free' options={freeOptions} />
    </div>
  );
};

export default Filter;
