/// <reference types="Cypress" />

describe('Visitar primer comic', () => {
    it('Visitar primer comic', () => {
      cy.visit('http://localhost:4200');
      cy.get('.container .comic:nth-child(1) .mat-card-footer a').click();
    });
  });