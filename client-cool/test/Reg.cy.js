import Reg from '../testingComp/Reg';
import data from '../data/staticData.json';

describe('renders Reg component properly', () => {
    it('renders Reg component', () => {
        cy.mount(<Reg data={data} />).should('exist');
        cy.get('#Correo').should('exist').type('yo@gmail.com');
        cy.get('#Contraseña').should('exist').type('1111');
        cy.get('#Nombre').should('exist').type('Andrew');
        cy.get('[id="Confirmar contraseña"]').should('exist').type('1111');
        cy.contains('Registrar').should('exist').click();
    });
});