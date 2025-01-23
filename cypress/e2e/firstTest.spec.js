/// <reference types="cypress" />

describe('First test suite', () => {
    it('Go to Home page', () => {
        cy
            .visit("/");
    });
});