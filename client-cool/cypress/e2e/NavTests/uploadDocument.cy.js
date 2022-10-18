import './Upload.cy'

describe('File upload', () => {
    it('should succesfuly upload a file', () => {
        cy.contains('Subir').should('exist').click();
        cy.documentAdd('170', "Testdoc.pdf")
    })
})