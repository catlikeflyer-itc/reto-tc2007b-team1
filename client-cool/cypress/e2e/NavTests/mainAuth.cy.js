
describe('The user should be able to register', () => {
    it('should register a new user', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[id=Correo]').should('exist').type('yo@test.com');
        cy.get('[id=Nombre]').should('exist').type('Andrew');
        cy.get('[id=Contraseña]').should('exist').type('1111');
        cy.get('[id="Confirmar contraseña"]').should('exist').type('1111');
        cy.contains('Registrar').should('exist').click();
    })
})