describe("Header component validation", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Render props to screen", function () {
    cy.get("[cy-validation=header-wrapper]").should("to.have.length", 1);
    cy.get("[cy-validation=header-purchase-order]").should("to.have.length", 1);
    cy.get("[cy-validation=header-purchase-number]").should(
      "to.have.length",
      1
    );
    cy.get("[cy-validation=header-serial-number]").should("to.have.length", 1);
    cy.get("[cy-validation=header-logo-me]").should("to.have.length", 1);
    cy.get("[cy-validation=header-buyer]").should("to.have.length", 1);
    cy.get("[cy-validation=header-contact-name]").should("to.have.length", 1);
    cy.get("[cy-validation=header-icon-users]").should("to.have.length", 1);
    cy.get("[cy-validation=header-icon-info-circle]").should(
      "to.have.length",
      1
    );
    cy.get("[cy-validation=header-contact-email]").should("to.have.length", 1);
    cy.get("[cy-validation=header-icon-email]").should("to.have.length", 1);
    cy.get("[cy-validation=header-contact-phone]").should("to.have.length", 1);
    cy.get("[cy-validation=header-icon-phone]").should("to.have.length", 1);
    cy.get("[cy-validation=header-contact-fax]").should("to.have.length", 1);
    cy.get("[cy-validation=header-icon-fax]").should("to.have.length", 1);
    cy.get("[cy-validation=header-price]").should("to.have.length", 1);
    cy.get("[cy-validation=header-status]").should("to.have.length", 1);
    cy.get("[cy-validation=header-status]").should("to.have.length", 1);
    cy.get("[cy-validation=header-createdat]").should("to.have.length", 1);
  });
});
