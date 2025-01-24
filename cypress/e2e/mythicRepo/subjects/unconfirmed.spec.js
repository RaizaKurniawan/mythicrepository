/// <reference types="cypress"/>

describe('Subjects', () => {
    beforeEach(() => {
        cy
            .visit('/').wait(1000)
            .get('.Subjects_subject-list__mS9c0')
            .contains('Unconfirmed').click()
    });
    
    it('Ensure that the user able to open the Unconfirmed list page from sidebar', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_header-title__e1_L_')
            .should('have.contain', 'UNCONFIRMED ENTRIES')
    });
});