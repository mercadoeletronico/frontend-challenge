
const mockOrderData = {
    header: {
        number: 9876543210,
        serial: 98765432,
        buyer: "Acme Corp Buyer",
        price: 35000,
        currency: "EUR",
        createdAt: "2024-08-23T10:00:00.000Z",
        status: "Canceled",
        contact: {
            name: "Acme Contact",
            email: "contact@acmecorp.com",
            phone: "111-222-3333",
            fax: "444-555-6666"
        }
    },
    supplier: {
        code: "24680",
        name: "Global Supplies Inc.",
        readAt: "2024-08-23T11:00:00.000Z",
        lastReplyAt: "2024-08-23T11:05:00.000Z",
        document: {
            type: "CNPJ",
            value: "99.999.999/0001-99"
        },
        address: "123 New Road, Anytown, UK",
        contact: {
            name: "Jane Doe",
            email: "jane.doe@globalsupplies.com",
            phone: "987-654-3210",
            fax: "987-654-3211"
        }
    },
    addresses: [
        {
            label: "Ship to",
            name: "Main Warehouse",
            code: "WH01",
            address: "456 Main Street, Springfield, IL 62704, USA",
            contact: {
                name: "John Smith",
                email: "john.smith@warehouse.com",
                phone: "555-123-4567",
                fax: "555-123-4568"
            }
        },
        {
            label: "Bill to",
            name: "Finance Dept.",
            code: null,
            address: "789 Accounting Lane, Metro City, 10101, USA",
            contact: {
                name: "Financial Manager",
                email: "finance@acmecorp.com",
                phone: "555-987-6543",
                fax: "555-987-6544"
            }
        },
        {
            label: "Charge to",
            name: "Marketing Dept.",
            code: null,
            address: "Marketing Avenue, Townsville, 90210, USA",
            contact: {
                name: "Marketing Team",
                email: "marketing@acmecorp.com",
                phone: "555-321-7654",
                fax: "555-321-7655"
            }
        }
    ]
};

describe('Página de detalhes de um pedido', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/orders/1', (req) => {
            req.reply({ body: mockOrderData, delay: 1000 });
        }).as('getOrderById');
        cy.visit('/')

    });
    it('Está na página de detalhes de um pedido', () => {
        cy.getBySel('order-page').should('be.visible');
    });
    it('Deve mostrar os Skeletons de carregamento enquanto os dados são carregados', () => {
        cy.getBySel('order-header-skeleton').should('be.visible');
        cy.getBySel('supplier-card-skeleton').should('be.visible');
        cy.getBySel('address-card-skeleton').should('be.visible');
    })

    it('Deve exibir o header contendo os dados do pedido após o carregamento dos dados', () => {
        cy.wait('@getOrderById');
        cy.getBySel('order-header-skeleton').should('not.exist')
        cy.getBySel('order-header').should('be.visible');
        cy.getBySel('order-number').should('have.text', mockOrderData.header.number);
        cy.getBySel('order-serial').should('have.text', `#ME${mockOrderData.header.serial}`);
        cy.getBySel('order-buyer-name').should('have.text', mockOrderData.header.buyer);
        cy.getBySel('order-price').should('have.text', `${mockOrderData.header.currency} ${mockOrderData.header.price}`);
        cy.getBySel('order-status').should('have.text', mockOrderData.header.status);
        cy.getBySel('order-created-at').should('have.text', mockOrderData.header.createdAt);
        cy.getBySel('order-buyer-contact-name').should('be.visible');
        cy.getBySel('order-buyer-contact-email').should('be.visible');
        cy.getBySel('order-buyer-contact-phone').should('be.visible');
        cy.getBySel('order-buyer-contact-fax').should('be.visible');

    })

    it("Mostra os dados do fornecedor", () => {
        cy.wait('@getOrderById');
        cy.getBySel('supplier-card-skeleton').should('not.exist')
        cy.getBySel('supplier-card').should('be.visible').within(() => {
            cy.get('h3').should('have.text', mockOrderData.supplier.name);
            cy.get('[data-cy="supplier-document"] span').should('have.text', mockOrderData.supplier.document.value);
            cy.get('[data-cy="supplier-document"] span').should('have.text', mockOrderData.supplier.document.value);
            cy.getBySel('supplier-address').should('have.text', mockOrderData.supplier.address);
            cy.get('[data-cy="supplier-contact-name"] span').should('have.text', mockOrderData.supplier.contact.name);
            cy.get('[data-cy="supplier-contact-email"] a').should('have.text', mockOrderData.supplier.contact.email);
            cy.get('[data-cy="supplier-contact-phone"] a').should('have.text', mockOrderData.supplier.contact.phone);
            cy.get('[data-cy="supplier-contact-fax"] a').should('have.text', mockOrderData.supplier.contact.fax);
            cy.get('[data-cy="supplier-read-at"] span').should('have.text', mockOrderData.supplier.readAt);
        });
    })

    it('Deve mostrar todos os cards de endereço com os dados corretos', () => {
        cy.wait('@getOrderById');
        cy.getBySel('address-card-skeleton').should('not.exist')
        cy.get('[data-cy="address-card"]').should('have.length', mockOrderData.addresses.length);
        mockOrderData.addresses.forEach((address, index) => {
            cy.get('[data-cy="address-card"]').eq(index).within(() => {
                cy.get('h3').should('have.text', address.name);
                cy.get('[data-cy="address-contact-name"] span').should('have.text', address.contact.name);
                cy.get('[data-cy="address-contact-email"] a').should('have.text', address.contact.email);
                cy.get('[data-cy="address-contact-phone"] a').should('have.text', address.contact.phone);
                cy.get('[data-cy="address-contact-fax"] a').should('have.text', address.contact.fax);
            })
        })


    })


    it("Mostra o tooltip de informação da data de criação do pedido quando passamos o mouse", () => {
        cy.wait('@getOrderById');
        cy.getBySel('order-tooltip').trigger('mouseover')
        cy.get('.popper').should('be.visible').contains('Date and time of order creation')
    })


    it("Fecha e abre novamente o accordion de endereços", () => {
        cy.wait('@getOrderById');
        cy.getBySel('accordion-button').should('be.visible').click()
        cy.getBySel('accordion-content').should('not.exist')
        cy.getBySel('accordion-button').should('be.visible').click()
        cy.getBySel('accordion-content').should('be.visible')
    })

})
