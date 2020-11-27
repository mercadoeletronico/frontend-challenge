describe("CardAddresses component validation", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  //validate addresses information in card component
  it("Render props to screen", function () {
    cy.get("[cy-validation=address-label]").should("to.have.length", 3);
    cy.get("[cy-validation=address-name]").should("to.have.length", 3);
    cy.get("[cy-validation=address-icon-map-marker]").should(
      "to.have.length",
      3
    );
    cy.get("[cy-validation=address-address]").should("to.have.length", 3);
    cy.get("[cy-validation=address-icon-user]").should("to.have.length", 3);
    cy.get("[cy-validation=address-contact-name]").should("to.have.length", 3);
    cy.get("[cy-validation=address-icon-email]").should("to.have.length", 3);
    cy.get("[cy-validation=address-contact-email]").should("to.have.length", 3);
    cy.get("[cy-validation=address-icon-phone]").should("to.have.length", 3);
    cy.get("[cy-validation=address-contact-phone]").should("to.have.length", 3);
    cy.get("[cy-validation=address-icon-fax]").should("to.have.length", 3);
    cy.get("[cy-validation=address-contact-fax]").should("to.have.length", 3);
  });
});
