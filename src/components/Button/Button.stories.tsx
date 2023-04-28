import { Button, ButtonProps } from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    docs: { page: mdx },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-admin.18.04.23?node-id=303%3A51441&t=tOdmpeO4QYOISGNJ-1',
    },
  },
};

export const Basic = {
  render: (args: ButtonProps) => <Button {...args}>Click me</Button>,
  args: {
    variant: 'primary',
  },
};

