

import './funLog.cy'


function AccCreate(admin,area){
    const names = ['andriu','juang','doo','elimiano','deigo','mijel','andre'];
    const s = Math.floor(Math.random() * 7);
    cy.contains('Crear usuario').click();
    let email = `mr${names[s]}${Math.floor(Math.random()*100)
        *Math.floor(Math.random()*100)}@gmail.com`;
    cy.get('input[id = "Correo"]').should('exist').type(email);
    cy.get('input[id = "Nombre"]').should('exist').type(names[s]);
    cy.get('input[id = "Contraseña"]').should('exist').type('12345678');
    cy.get('select[id = "Area"]').should('exist').select(area);
    cy.get('select[id = "Nivel administrativo"]').should('exist').select(admin);
    if(admin === 'Usuario'){
        cy.get('input[id = "Expedientes permitidos"]').should('exist').type(Math.floor(Math.random()*100));
    }
    cy.contains('Registrar').click();
    return email;
};

Cypress.Commands.add('Acc', (lvl,pwd) => {
    return cy.wrap(AccCreate(lvl,pwd));
});

describe('Account Creation', () => {
    it('should create an account of all types', () => {
        cy.funLog("jj@ao.gob.mx","jjbarrios");
        cy.Acc('Administrador','Penal').then((email) => {
            cy.reload();
            cy.funLog(email,'12345678');
            cy.Acc('Usuario','Penal').then( (email2) => {
                cy.reload();
                cy.funLog(email2,'12345678');
                cy.reload();
                cy.funLog(email,'12345678');
                cy.Acc('Administrador de área','Jurídica').then( (email3) => {
                    cy.reload();
                    cy.funLog(email3,'12345678');
                });
            });
        });
    });
});
        
        