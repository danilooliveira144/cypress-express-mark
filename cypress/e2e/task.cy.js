/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Tarefas', () => {

    it('Deve realizar o cadastro da tarefa com sucesso', () => {
        // Acessando o endereço do sistema
        cy.visit('http://localhost:3000/')

        // Adicionando um valor ao campo de texto atráves do atributo placeholder do elemento input
        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudando cypress')

        // Clicando no botão de criar, utilizando a função contains do cypress
        cy.contains('button', 'Create').click()
    })

    it('Deve realizar cadastro da tarefa com dados Faker', () => {
        // Acessando o endereço do sistema
        cy.visit('http://localhost:3000/')

        // Adicionando um dado faker ao valor do campo de texto atráves do atributo placeholder do elemento input
        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudar a música ' + faker.music.songName())

        // Clicando no botão de criar, utilizando a função contains do cypress
        cy.contains('button', 'Create').click()
    })

    it('Deve realizar cadastro da tarefa com sucesso, consumindo a API Rest', () => {

        /**
         * Enviando um requisição http para o endpoint, utilizando o método 'DELETE',
         * passando o valor de name no corpo da requsição e validando o retorno da resposta da API
         */
        cy.request({
            url: 'http://localhost:3333/helper/tasks/',
            method: 'DELETE',
            body: { name: 'Estudando cypress' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        // Acessando o endereço do sistema
        cy.visit('http://localhost:3000/')

        // Adicionando um valor ao campo de texto atráves do atributo placeholder do elemento input
        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudando cypress')

        // Clicando no botão de criar, utilizando a função contains do cypress
        cy.contains('button', 'Create').click()

    })

    it.only('Deve realizar o cadastro da tarefa com sucesso e validar se foi cadastrado', ()=>{
                /**
         * Enviando um requisição http para o endpoint, utilizando o método 'DELETE',
         * passando o valor de name no corpo da requsição e validando o retorno da resposta da API
         */
        cy.request({
            url: 'http://localhost:3333/helper/tasks/',
            method: 'DELETE',
            body: { name: 'Estudando cypress' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        // Acessando o endereço do sistema
        cy.visit('http://localhost:3000/')

        // Adicionando um valor ao campo de texto atráves do atributo placeholder do elemento input
        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudando cypress')

        // Clicando no botão de criar, utilizando a função contains do cypress
        cy.contains('button', 'Create').click()

        // Verifica que o elemento está visivel e válida que a tarefa foi criada.
        // Só utilizar quando houver um unico elemento com esse nome
        cy.get('main div p')
            .should('be.visible')
            .should('have.text', 'Estudando cypress')

        // Utilizar quando houver mais de um elemento
        cy.contains('main div p', 'Estudando cypress')
            .should('be.visible')
    })
})