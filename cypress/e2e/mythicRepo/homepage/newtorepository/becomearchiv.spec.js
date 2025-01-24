/// <reference types="cypress"/>

describe('Become an Archivist', () => {
    beforeEach(() => {
        cy
        .visit('/').wait(1000)
        .get('Banner_banner_register__LLYmC')
        .contains('New to Repository?').click()
        
    });

    it('Ensure that the user able to open Protocol Handbook', () => {
        cy
            .wait(500)
            .get('.Handbook_header-wrapper__vhMFL')
            .should('have.contain', 'Become an'+ 'Archivist')
    });

});