/// <reference types="cypress" />

describe('GUI - Testes Relacionados a Tela de Login', () => {
    it('TC001 - nao deve ser possivel efetuar login sem informar email e senha', () => {
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'Informe usuário e senha, os campos não podem ser brancos.');
    });


    it('TC002 - nao deve ser possivel efetuar login com email valido e senha em branco', () => {
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.get('#email').type('admin@admin.com');
        // cy.get('#senha').clear();
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'Informe usuário e senha, os campos não podem ser brancos.');
    });

    it('TC003 - nao deve ser possivel efetuar login com email em branco e senha valida', () => {
        cy.visit('http://127.0.0.1:5500/login.html');
        // cy.get('#email').type('admin@admin.com');
        cy.get('#senha').type('admin@123');
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'Informe usuário e senha, os campos não podem ser brancos.');
    });

    
    it('TC004 - nao deve ser possivel efetuar login com email valido e senha invalida', () => {
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.login('admin@admin.com', 'admin');
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'E-mail ou senha inválidos');
    });

    it('TC005 - nao deve ser possivel efetuar login com email invalido e senha valida', () => {
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.login('admin@admin', 'admin@123');
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'E-mail ou senha inválidos');
    });

    it('TC006 - nao deve ser possivel efetuar login com email invalido e senha invalida', () => {
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.login('admin@admin', 'admin@123');
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'E-mail ou senha inválidos');
    });

    it('TC007 - deve ser possivel efetuar login com email valido e senha valida', () => {
        cy.visit('http://127.0.0.1:5500/login.html');
        cy.login('admin@admin.com', 'admin@123');
        cy.get('.navbar-brand').should('contain', 'Controle de produtos');
    });

});
