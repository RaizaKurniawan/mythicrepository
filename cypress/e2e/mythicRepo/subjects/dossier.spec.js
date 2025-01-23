/// <reference types="cypress"/>

describe('Subjects', () => {
    beforeEach(() => {
        cy
            .visit('/').wait(1000)
            .get('.Subjects_subject-list__mS9c0')
            .contains('Dossier').click()
    });
    
    it('Ensure that the user able to open the Dossiers list page from sidebar', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_active__l8scC')
            .contains('Dossiers')
    });

    it('Ensure that the user able to see the Thistle', () => {
        cy
            .wait(1000)
            .get('#scrollableDiv')
            .contains('Thistle')
    });
});