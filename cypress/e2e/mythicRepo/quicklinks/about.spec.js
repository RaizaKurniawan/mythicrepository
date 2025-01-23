/// <reference types="cypress" />

describe('About scenario Test cases', () => {
    beforeEach(() => {
        cy
            .visit('/').wait(1000)
            .get(':nth-child(2) > .QuickLink_quick-link_child__imBpf')
            .contains('About').click()
    });

    it('Verify that the user able to open the About page', () => {
        cy 
            .wait(2000)
            .get('.SectionHeader_header-title__e1_L_')
            .contains('about')
    });

    it('Verify and check the body content text', () => {
        cy 
            .get('.About_about_body__um0_S')
            .contains('About the Mythic Protocol & Collaborative Entertainment')
    });

    it('Verify that the Decentralized Universal Meta (BETA) dropdown component are work properly', () => {
        cy 
            .wait(2000)
            .get('.About_about_body__um0_S')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.About_section-expand-wrapper__jvMdT')
            .contains('DECENTRALIZED UNIVERSAL META').click()
    });

    it('Verify that the Mythic Repository dropdown component are work properly', () => {
        cy 
            .wait(2000)
            .get('.About_about_body__um0_S')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.About_section-expand-wrapper__jvMdT')
            .contains('MYTHIC REPOSITORY').click()   
    });

    it('Verify that the Portal dropdown component are work properly', () => {
        cy
            .wait(2000)
            .get('.About_about_body__um0_S')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.About_section-expand-wrapper__jvMdT')
            .contains('PORTAL').click()
    });

    it('Verify that the RIFTSTORM dropdown component are work properly', () => {
        cy 
            .wait(2000)
            .get('.About_about_body__um0_S')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.About_section-expand-wrapper__jvMdT')
            .contains('RIFTSTORM').click()
    });

    it('Verify that the ENTRIES (MYTHICS) dropdown component are work properly', () => {
        cy 
            .wait(2000)
            .get('.About_about_body__um0_S')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.About_section-expand-wrapper__jvMdT')
            .contains('ENTRIES').click()
    });

    it('Verify that the DOSSIERS (CHARACTERS) dropdown component are work properly', () => {
        cy 
            .wait(2000)
            .get('.About_about_body__um0_S')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.About_section-expand-wrapper__jvMdT')
            .contains('DOSSIERS').click()
    });

    it('Verify that the CASEFILES (STORIES) dropdown component are work properly', () => {
        cy 
            .wait(2000)
            .get('.About_about_body__um0_S')
            .scrollIntoView().should('be.visible')
            .wait(1000)
            .get('.About_section-expand-wrapper__jvMdT')
            .contains('CASEFILES').click()
    });
    
});