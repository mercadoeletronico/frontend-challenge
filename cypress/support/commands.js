// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Comando para interceptar API calls
Cypress.Commands.add('mockPreOrderAPI', (fixture = 'preOrder') => {
  cy.intercept('GET', '/api/orders/**', {
    statusCode: 200,
    fixture: fixture
  }).as('getPreOrder')
})

Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('[data-cy="loading"]').should('not.exist')
  cy.get('[data-cy="pre-order"]').should('be.visible')
})

Cypress.Commands.add('testResponsive', (sizes = ['iphone-6', 'ipad-2', 'macbook-15']) => {
  sizes.forEach(size => {
    cy.viewport(size)
  })
})

Cypress.Commands.add('checkA11y', () => {
  cy.get('button').should('have.attr', 'type').or('have.attr', 'role')
  cy.get('img').should('have.attr', 'alt')
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
