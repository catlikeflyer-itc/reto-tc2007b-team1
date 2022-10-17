import Profile from '../testingComp/profile';

describe('renders Profile component properly', () => {
    it('renders Profile component', () => {
        cy.mount(<Profile />).should('exist');
    });
});
