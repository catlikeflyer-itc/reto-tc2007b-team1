
import './Log.cy.js';

describe('Selector Nav', () => {
    it('should navigate to the correct page', () => {
        cy.contains('Buscar').click();
        cy.url().should('include', '/buscar');
        cy.go('back');
        cy.contains('Subir').click();
        cy.url().should('include', '/subir');
        cy.go('back');
        cy.contains('Perfil').click();
        cy.url().should('include', '/perfil');
        cy.go('back');
        cy.contains('Historial').click();
        cy.url().should('include', '/historial');
        cy.go('back');
        cy.contains('Generar expediente').click();
        cy.url().should('include', '/crear-expediente');
        cy.go('back');
        cy.contains('Crear usuario').click();
        cy.url().should('include', '/crear-usuario');
        cy.go('back');
    })
})
