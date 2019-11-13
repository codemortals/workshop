context('Quick Start', () => {
  it('open the quick start guide', () => {
    cy.visit('/');
    cy.get('.toolbar').contains('Welcome');
    cy.get('.content').contains('workshop app is running');
    cy.get('.content pre').contains('ng generate component xyz');
  })
});
