import { Meta, StoryObj } from '@storybook/react';
import { MenuBar, PageContent, Sidenav } from '../../Mock';
import { ContentWithSidenav } from './ContentWithSidenav';
import { ContentWithHeader } from '../ContentWithHeader';

const meta: Meta<typeof ContentWithSidenav> = {
  title: 'Layout/Pages/ContentWithSidenav',
  component: ContentWithSidenav,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    Sidenav: {
      control: false,
    },
    Main: {
      control: false,
    },
  },
};
export default meta;

/**
 * Simple page with header and content.
 */
export const Default: StoryObj<typeof ContentWithSidenav> = {
  render: (args) => {
    return (
      <ContentWithHeader
        Header={<MenuBar />}
        Main={<ContentWithSidenav Sidenav={args.Sidenav} Main={args.Main} />}
      />
    );
  },
  args: {
    Sidenav: <Sidenav />,
    Main: PageContent,
  },
};
