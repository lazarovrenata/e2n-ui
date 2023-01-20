import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Button } from '..';
import { Drawer } from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <Button label="Öffnen" onClick={() => setIsOpen(!isOpen)} />
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header="Terminal erstellen"
        enableDismiss={true}
        footer={
          <div className="d-flex justify-content-end">
            <Button label="Speichern" />
          </div>
        }
        position="right">
        <p>The drawer content!</p> <input type="text" />{' '}
      </Drawer>
    </div>
  );
};
