describe('Responsive Design', () => {
  beforeEach(() => {
    cy.mockPreOrderAPI()
  })

  it('should work on mobile devices', () => {
    cy.viewport('iphone-6')
    cy.visit('/')
    cy.wait('@getPreOrder')

    // Verifica se o conteúdo é visível em mobile
    cy.contains('Pre-Order').should('be.visible')
    cy.contains('MTP West Buyer').should('be.visible')
    cy.contains('Motion Industries INC.').should('be.visible')
  })

  it('should work on tablet', () => {
    cy.viewport('ipad-2')
    cy.visit('/')
    cy.wait('@getPreOrder')

    // Verifica layout em tablet
    cy.contains('Addresses').should('be.visible')
    cy.get('.grid').should('be.visible')
  })

  it('should work on desktop', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
    cy.wait('@getPreOrder')

    // Verifica layout em desktop
    cy.contains('Pre-Order').should('be.visible')
    cy.get('.lg\\:h-\\[110px\\]').should('be.visible')
  })

  it('should adapt grid layout for different screen sizes', () => {
    cy.visit('/')
    cy.wait('@getPreOrder')

    // Mobile - 1 coluna
    cy.viewport('iphone-6')
    cy.get('.md\\:grid-cols-3').should('exist')

    // Desktop - 3 colunas
    cy.viewport(1280, 720)
    cy.get('.md\\:grid-cols-3').should('exist')
  })
})
