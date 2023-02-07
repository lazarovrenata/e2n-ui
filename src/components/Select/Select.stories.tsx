import { Select } from '.';

export default {
  title: 'components/Select',
  component: Select,
};

const options: Array<{ value: string; label: string }> = [
  { value: 'successMain', label: 'successMain' },
  { value: 'errorLight', label: 'errorLight' },
  { value: 'primaryMain', label: 'primaryMain' },
];

export const Default = () => <Select options={options} label="Label" />;

export const Multi = () => <Select isMulti options={options} />;

export const MultiWithAnimation = () => (
  <Select isMulti options={options} isAnimated />
);
