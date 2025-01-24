/// <reference types="cypress"/>

describe('Top Rated Articles', () => {
    beforeEach(() => {
        cy
        .visit('/').wait(1000)
        .get('.Home_home_warper-top-rate__Xn_FR')
        .contains('TOP RATED ARTICLES')
        
    });

    it('Ensure that the user able to open Top Rated Articles', () => {
        cy
            .get('.TopRated_top-rated_body__JwJDs')
            .click()
            .wait(500)
            
    });

});