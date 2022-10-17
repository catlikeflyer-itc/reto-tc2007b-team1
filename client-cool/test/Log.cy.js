import Log from '../testingComp/Log';
import data from '../data/staticData.json';
describe('renders mainAuth component properly', () => {
    it('renders Log In component', () => {
        cy.mount(<Log data={data} />).should('exist');
        cy.get('#Correo').should('exist').type('yo@gmail.com');
        cy.get('#Contraseña').should('exist').type('1111');
        cy.contains('Iniciar sesión').should('exist').click();
    });
});