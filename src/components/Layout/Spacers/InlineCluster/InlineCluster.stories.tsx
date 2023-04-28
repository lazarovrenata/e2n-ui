import { Meta, StoryObj } from '@storybook/react';
import { InlineCluster } from './InlineCluster';
import { colorPalette } from '../../../../theme';

const meta: Meta<typeof InlineCluster> = {
  title: 'Layout/Spacers/InlineCluster',
  component: InlineCluster,
  tags: ['autodocs'],
};
export default meta;

/**
 * Default use of InlineCluster component.
 */
export const Default: StoryObj<typeof InlineCluster> = {
  render: (args) => (
    <div style={{ backgroundColor: colorPalette.grey400 }}>
      <InlineCluster {...args}>
        <div style={{ backgroundColor: colorPalette.errorMain }}>Item 1</div>
        <div style={{ backgroundColor: colorPalette.infoMain }}>Item 2</div>
        <div style={{ backgroundColor: colorPalette.warningMain }}>Item 3</div>
      </InlineCluster>
    </div>
  ),
  args: {
    gap: 'md',
    align: 'center',
    justify: 'center',
  },
};
