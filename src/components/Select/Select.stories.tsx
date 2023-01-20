import { Select } from '.';

export default {
  title: 'components/Select',
  component: Select,
};

const options: Array<{ value: string; label: string }> = [
  { value: 'green', label: 'green' },
  { value: 'red', label: 'red' },
  { value: 'blue', label: 'blue' },
];

export const Default = () => <Select options={options} label="Label" />;

export const Multi = () => <Select isMulti options={options} />;
