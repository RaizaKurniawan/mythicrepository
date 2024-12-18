/// <reference types="cypress" />

describe('Access to Landing page', () => {
    
    it('Verify that the user able to access the Repository landing page', () => {
        cy.visit('/');
        
        // get class
        cy.get('.NavbarTitle-module_nav_heading-title__hSqPE').contains('mythic repository');
    });
});