import { TextField } from './TextField';

export default {
  title: 'Components/TextField/Default',
  component: TextField,
};

export const Default = () => (
  <TextField placeholder="Type something…" width={300} label="TextField" />
);

export const ValidationErrorState = () => (
  <TextField
    placeholder="Type something…"
    width={300}
    label="TextField"
    isValid={false}
    description="postcode must be at least 10 characters"
  />
);
