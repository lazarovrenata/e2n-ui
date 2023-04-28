import { ModalDialog } from './ModalDialog';
import { useState } from 'react';
import { Button } from '../Button';
import { theme } from '../../theme/default';

export default {
  title: 'Layout/ModalDialog',
  component: ModalDialog,
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        {isOpen && (
          <ModalDialog
            title="E-Mail-Adresse löschen"
            onClose={() => setIsOpen(false)}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.md,
              }}>
              <div>
                Bist Du Dir sicher, dass Du die E-Mail-Adresse{' '}
                <strong>foo@example.com</strong> von der Blacklist löschen
                möchtest?
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  gap: theme.spacing.md,
                }}>
                <Button fill="outline" onClick={() => setIsOpen(false)}>
                  Abbrechen
                </Button>
                <Button>Löschen</Button>
              </div>
            </div>
          </ModalDialog>
        )}
      </>
    );
  },
};
