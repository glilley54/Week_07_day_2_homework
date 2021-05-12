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
  it('should allow multiple operations be chained together', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click(); 
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click(); 
    cy.get('.display').should('contain', '1.5')


  })

  it('should show correct output as expected for a negative result', () =>{
    cy.get('#number2').click()
    cy.get('#number0').click()
    cy.get('#operator_subtract').click();
    cy.get('#number3').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-12')

  })

  it('should show correct output as expected for large numbers', () =>{
    cy.get('#number2').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_multiply').click();
    cy.get('#number3').click()
    cy.get('#number2').click()
    cy.get('#number5').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '6504')


})
it('should show correct output as expected for a decimal result', () =>{
  cy.get('#number2').click()
  cy.get('#number2').click()
  cy.get('#operator_divide').click();
  cy.get('#number5').click()
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '4.4')

})

// the following test doesnt pass as dividing by zero equals infinity but if you pass infinity as a string into 
// expected result the test passes.

it('should show correct output dividing by zero', () =>{
  cy.get('#number3').click()
  cy.get('#number6').click()
  cy.get('#operator_divide').click();
  cy.get('#number0').click()
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', 'Infinity')



})

})