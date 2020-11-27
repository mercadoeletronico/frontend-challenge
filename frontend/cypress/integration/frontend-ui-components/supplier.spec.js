describe("Supplier component validation", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Render props to screen", function () {
    cy.get("[cy-validation=supplier-title]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-name]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-code]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-document-value]").should(
      "to.have.length",
      1
    );
    cy.get("[cy-validation=supplier-contact-name]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-icon-user]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-document-email]").should(
      "to.have.length",
      1
    );
    cy.get("[cy-validation=supplier-readat]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-icon-eye]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-address]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-contact-phone]").should(
      "to.have.length",
      1
    );
    cy.get("[cy-validation=supplier-icon-phone]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-contact-fax]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-icon-fax]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-last-replyat]").should("to.have.length", 1);
    cy.get("[cy-validation=supplier-icon-reply]").should("to.have.length", 1);
  });
});
