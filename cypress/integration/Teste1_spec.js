import cy from "cypress"
describe('Primeiro teste', function () {
  it('Visitis', function () {
    cy.visit('http://localhost:3000/')
    cy.get('.number').contains('4510001114')
  })

})