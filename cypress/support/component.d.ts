import { mount } from 'cypress/react18';

declare namespace Cypress {
  interface Chainable {
    mount: typeof mount;
  }
}
