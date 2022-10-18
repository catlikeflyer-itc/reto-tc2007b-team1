
import './Log.cy.js';


Cypress.Commands.add('rCinit', () => {
    const names = ['Andriu','Juang','Doo','Elimiano','Deigo','Mijel','Andre'];
    const s = Math.floor(Math.random() * 7);
    let type1 = `${names[s]} is very lazy ${(Math.floor(1 + Math.random() * 1000) * Math.floor(1 + Math.random() * 1000))}`;
    console.log(type1);
    cy.get('#Expediente').should('exist').type(Math.floor(1 + Math.random() * 99000).toString());
    cy.get('#Título').should('exist').type(type1.toString());
    cy.get('#Descripción').should('exist').type(`${names[s]} is sometimes lazy`);
});

Cypress.Commands.add('compGet', (area,asunto,estatus) => {
    cy.get('select[id="Área"]').should('exist').select(area);
    cy.get('select[id="Asunto"]').should('exist').select(asunto);
    cy.get('select[id="Estatus"]').should('exist').select(estatus);
    cy.contains('Crear expediente').click();
});

Cypress.Commands.add('Create', (area,asunto,estatus) => {
    cy.rCinit();
    cy.compGet(area,asunto,estatus);
});

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