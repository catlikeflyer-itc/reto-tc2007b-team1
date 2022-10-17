

describe('Selector Nav', () => {
    it('should navigate to the correct page', () => {
        cy.visit('http://localhost:3000/');
        cy.get('button').contains('Registrar').click();
        cy.contains('Buscar').click();
        cy.url().should('include', '/buscar');
        cy.go('back');
        /* Not implemented yet
        cy.contains('Subir').click();
        cy.url().should('include', '/subir');
        cy.go('back');
        */
        cy.contains('Perfil').click();
        cy.url().should('include', '/perfil');
        cy.go('back');
        /* Not implemented yet
        cy.contains('Historial').click();
        cy.url().should('include', '/historial');
        cy.go('back');
        */
    })
})
