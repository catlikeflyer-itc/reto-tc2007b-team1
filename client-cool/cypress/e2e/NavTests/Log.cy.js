describe("The user should be able to Log in", () => {
  it("should Log in a user", () => {
    cy.visit("https://localhost:3000/");
    cy.get("[id=Correo]").should("exist").type("jj@ao.gob.mx");
    cy.get("[id=Contraseña]").should("exist").type("jjbarrios");
    cy.contains("Iniciar").should("exist").click();
  });
});


