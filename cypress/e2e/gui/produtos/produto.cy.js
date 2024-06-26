/// <reference types="cypress" />

describe('GUI - Testes Relacionados ao cadastro de Produto', () => {
    it('TC001 - Nao deve ser possivel efetuar login sem informar email e senha', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Carro');
        cy.get('#quantidade').type('01');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
        
        //Salvando
        cy.get('#btn-salvar').click();

        //fechando modal
        cy.get('#cadastro-produto > div > div > div.modal-header > button').click();

    });



    // it('TC001 - Nao deve ser possivel efetuar login sem informar email e senha', () => {
    //     cy.visit('http://127.0.0.1:5500/produtos.html');
    //     cy.get('#btn-adicionar').click();
    //     cy.get('#btn-adicionar').click();
    // });

});
