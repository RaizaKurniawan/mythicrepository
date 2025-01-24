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

    it('Ensure that the user able to see the Magpie King in the list', () => {
        cy
            .wait(1000)
            .get('#scrollableDiv')
            .should('have.contain', 'Magpie King')
    });

    it('Ensure that the user able to see the Mythic detail page', () => {
        cy
            .wait(1000)
            .get('#scrollableDiv')
            .contains('Plague Zombies').click()
            .wait(500)
            .get('.MythicDetail_table-wrapper__Uctk3').invoke('text')
            .should('have.contains', 'Plague'+ ' Zombies')

    });


    
});