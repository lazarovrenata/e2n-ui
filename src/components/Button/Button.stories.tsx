import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    docs: { page: mdx },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'primary',
};
