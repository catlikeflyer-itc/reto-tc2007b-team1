
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
    cy.compGet(area,asunto,estatus);
    cy.rCinit(); 
});

