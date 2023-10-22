/// <reference types="cypress" />



/*
  ⚠️ before doing the challenge, create a new board in the app
  you can change "it" to "it.only" to run a single test
  ℹ️ you might need to reset your app in between tests. to do that
  use F2 key to toggle tools that will help you
*/

beforeEach( () => {
  cy.request('POST', '/api/reset')
  cy.visit("/")
  cy.get(`[data-cy="first-board"]`).type("new board{enter}"); // ⚠️ add ID of your board
  cy.visit('/board/1')
})

// challenge #1: create a new list and assert it is visible
it('creating a list', () => {
  // cy.get('[data-cy="create-list"]').click()
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  cy.get('[data-cy="list-name"]').should("be.visible")
})

// challenge #2: create one more list and assert that there are exactly two in the app
it('asserting number of lists', () => {
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  // cy.get('[data-cy="create-list"]').click()
  cy.get('[data-cy="add-list-input"]').type("Grocery{enter}")
  cy.get('[data-cy="list"]').should("have.length", 2)
})

// challenge #3: start this test with a single list in the app. delete it and then assert it does not exist
it('deleting a list', () => {
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  cy.get('[data-cy="list-options').click()
  cy.get('[data-cy="delete-list"').click()
  cy.get('[data-cy="list"]').should("not.exist")
})

// challenge #4: start the test with a single card, check it and then assert it is checked
it('asserting the checked state', () => {
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  cy.get('[data-cy="new-card"]').click()
  cy.get('[data-cy="new-card-input"]').type("Cake{enter}")
  cy.get('[data-cy="card-checkbox"]').check()
  cy.get('[data-cy="card-checkbox"]').should("be.checked")
})

// challenge #5: start test with a single list in the app. change the name of the list and then assert the changed name of the list
it('asserting list name', () => {
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  cy.get('[data-cy="list-name"]').type("Groceries{enter}")
  cy.get('[data-cy="list-name"]').should("have.value","Groceries")
})

// challenge #6: assert the text of a card
it.only('assert text of a card', () => {
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  cy.get('[data-cy="new-card"]').click()
  cy.get('[data-cy="new-card-input"]').type("Cake{enter}")
  cy.get('[data-cy="card-text"]').then((card)=>{
    cy.wrap(card).should('have.text','Cake')
  })
  // cy.get('[data-cy="card-text"]').should('have.text','Cake')

})

// challenge #7: click on newly created card and check that the detail modal has opened
it('checking the card detail', () => {
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  cy.get('[data-cy="new-card"]').click()
  cy.get('[data-cy="new-card-input"]').type("Cake{enter}")
  cy.get('[data-cy="card"]').click()
  cy.get('[data-cy="card-detail-backdrop"]').should('be.visible')
})

// challenge #8: opened created card and close it. check closing the card
it('closing the card', () => {
  cy.get('[data-cy="add-list-input"]').type("Pantry{enter}")
  cy.get('[data-cy="new-card"]').click()
  cy.get('[data-cy="new-card-input"]').type("Cake{enter}")
  cy.get('[data-cy="card"]').click()
  cy.get('[data-cy="card-detail-backdrop"] [data-cy="cancel"]').click()
  cy.get('[data-cy="card-detail-backdrop"]').should('not.exist')
})