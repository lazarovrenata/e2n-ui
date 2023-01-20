import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Layout/Container',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card
    header="Das ist eine Überschrift"
    content={<div>Das hier ist Content.</div>}
  />
);

export const Default = Template.bind({});
