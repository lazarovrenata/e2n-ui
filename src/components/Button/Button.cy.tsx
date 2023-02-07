import { Button } from './Button';

describe('button component', () => {
  it('renders', () => {
    cy.mount(<Button>Click me</Button>);
    cy.get('button').should('contain.text', 'Click me');
  });
});
