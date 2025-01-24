/// <reference types="cypress"/>

describe('Confirmed Entries', () => {
    beforeEach(() => {
        cy
        .visit('/').wait(1000)
        .get('.Home_home_warper-entries__IUNWL')
        .contains('Unconfirmed'+ ' Articles').click()
        
    });

    it('Ensure that the user able to open the Unconfirmed Entries page', () => {
        cy 
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .invoke('text')
            .should('have.contains', 
                "UNCONFIRMED"+ " ENTRIES"+ "Mythics"+ 
                "Casefiles"+ "Addendums"
            )
            
    });

    it('Ensure that the user able to see the Unconfirmed Casefiles data list', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('Casefiles').click()
            .wait(500)
            .url().should('eq', '/unconfirmed?type=casefile')
    });
    
});