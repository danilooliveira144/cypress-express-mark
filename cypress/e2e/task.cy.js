/// <reference types="cypress" />

describe('Tarefas', ()=>{

    it('Deve realizar o cadastro da tarefa com sucesso', ()=>{
        //acessando o endereço do sistema
        cy.visit('http://localhost:3000/')

        // Adicionando um valor ao campo de texto atráves do atributo placeholder do elemento input
        cy.get('input[placeholder="Add a new task"]')
            .type('Estudando cypress')
        
        // Clicando no botão de criar, utilizando a função contains do cypress
        cy.contains('button', 'Create').click()
    })
})