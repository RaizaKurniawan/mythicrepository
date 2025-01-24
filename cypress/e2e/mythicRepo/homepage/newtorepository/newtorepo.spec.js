/// <reference types="cypress"/>

describe('New to Repository', () => {
    beforeEach(() => {
        cy
        .visit('/').wait(1000)
        .get('.Banner_banner_repository__O_grN')
        .contains('New to Repository?').click()
        
    });

    it('Ensure that the user able to open Protocol Handbook', () => {
        cy
            .wait(500)
            .get('.Handbook_header-wrapper__vhMFL')
            .should('have.contain', 'PROTOCOL HANDBOOK')
    });

});