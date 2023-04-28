import { Meta, StoryObj } from '@storybook/react';
import { Inline } from '.';
import { colorPalette } from '../../../../theme';

const meta: Meta<typeof Inline> = {
  title: 'Layout/Spacers/Inline',
  component: Inline,
  tags: ['autodocs'],
  argTypes: {
    stretch: {
      options: ['start', 'all', 'end', 0, 1, 2],
      control: { type: 'select' },
    },
  },
};
export default meta;

/**
 * Default use of Inline component.
 */
export const Default: StoryObj<typeof Inline> = {
  render: (args) => (
    <div style={{ backgroundColor: colorPalette.grey500 }}>
      <Inline {...args}>
        <div style={{ backgroundColor: colorPalette.errorMain }}>Item 1</div>
        <div style={{ backgroundColor: colorPalette.infoMain }}>Item 2</div>
        <div style={{ backgroundColor: colorPalette.warningMain }}>Item 3</div>
      </Inline>
    </div>
  ),
  args: {
    justify: 'center',
    align: 'center',
    gap: 'md',
    stretch: 2,
  },
};
