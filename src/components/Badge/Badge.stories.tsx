import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Nicht zugewiesen',
  variant: 'success',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Download',
  icon: faDownload,
};
