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

    it('Ensure that the user able to see the Casefiles data list', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Casefiles').click()
            .wait(500)
            .get('#scrollableDiv')
            .should('have.contain', 'Operation Tombstone')
    });

    it('Ensure that the user able to see the Unfinished Report in the list', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Casefiles').click()
            .get('#scrollableDiv')
            .should('have.contain', 'Unfinished Report')
    });

    it('Ensure that the user able to see the Casefile detail page', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Casefiles').click()
            .get('#scrollableDiv')
            .contains('Operation Corral').click()
            .wait(500)
            .get('.CasefileDetail_table-wrapper___nDUf').invoke('text')
            .should('have.contains', 'Operation'+ ' Corral')

    });


    
});