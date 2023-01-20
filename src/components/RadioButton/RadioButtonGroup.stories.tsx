import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButtonGroup } from './RadioButtonGroup';

export default {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
  args: {
    disabled: false,
  },
  parameters: {
    controls: {
      exclude: ['options'],
    },
  },
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <RadioButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      label: 'Option 1',
      id: 'option-1',
      value: 'option1',
      name: 'radio-group',
    },
    {
      label: 'Option 2',
      id: 'option-2',
      value: 'option2',
      name: 'radio-group',
    },
    {
      label: 'Option 3',
      id: 'option-3',
      value: 'option3',
      name: 'radio-group',
    },
  ],
  label: 'Select your option',
};
