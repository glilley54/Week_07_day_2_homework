describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total', () => {
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '759')

  });

  it('should allow arithmetical operations to update the display with the result of the operation', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '14')

  })

})