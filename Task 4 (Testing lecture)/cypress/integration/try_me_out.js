describe('Writing on our own', () => {
  it('should open up a page', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('include', 'Task 4')
  });

  it('should change search value', () => {
    cy.get('[name="searchMovie"]').type('The Matrix');
  });
});
