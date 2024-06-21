import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterSelectProps {
  label: string;
  name: string;
  options: any[];
}

const FilterSelect = ({ label, name, options }: FilterSelectProps) => {
  return (
    <Select>
      <SelectTrigger className='border-none w-fit space-x-2'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='all'>{label}</SelectItem>
        {options.map((option) => (
          <SelectItem key={option.slug} value={option.slug}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterSelect;
