import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Components/Buttons/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup>
    <Button label="Button 1" fill="outline" />
    <Button label="Button 2" fill="outline" />
    <Button label="Button 3" fill="outline" />
  </ButtonGroup>
);

export const Basic = Template.bind({});
