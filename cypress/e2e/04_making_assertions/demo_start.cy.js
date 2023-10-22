/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/1')

})

it('Create a Card',()=>{
  cy.get(`[data-cy="new-card"]`).click()

  cy.get('[data-cy="new-card-input"]').type("bread{enter}")

  cy.get(`[data-cy="card"]`).should("be.visible")
})

it('has proper number of cards',()=>{
  cy.get(`[data-cy="new-card"]`).click()

  cy.get('[data-cy="new-card-input"]').type("bread{enter}")

  cy.get(`[data-cy="card"]`).should("have.have.length", 2)
})

it('cards are visible', () => {
  cy.get('[data-cy="card"]').should("be.visible")
})

it('has the checkbox in checked state', () => {
 cy.get('[data-cy="card-checkbox"]').check()
 cy.get('[data-cy="card-checkbox"]').should('be.checked')
 cy.get('[data-cy="due-date"]').should('have.class','completed')
})

it.only('has correct list name', () => {
  cy.get('[data-cy="create-list"]').click()
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  // cy.get('[data-cy="list-name"]').should('have.value',"Pantry")
  cy.get(`[data-cy="list-name"]`).eq(1).should('have.value',"Pantry")
})