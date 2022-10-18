import './Log.cy'

Cypress.Commands.add('documentAdd', (file, document) => {
    cy.get('#Folio').should('exist').type('012345')
    cy.get('select').select(`${file}`)
    cy.get('#Título').should('exist').type('Esto es un titulo')
    cy.get('#Descripción').should('exist').type('Esto es una descripcion.');
    cy.get('#Tipo').should('exist').type('Documento nuevo');
    // cy.contains('Examinar').should('exist').click()
    cy.get('input[type=file]').selectFile(`./cypress/fixtures/${document}`)
    cy.get('#Ubicación').should('exist').type('En algun lado');
    cy.get('button').click()
});