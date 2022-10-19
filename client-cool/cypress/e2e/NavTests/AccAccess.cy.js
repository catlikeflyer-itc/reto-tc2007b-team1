import './funLog.cy'
import './Log.cy'


describe('Account Access', () => {
    it('should create an account of x type and only have access to set type', () => {
        cy.Acc('Administrador','Penal').then((email) => {
            cy.Acc('Administrador de área','Penal').then((email2) => {
                cy.Acc('Usuario','Penal').then((email3) => {
                    cy.reload();
                    cy.funLog(email,'12345678');
                    cy.contains('Buscar').click();
                    cy.contains('Categorias').click();
                    cy.go('back');
                    cy.contains('Perfil').click();
                    cy.contains('Nivel administrativo').should('exist');
                    cy.contains('admin-top').should('exist');
                    cy.reload();
                    cy.funLog(email2,'12345678');
                    cy.contains('Buscar').click();
                    cy.contains('Buscar expedientes de Penal').should('exist');
                    cy.go('back');
                    cy.contains('Perfil').click();
                    cy.contains('Nivel administrativo').should('exist');
                    cy.contains('admin-mid').should('exist');
                    cy.go('back');
                    cy.contains('Crear usuario').should('not.exist');
                    cy.reload();
                    cy.funLog(email3,'12345678');
                    cy.contains('Buscar').click();
                    cy.contains('Buscar expedientes de Penal').should('exist');
                    cy.contains('920304').click();
                    cy.contains('Cambiar estatus').should('exist');
                    cy.go('back');
                    cy.go('back');
                    cy.contains('Perfil').click();
                    cy.contains('Nivel administrativo').should('exist');
                    cy.contains('admin-low').should('exist');
                    
                });
            });
        });
    });
});
   
//haven't been able to export this function so it's repeated here
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
        cy.get('input[id = "Expedientes permitidos"]').should('exist').type("74275");
    }
    cy.contains('Registrar').click();
    return email;
}

Cypress.Commands.add('Acc', (lvl,pwd) => {
    return cy.wrap(AccCreate(lvl,pwd));
});



