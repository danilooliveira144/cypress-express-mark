/// <reference types="cypress" />

describe('home', () => {
  it('Deve acessar o sistema', () => {
    // Acessa o endereço do sistema
    cy.visit('http://localhost:3000/')

    //Verifica que o dado atual é igual ao valor.
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})