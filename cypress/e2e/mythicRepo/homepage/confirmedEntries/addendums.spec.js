/// <reference types="cypress"/>

describe('Confirmed Entries', () => {
    beforeEach(() => {
        cy
        .visit('/').wait(1000)
        .get('.Home_home_warper-entries__IUNWL')
        .contains('Confirmed'+ ' Articles').click()
        
    });

    it('Ensure that the user able to open the Confirmed Entries page', () => {
        cy 
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .invoke('text')
            .should('have.contains', 
                "CONFIRMED"+ " ENTRIES"+ "Mythics"+ 
                "Casefiles"+ "Dossiers"+ "Addendums"
            )
            
    });

    it('Ensure that the user able to see the Addendums data list', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Addendums').click()
            .wait(500)
            .get('#scrollableDiv')
            .should('have.contain', 'C-8166-A052')
    });

    it('Ensure that the user able to see the C-6438-A007 in the list', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Addendums').click()
            .get('#scrollableDiv')
            .should('have.contain', 'C-6438-A007')
    });

    it('Ensure that the user able to see the Dossiers detail page', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Addendums').click()
            .get('#scrollableDiv')
            .contains('C-3449-A002').click()
            .wait(500)
            .get('.AddendumDetail_table-wrapper__rVp2i').invoke('text')
            .should('have.contains', 'C-3449-A002')

    });


    
});