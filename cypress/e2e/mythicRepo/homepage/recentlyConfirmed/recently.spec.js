/// <reference types="cypress"/>

describe('Top Rated Articles', () => {
    beforeEach(() => {
        cy
        .visit('/')
    });

    it('Ensure that the user able to see the Recently Confirmed Articles', () => {
        cy
            .wait(300)
            .get('.Home_home_warper-last-confirmed__6PrR8')
            .should('have.contain', 'RECENTLY CONFIRMED ARTICLES')
    });

    it('Ensure that the user open the articles from Recentyl Confirmed Articles', () => {
        cy
            .wait(300)
            .get('.LastConfirmed_last-confirmed_body__u_ve7')
            .contains('M-0019 Plague Zombies').click()
            .wait(200)
            .get('.MythicDetail_table-wrapper__Uctk3')
            .should('have.contain', 'Plague Zombies')
    });
});