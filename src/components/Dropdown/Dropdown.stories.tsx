import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'Layout/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      content={<div>Dropdown content</div>}
      isOpen={isOpen}
      setIsOpen={setIsOpen}>
      <Button>Dropdown öffnen </Button>
    </Dropdown>
  );
};
