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

    it('Ensure that the user able to see the Dossiers data list', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Dossiers').click()
            .wait(500)
            .get('#scrollableDiv')
            .should('have.contain', 'The Clarion')
    });

    it('Ensure that the user able to see the Howler in the list', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Dossiers').click()
            .get('#scrollableDiv')
            .should('have.contain', 'Howler')
    });

    it('Ensure that the user able to see the Dossiers detail page', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Dossiers').click()
            .get('#scrollableDiv')
            .contains('Starling').click()
            .wait(500)
            .get('.DossierDetail_table-wrapper__rBJFd').invoke('text')
            .should('have.contains', 'Starling')

    });


    
});