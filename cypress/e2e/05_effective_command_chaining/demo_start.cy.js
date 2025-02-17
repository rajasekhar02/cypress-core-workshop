/// <reference types="cypress" />

beforeEach(() => {
  
  cy.visit('/board/1')

});

it('has a card with due date on 1st March', () => {

  cy.visit('/board/1')

  cy.contains('[data-cy=card]', 'Mar 01 2022')

})

it('checks date of a card', () => {

  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Juice')
    .get('[data-cy=due-date]')
    .should('have.text', 'Feb 14 2022')
  
});

it.only('check text of all cards in first list', () => {

  // cy.get('[data-cy=card-text]')
  //   .eq(0)
  //   .should('have.text', 'Milk')

  // cy.get('[data-cy=card-text]')
  //   .eq(1)
  //   .should('have.text', 'Bread')

  // cy.get('[data-cy=card-text]')
  //   .eq(2)
  //   .should('have.text', 'Juice')
  let cardTitles = ['Milk','Bread','Juice']
  cy.get("[data-cy='list']").eq(0).get('[data-cy=card-text]').then((card)=>{
    cy.wrap(card[0]).should("have.text",'Milk')
    cy.wrap(card[1]).should("have.text",'Bread')
    cy.wrap(card[2]).should("have.text",'Juice')
  })

});
