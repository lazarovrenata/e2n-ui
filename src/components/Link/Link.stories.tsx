import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Eine andere Seite</Link>
);

export const Default = Template.bind({});
Default.args = {};
