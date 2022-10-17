describe("The user should be able to register", () => {
  it("should register a new user", () => {
    cy.visit("https://localhost:3000/");
    cy.get("[id=Correo]").should("exist").type("jj@ao.gob.mx");
    cy.get("[id=Contraseña]").should("exist").type("jjbarrios");
    cy.contains("Iniciar").should("exist").click();
  });
});
