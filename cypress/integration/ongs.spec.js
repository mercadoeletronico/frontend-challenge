/// <reference types="cypress" />

describe('API Testing', () => {

    it('GET - read', () => {
        cy.request('GET', 'https://me-frontend-challenge-api.herokuapp.com/orders/1').then((response) => {
            cy.visit('http://localhost:8080/');
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null;
        })
    });

});