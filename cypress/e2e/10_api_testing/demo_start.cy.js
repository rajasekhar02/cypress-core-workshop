/// <reference types="cypress" />

it('sends a request over API', () => {
  cy.request('POST', '/api/boards',{
    name:"board created via api"
  })
  .its('status',{timeout:0})
  .should('eq',201)
  // cy.visit('/')  
});

it('response gets 201 status', () => {
  
});

it.only('testing board list', () => {
  cy.request({
    method: 'GET',
    url:'/api/boards',
    headers:{
      accept:'application/json'
    }
  }).then((resp)=>{
    cy.wrap(resp).its('status').should("eq",200)
    cy.wrap(resp).its('body').should("have.length",18)
  })
});

it('resetting database', () => {
  
});