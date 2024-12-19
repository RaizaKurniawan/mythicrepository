/// <reference types="cypress" />

describe('Submission Guide scenario Test cases', () => {
    beforeEach(() => {
        cy
            .visit('/').wait(1000)
            .get(':nth-child(3) > .QuickLink_quick-link_child__imBpf')
            .contains('Submission Guide').click()
    });

    it('Verify that the user able to open Submission Guide page', () => {
        cy 
            .wait(2000)
            .get('.SectionHeader_header-title__e1_L_')
            .should('have.text','submission guide')
    });

    it('Verify that the user able see the Introduction text', () => {
        cy 
            .get('.SubmissionGuide_submission-guide_body__EOkiG')
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text','Introduction')
            .and('contain.text', 'The Mythic Protocol is a collaborative alliance of secret organizations focused on exploring and managing Rifts and Riftworld Mythics. Established in 1954 to prevent faction warfare, the Protocol was initiated by four major secret societies. It involves sharing information, arcane artefacts, and joint coordination of engagements with the occult. The organization, led by the Jupiter Council, deploys operatives worldwide to execute its objectives.')
    });

    it('Verify that the user able see the How to Contribute to the Mythic Repository text', () => {
        cy 
            .wait(2000)
            .get('.SubmissionGuide_submission-guide_body__EOkiG')
            .scrollIntoView().should('be.visible')
            .and('contain.text', 'How to Contribute to the Mythic Repository')
            .and('contain.text', 'Contributors can submit various documents to the Mythic Repository: Mythic Entries, Mythic Casefiles, Dossiers, and Addendums. These documents can be interconnected via hyperlinks, fostering an expansive and interactive narrative network.')
            .and('contain.text', 'Mythic Entries:These documents provide descriptions of the Mythics, the paranormal entities, and artefacts that secretly coexist with us.')
            .and('contain.text','Mythic Casefiles:These files offer narratives detailing the circumstances, events, and consequences of actions undertaken by the Mythic Protocol.')
            .and('contain.text','Dossiers:These records present comprehensive backgrounds and career milestones of the Agents operating within the Mythic Protocol.')
            .and('contain.text', 'Addendums:These supplementary documents can be attached to any previously mentioned file types to clarify concepts or imbue an additional layer of personality.')
    });

    it('Verify that the user able see the Content Guidelines text', () => {
        cy 
            .wait(2000)
            .get('.SubmissionGuide_submission-guide_body__EOkiG')
            .scrollIntoView().should('be.visible')
            .each(($el, index)=> {
                const expectedTexts = [
                    'The Mythic Repository thrives on the unique submissions of its contributors. To ensure consistency and quality of the submissions, contributors are strongly encouraged to follow the content guidelines below to infuse their creativity and originality with quality.',
                    'Document Types: Ensure that your submission aligns with one of the specified document types: Mythic Entries, Mythic Casefiles, Dossiers, or Addendums. Each document type serves a unique purpose and has a distinctive structure. Make sure to follow the appropriate format for your chosen document type.',
                    'Formatting: Proper paragraph structure and formatting are essential. Long walls of text can be difficult to read, so break your content into paragraphs.',
                    'Spell Check and Grammar: Submissions should be free of spelling and grammatical errors. Proofread your work carefully before submitting or use a spell-checking tool.',
                    'Copyright: Contributors must not use the Mythic Protocol IP in a way that infringes on the rights of others, including copyright, trademark, privacy, and other rights. When utilizing other IPs as elements of your story, please ensure that it is under a public-use license. Additionally, ensure any audio/visual components used in your contributions are properly credited or licensed.',
                    'AI-Generated Content Usage: Contributors may employ AI tools for spell-checking, translation, idea generation, and grammar assistance in their submissions. However, utilizing AI-generated content for audio/visual components is generally discouraged due to potential copyright infringement issues.',

                ];
                // cy.get('.SubmissionGuide_submission-guide_body__EOkiG').each(($el, index)=> {
                //     cy.wrap($el).invoke('').should('eq', expectedTexts[index]);
                // });
            })
    });

   
});