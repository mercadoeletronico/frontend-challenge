describe('Home Page - MercadoE', () => {
  beforeEach(() => {
    cy.mockPreOrderAPI()
    cy.visit('/')
  })

  it('should load the home page successfully', () => {
    cy.wait('@getPreOrder')
    cy.contains('Pre-Order').should('be.visible')
    cy.contains('MTP West Buyer').should('be.visible')
  })

  it('should display pre-order information correctly', () => {
    cy.wait('@getPreOrder')

    cy.contains('4510001114').should('be.visible')
    cy.contains('#ME1223344').should('be.visible')
    cy.contains('MTP West Buyer').should('be.visible')
    cy.contains('Need to confirm').should('be.visible')
  })

  it('should display supplier information correctly', () => {
    cy.wait('@getPreOrder')

    cy.contains('Motion Industries INC.').should('be.visible')
    cy.contains('#101908').should('be.visible')
    cy.contains('CNPJ: 00.823.053/0001-02').should('be.visible')
    cy.contains('jack.jeff.applejack@motion.com').should('be.visible')
  })

  it('should display contact information', () => {
    cy.wait('@getPreOrder')

    cy.contains('Jacksonville Group (Jason Burn)').should('be.visible')
    cy.contains('jacksonvillegroup@me.com').should('be.visible')
    cy.contains('903-575-3050').should('be.visible')
  })

  it('should display formatted dates', () => {
    cy.wait('@getPreOrder')

    cy.contains('Created at').should('be.visible')
  })

  it('should handle loading state', () => {
    cy.visit('/')
    cy.contains('Carregando...').should('be.visible')
    cy.wait('@getPreOrder')
    cy.contains('Carregando...').should('not.exist')
  })
})
