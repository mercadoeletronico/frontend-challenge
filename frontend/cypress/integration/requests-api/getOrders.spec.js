describe("Request", () => {
  it("getOrders", () => {
    cy.request(
      "https://me-frontend-challenge-api.herokuapp.com/orders/1"
    ).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("addresses");
      expect(response.body).to.have.property("header");
      expect(response.body).to.have.property("supplier");
    });
  });
});
