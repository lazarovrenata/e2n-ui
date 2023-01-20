import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Callout } from './Callout';

export default {
  title: 'Components/Callout',
  component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'error',
  message: 'Diese Aktion konnte nicht ausgeführt werden.',
};
