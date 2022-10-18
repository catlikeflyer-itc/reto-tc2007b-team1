Cypress.Commands.add('funLog', (email,pwd) => {
    cy.visit("https://localhost:3000/");
    cy.get("[id=Correo]").should("exist").type(email);
    cy.get("[id=Contraseña]").should("exist").type(pwd);
    cy.contains("Iniciar").should("exist").click();
  });