import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  paramters: {
    controls: {
      exclude: ['className', 'defaultChecked'],
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Die Richtigkeit der Angaben wurde bestätigt',
  value: 'Option 1',
  onChange: (value) => {
    console.log(value);
  },
};
