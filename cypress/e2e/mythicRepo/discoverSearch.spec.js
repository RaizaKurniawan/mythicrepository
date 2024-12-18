/// <reference types="cypress" />

describe('Mythic Repository - Discovery', () => {
    
    beforeEach(() => {

        cy.visit('/');

        

    });

  
    it('Verify that the user able to get the search result as they type', () => {
        
        cy
            .get('[placeholder="Search"]')
            .click()
            .type('M-0028')
            .get('[data-testid="discovery"] > img').click()

        cy 
            .get('.Search_list-title__cUp9C')
            .contains('M-0028')

    });

    it('Verify that the user unable to get the search as they type', () => {
        cy
        .get('[placeholder="Search"]')
        .click()
        .type('M-0099999')
        .get('[data-testid="discovery"] > img').click()


        cy
            .get('.Search_search_empty__qeDcz')
            .contains('Your search did not match any documents')
    });
});