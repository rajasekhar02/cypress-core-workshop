it.only('creates a new list with a card in it', () => {
    cy.visit('/board/1')
    cy.get('[data-cy="add-list-input"]').type("grocery test{enter}")
})