/// <reference types="cypress" />

it('board has no lists', () => {

  cy.intercept( 'GET', '/api/lists?boardId=1').as('listsAPI')
  
  cy.visit('/board/1')
  
  cy.wait('@listsAPI')
  // cy.contains("Loading data...").should('not.exist') not working
  
  cy.get('[data-cy="list"]')
    .should('not.exist')
  
});

it.only('deleting a list', () => {
  cy.intercept({
    method: 'DELETE',
    url:"/api/lists/*"
  }).as('deleteList')

  cy.visit('/board/1')

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()
  cy.wait('@deleteList')
  cy.get(`[data-cy="list"]`).should("not.exist")
});