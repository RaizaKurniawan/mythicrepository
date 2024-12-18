/// <reference types="cypress" />

describe('Quick Links', () => {
    beforeEach(() => {
        cy
            .visit('/')
            .get('.QuickLink_quick-link_banner__sw2wM')
            .click()
    });

    it('Verify that the user able to open the Protocol Handbook page', () => {
        cy 
            .get('.Handbook_container__TUXbq')
            .contains('PROTOCOL HANDBOOK')
    });

    it('Verify that the user able to see the Introductory Letter', () => {
        cy 
            .get('.Handbook_container__TUXbq')
            .contains('Introductory Letter')
    });

    it('Verify that the user able to see the What is the Mythic Protocol', () => {
        cy 
            .get('.Handbook_text-wrapper__GqT01')
            .contains('What is Mythic Protocol')
    });

    it('Verify that the user able to see the Emporium in faction background section', () => {
        cy
            .wait(2000)
            .get('.Handbook_text-wrapper__GqT01')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.Handbook_component-expand__Pgk04')
            .scrollIntoView().should('be.visible')
            .contains('EMPORIUM').click()
    });

    it('Verify that the user able to see the Naga Society in faction background section', () => {
        cy 
            .get('.Handbook_text-wrapper__GqT01')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.Handbook_component-expand__Pgk04')
            .scrollIntoView().should('be.visible')
            .contains('NAGA SOCIETY').click()
    });

    it('Verify that the user able to see the Maledictum in faction background section', () => {
        cy 
            .get('.Handbook_text-wrapper__GqT01')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.Handbook_component-expand__Pgk04')
            .scrollIntoView().should('be.visible')
            .contains('MALEDICTUM').click()
    });


    it('Verify that the user able to see the Interregnum in faction background section', () => {
        cy 
            .get('.Handbook_text-wrapper__GqT01')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.Handbook_component-expand__Pgk04')
            .scrollIntoView().should('be.visible')
            .contains('INTERREGNUM').click()
    });

    
});