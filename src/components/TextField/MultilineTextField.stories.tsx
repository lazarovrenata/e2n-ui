import { Story } from '@storybook/react';
import {
  MultilineTextField,
  MultilineTextFieldProps,
} from './MultilineTextField';

export default {
  title: 'Components/TextField/Multiline',
  component: MultilineTextField,
};

export const Default: Story<MultilineTextFieldProps> = () => (
  <MultilineTextField
    label="Label"
    placeholder="Type something ..."
    description="Hier steht eine Beschreibung"
    defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  />
);

export const Resizable = () => (
  <MultilineTextField
    label="Label"
    placeholder="Type something ..."
    resizable={false}
    width={500}
    height={75}
    description="Hier steht eine Beschreibung"
    defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  />
);

export const WithValidationErrors = () => (
  <MultilineTextField
    label="Label"
    placeholder="Type something ..."
    isValid={false}
    description="Hier steht eine Beschreibung"
    defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  />
);
