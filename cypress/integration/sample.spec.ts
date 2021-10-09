/// <reference types="cypress" />

describe('sample', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('show one line text', () => {
    cy.get("[data-cy='title']").should('contain.text', 'Vite React TS + Cypress')
  })
})
