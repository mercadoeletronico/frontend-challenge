describe('Addresses Accordion', () => {
  beforeEach(() => {
    cy.mockPreOrderAPI()
    cy.visit('/')
    cy.wait('@getPreOrder')
  })

  it('should display addresses accordion', () => {
    cy.contains('Addresses').should('be.visible')

    cy.contains('Ship to').should('be.visible')
    cy.contains('West Plant').should('be.visible')
    cy.contains('Bill to').should('be.visible')
    cy.contains('Pilgrims Pride Corp.').should('be.visible')
    cy.contains('Charge to').should('be.visible')
    cy.contains('Lorem Ipsum').should('be.visible')
  })

  it('should toggle accordion when clicked', () => {

    cy.get('button').contains('Addresses').as('accordionButton')

    cy.contains('Ship to').should('be.visible')

    cy.get('@accordionButton').click()
    cy.contains('Ship to').should('not.be.visible')

    cy.get('@accordionButton').click()
    cy.contains('Ship to').should('be.visible')
  })

  it('should display all address information', () => {

    cy.contains('1311 W Washington Blvd, Los Angeles, CA 90006, United States').should('be.visible')
    cy.contains('1301 Glendale Blvd, Los Angeles, CA 90026, USA').should('be.visible')
    cy.contains('2222 Promontory CR, Greeley, CO 22222-9039 - EUA').should('be.visible')
  })

  it('should display contact information for each address', () => {

    cy.contains('Brian Mazda Tetsuo').should('be.visible')
    cy.contains('Barbara Streifes Hasseublad').should('be.visible')
    cy.contains('Z01confirmations@me.com').should('be.visible')
    cy.contains('lorem.ipsum@me.com').should('be.visible')
  })

  it('should display address codes when available', () => {
    cy.contains('#TR01').should('be.visible')

    cy.get('body').should('not.contain', '#null')
  })

  it('should have correct icons for contact information', () => {
    cy.get('svg').should('have.length.greaterThan', 10)
  })
})
