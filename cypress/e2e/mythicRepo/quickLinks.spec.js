/// <reference types="cypress" />

describe('Quick Links', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Verify that the user able to open the Protocol Handbook page', () => {
        cy
            .get('.QuickLink_quick-link_banner__sw2wM')
            .click()

        cy 
            .get('.Handbook_container__TUXbq')
            .contains('Protocol Handbook')
    });

    it('Verify that the user able to see the Introductory Letter', () => {
        cy
            .get('.QuickLink_quick-link_banner__sw2wM')
            .click()

        cy 
            .get('.Handbook_container__TUXbq')
            .contains('Introductory Letter')
            .contains('Welcome Operative')
            
    });
});