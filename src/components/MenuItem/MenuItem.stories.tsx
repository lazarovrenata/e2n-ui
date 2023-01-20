import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './MenuItem';

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
};

export const Default = () => {
  return <MenuItem label="Verträge" />;
};

export const WithIcon = () => {
  return <MenuItem icon={faPeopleRoof} label="Kunden" />;
};
