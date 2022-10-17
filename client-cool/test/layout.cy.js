import Layout from "../components/layouts/layout";

describe('renders layout component properly', () => {
    it('renders footer component', () => {
        cy.mount(<Layout><h1>Hello</h1></Layout>);
        cy.contains("Hello").should('exist');
        cy.get("a[data-test*='alclink']").should('have.text', 'oficina.alcaldia@aao.cdmx.gob.mx');
        cy.get("p[data-test*='alctel']").should('exist').contains('(55) 5276 6700');
    });
});
