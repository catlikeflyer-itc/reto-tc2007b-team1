import './FileGen.cy.js';
describe('File Creation', () => {
    it('should create a file', () => {
        cy.contains('Generar expediente').click();
        cy.Create('Legal','Amparo','En proceso');
        cy.go('back');
        cy.contains('Generar expediente').click();
        cy.Create('Penal','Laboral','Finalizado');
        cy.go('back');
        cy.contains('Generar expediente').click();
        cy.Create('Jurídica','Civil','En proceso');
        cy.go('back');
        cy.contains('Generar expediente').click();
        cy.Create('Laboral','Juicios de nulidad','Finalizado');
        cy.go('back');
        cy.contains('Generar expediente').click();
        cy.Create('Legal','Acción pública','En proceso');
        cy.go('back');
        cy.contains('Generar expediente').click();
        cy.Create('Penal','Lesividad','Finalizado');
        cy.go('back');
    });
});