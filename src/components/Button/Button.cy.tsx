import { Button } from './Button';

describe('button component', () => {
  it('renders', () => {
    cy.mount(<Button label="Click me" />);
    cy.get('button').should('contain.text', 'Hello');
  });
});
