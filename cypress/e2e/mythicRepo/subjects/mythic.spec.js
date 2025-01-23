/// <reference types="cypress"/>

describe('Subjects', () => {
    beforeEach(() => {
        cy
            .visit('/').wait(1000)
            .get('.Subjects_subject-list__mS9c0')
            .contains('Mythic').click()
    });
    
    it('Ensure that the user able to open the Mythic list page from sidebar', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_active__l8scC')
            .contains('Mythics')
    });

    it('Ensure that the user able to see the Shade', () => {
        cy
            .wait(1000)
            .get('#scrollableDiv')
            .contains('Shade')
    });

    it('Ensure that the user able to Sort By Top Rated ', () => {
        cy
            .wait(1000)
            .get('.ant-select')
            .click()
            .get('.ant-select-dropdown')
            .contains('Top Rated').click()

    });

    it('Ensure that the user able to Sort By Highest Code ', () => {
        cy
            .wait(1000)
            .get('.ant-select')
            .click()
            .get('.ant-select-dropdown')
            .get('.ant-select-item-option-content')
            .contains('Highest Code').click()

    });

    it('Ensure that the user able to Sort By Lowest Code ', () => {
        cy
            .wait(1000)
            .get('.ant-select')
            .click()
            .get('.ant-select-dropdown')
            .get('.ant-select-item-option-content')
            .contains('Lowest Code').click()

    });

    it('Ensure that the user able to Sort By Confirmed Date ', () => {
        cy
            .wait(1000)
            .get('.ant-select')
            .click()
            .get('.ant-select-dropdown')
            .get('.ant-select-item-option-content')
            .contains('Confirmed Date').click()

    });
});