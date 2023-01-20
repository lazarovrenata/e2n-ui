import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { ComponentMeta } from '@storybook/react';
import { NavLink } from './NavItem';
import { LinkSideNavItem } from './SideNav';

export default {
  title: 'Layout/SideNav/NavItem',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const item: LinkSideNavItem = {
  name: 'Verträge',
  icon: faFileContract,
  href: 'example.com',
};

export const Default = () => (
  <div style={{ width: 200 }}>
    <NavLink item={item} />
  </div>
);
