
describe('The user should be able to register', () => {
    it('should register a new user', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy*="email"]').click()
        cy.get("[data-cy='registerButton]").click().should('exist');
    })
})