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

    it.only('Deve realizar cadastro da tarefa com dados Faker', () => {
        // Acessando o endereço do sistema
        cy.visit('http://localhost:3000/')

        // Adicionando um dado faker ao valor do campo de texto atráves do atributo placeholder do elemento input
        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudar a música ' + faker.music.songName())

        // Clicando no botão de criar, utilizando a função contains do cypress
        cy.contains('button', 'Create').click()
    })
})