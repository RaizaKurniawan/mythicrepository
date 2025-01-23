/// <reference types="cypress" />

describe('FAQ Scenario Test Cases', () => {

    beforeEach(() => {
        cy
            .visit('/').wait(1000)
            .get(':nth-child(4) > .QuickLink_quick-link_child__imBpf')
            .contains('FAQ').click()
    });

    it('Ensure that the user able to open FAQ page', () => {
        cy
            .wait(1000)
            .get('.SectionHeader_container-header____rH_')
            .contains('faq')
    });

    it('Ensure that the user able to see the Is The Mythic Protocol Real?', () => {
        cy
            .wait(1000)
            .get('.Faq_title-active-true__zPLcS')
            .contains('Is The Mythic Protocol Real?')
            .get('.Faq_faq_body__5Qu_a > :nth-child(1) > :nth-child(2)')
            .contains('No. The Mythic Protocol is a fictional collaborative universe developed by Mythic Alliance Pte. Ltd. The Mythic Protocol, its characters, organizations, events, mythics, and all other concepts are works of fiction developed by internal and external contributors.')
    });

    it('Ensure that the user able to see the Can I join the Mythic Repository?', () => {
        cy
            .wait(1000)
            .get('.Faq_title-active-false__OrrSQ')
            .contains('Can I join the Mythic Repository?')
            .click()
            .get('.Faq_faq_body__5Qu_a > :nth-child(2) > :nth-child(2)')
            .contains('The Mythic Repository is still under development and access will be incrementally granted to increasing numbers of users as we continue. If you are interested in contributing early, you may sign up ')
    });

    it('Ensure that the user able to see the Will all Mythic Repository content be used in Riftstorm and other Mythic Protocol media?', () => {
        cy
            .wait(1000)
            .get('.Faq_title-active-false__OrrSQ')
            .contains('Will all Mythic Repository content be used in Riftstorm and other Mythic Protocol media?')
            .click()
            .get('.Faq_faq_body__5Qu_a > :nth-child(3) > :nth-child(2)')
            .contains('No. Usage and integration of Mythic Repository content is carefully selected by product-level stakeholders at their discretion.')
    });

    it('Ensure that the user able to see the What exactly is the nature and extent of input and collaboration within the IP?', () => {
        cy
            .wait(1000)
            .get('.Faq_title-active-false__OrrSQ')
            .contains('What exactly is the nature and extent of input and collaboration within the IP?')
            .click()
            .get('.Faq_faq_body__5Qu_a > :nth-child(4) > :nth-child(2)')
            .contains('The collaborative structure of the Mythic Protocol is built on fore core layers: A centralized canonization layer, a decentralized contribution layer, a stakeholder input layer, and a public input layer. The process of content canonization will take into consideration needs, wants, and perspectives of all four layers in tandem with consequential changes into the world, concepts, and overall IP being the resulting effect.')
    });

    it('Ensure that the user able to see the How can I contribute my ideas and content into the world of Mythic Protocol?', () => {
        cy
            .wait(1000)
            .get('.Faq_title-active-false__OrrSQ')
            .contains('How can I contribute my ideas and content into the world of Mythic Protocol?')
            .click()
            .get('.Faq_faq_body__5Qu_a > :nth-child(5) > :nth-child(2)')
            .contains('All externally sourced contributions (not created or written by an Employee or Contractor of the Mythic Alliance Pte. Ltd.) into the Mythic Protocol will be labeled as Unconfirmed articles within the repository. Currently, entry into the Repository will be granted on a case-by-case basis as we continue to build the contribution and canonization mechanisms.')
    });

    it('Ensure that the user able to see the What is difference between Confirmed and Unconfirmed articles in the Repository?', () => {
        cy 
            .wait(1000)
            .get('.Faq_title-active-false__OrrSQ')
            .contains('What is difference between Confirmed and Unconfirmed articles in the Repository?')
            .click()
            .get(':nth-child(6) > :nth-child(2)')
            .contains('Confirmed articles (Entries, Dossiers, and Casefiles) are part of the core Mythic Protocol canon and get be licensed for use in media, products, and other experiences within the Mythic Protocol ecosystem. Unconfirmed content are considered non-canon and will not be considered for ecosystem-wide.')
    });

    it('Ensure that the user able to see the Am I allowed to make fan-art or fan-fiction based on Confirmed Repository content?', () => {
        cy
            .wait(1000)
            .get('.Faq_title-active-false__OrrSQ')
            .contains('Am I allowed to make fan-art or fan-fiction based on Confirmed Repository content?')
            .click()
            .get(':nth-child(7) > :nth-child(2)')
            .contains('Yes! As long as the output or content is not made for monetary gain, revenue generation, and commercial usage we encourage you to create and expand on the lore.')
    });

    it('Ensure that the user able to see the Am I allowed to create supplementary content to Confirmed and Unconfirmed articles in the Repository?', () => {
        cy
            .wait(1000)
            .get('.Faq_title-active-false__OrrSQ')
            .contains('Am I allowed to create supplementary content to Confirmed and Unconfirmed articles in the Repository?')
            .click()
            .get(':nth-child(8) > :nth-child(2)')
            .contains('Yes, however there are no direct-reference features in-place within the Repository at this time to facilitate the creation of such content. As we continue to build the Repository and our products, we will welcome and facilitate the creation of supplementary content; however all new content submissions will still be allocated to the Unconfirmed section of the Repository pending canonization.')
    });
});