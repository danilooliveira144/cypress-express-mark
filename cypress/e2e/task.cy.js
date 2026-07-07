/// <reference types="cypress" />

describe('Tarefas', ()=>{

    it('Deve realizar o cadastro da tarefa com sucesso', ()=>{
        cy.visit('http://localhost:3000/')

        cy.get('input[placeholder="Add a new task"]')
            .type('Estudando cypress')
    })
})