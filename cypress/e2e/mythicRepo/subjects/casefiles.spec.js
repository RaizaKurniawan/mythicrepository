/// <reference types="cypress"/>

describe('Subjects', () => {
    beforeEach(() => {
        cy
            .visit('/').wait(1000)
            .get('.Subjects_subject-list__mS9c0')
            .contains('Casefiles').click()
    });
    
    it('Ensure that the user able to open the Casefiles list page from sidebar', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_active__l8scC')
            .contains('Casefiles')
    });

    it('Ensure that the user able to see the Operation Doggy Daycare', () => {
        cy
            .wait(1000)
            .get('#scrollableDiv')
            .contains('Operation Doggy Daycare')
    });
});