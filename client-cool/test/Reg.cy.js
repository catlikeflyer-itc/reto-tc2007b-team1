import Reg from '../testingComp/Reg';
import data from '../data/staticData.json';

describe('renders Reg component properly', () => {
    it('renders Reg component', () => {
        cy.mount(<Reg data={data} />).should('exist');
        cy.get('#Correo').should('exist').type('yo@gmail.com');
        cy.get('#Contraseña').should('exist').type('1111');
        cy.get('#Nombre').should('exist').type('Andrew');
        cy.get('select[data-testid="select1"]').should('exist').select("Administrador").select('Administrador de área').select('Usuario');
        cy.get('select[data-testid="select2"]').should('exist').select("Legal").select('Penal').select('Jurídica').select("Laboral").select('todo');
        cy.get('input[id*="Expedientes permitidos"]').should('exist').type('1,2,3,4,5');
        cy.contains('Registrar').click();
    });
});