/// <reference types="cypress" />

describe('GUI - Testes Relacionados ao cadastro de Produto', () => {
    it('TC001 - Deve ser possivel cadastrar um produto', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz');
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
        
        //Salvando
        cy.get('#btn-salvar').click();

        //fechando modal
        cy.get('#cadastro-produto > div > div > div.modal-header > button').click();

        //verificar se foi cadastrado produto
        cy.get('body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(2)').should('have.text', 'Arroz');

    });

    it('TC002 - Nao deve ser possivel cadastrar produto com campo "codigo" em branco', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção do codigo em branco
        cy.get('#nome').type('Arroz');
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
        
        //Salvando
        cy.get('#btn-salvar').click();

        //verificar se apareceu o alerta
        cy.get('#mensagem').should('have.text', 'Todos os campos são obrigatórios para o cadastro!');

    });

    it('TC003 - Nao deve ser possivel cadastrar produto com campo "nome" em branco', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção do nome em branco
        cy.get('#codigo').type('01');
        // cy.get('#nome').type('Arroz'); em branco
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
        
        //Salvando
        cy.get('#btn-salvar').click();

        //verificar se apareceu o alerta
        cy.get('#mensagem').should('have.text', 'Todos os campos são obrigatórios para o cadastro!');

    });
    
    it('TC004 - Nao deve ser possivel cadastrar produto com campo "quantidade" em branco', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz'); 
        // cy.get('#quantidade').type('05'); EM BRANCO
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
        
        //Salvando
        cy.get('#btn-salvar').click();

        //verificar se apareceu o alerta
        cy.get('#mensagem').should('have.text', 'Todos os campos são obrigatórios para o cadastro!');

    });

    it('TC005 - Nao deve ser possivel cadastrar produto com campo "valor" em branco', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz'); 
        cy.get('#quantidade').type('05');
        // cy.get('#valor').type(2.00); Em Branco
        cy.get('#data').type('2024-06-25');
        
        //Salvando
        cy.get('#btn-salvar').click();

        //verificar se apareceu o alerta
        cy.get('#mensagem').should('have.text', 'Todos os campos são obrigatórios para o cadastro!');

    });


    it('TC006 - Nao deve ser possivel cadastrar produto com campo "data de cadastro" em branco', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz'); 
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        // cy.get('#data').type('2024-06-25');EM BRANCO
        
        //Salvando
        cy.get('#btn-salvar').click();

        //verificar se apareceu o alerta
        cy.get('#mensagem').should('have.text', 'Todos os campos são obrigatórios para o cadastro!');

    });

    it('TC007 - Nao deve ser possivel cadastrar produto com todos os campo em branco', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção da quantidade em branco
        // cy.get('#codigo').type('01'); todos os campos em branco
        // cy.get('#nome').type('Arroz'); todos os campos em branco
        // cy.get('#quantidade').type('05');todos os campos em branco
        // cy.get('#valor').type(2.00);todos os campos em branco
        // cy.get('#data').type('2024-06-25');todos os campos em branco
        
        //Salvando
        cy.get('#btn-salvar').click();

        //verificar se apareceu o alerta
        cy.get('#mensagem').should('have.text', 'Todos os campos são obrigatórios para o cadastro!');

    });

    it('TC008 - Nao deve ser possivel cadastrar produto com o codigo do produto duplicado', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz');
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
        
        //Salvando
        cy.get('#btn-salvar').click();

    
        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('feijao');
        cy.get('#quantidade').type('08');
        cy.get('#valor').type(3.00);
        cy.get('#data').type('2024-06-25');
                
         //Salvando
        cy.get('#btn-salvar').click();

        //fechar modal de cadastro
        cy.get('#cadastro-produto > div > div > div.modal-header > button').click();

        //verificar se apareceu o alerta
        cy.get('body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(1)').should('have.text', '01');
        cy.get('body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(2)').should('have.text', '01');
    });

    it('TC009 - Deve ser possivel editar o produto cadastrado', () => {

    cy.visit('http://127.0.0.1:5500/produtos.html');

    //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
    cy.get('#btn-adicionar').click();
    cy.get('#btn-adicionar').click();
 
    //Adicionando informações com exceção da quantidade em branco
    cy.get('#codigo').type('01');
    cy.get('#nome').type('Arroz');
    cy.get('#quantidade').type('05');
    cy.get('#valor').type(2.00);
    cy.get('#data').type('2024-06-25');
         
    //Salvando
    cy.get('#btn-salvar').click();

    //fechando modal
    cy.get('#cadastro-produto > div > div > div.modal-header > button').click();

    // Verifica se o produto foi adicionado à lista
    cy.get('tbody').contains('tr', 'Arroz').should('exist');

    // Abre o modal para editar o produto
    cy.get('tbody').contains('tr', 'Arroz').find('button').contains('Editar').click();

    // Modifica as informações do produto
    cy.get('#nome').clear().type('Feijão');
    cy.get('#quantidade').clear().type('10');
    cy.get('#valor').clear().type(3.50);

    // Salva as alterações
    cy.get('#btn-salvar').click();

    // Fecha o modal
    cy.get('#cadastro-produto .close').click();

    // Verifica se o produto foi atualizado na lista
    cy.get('tbody').contains('tr', 'Feijão').should('exist');
    cy.get('tbody').contains('tr', 'Arroz').should('not.exist');
    cy.get('tbody').contains('tr', 'Feijão').should('contain', '10');
    cy.get('tbody').contains('tr', 'Feijão').should('contain', '3.50');
    });

    it('TC010 - Deve ser possivel excluir o produto cadastrado', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');

        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
 
        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz');
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
         
        //Salvando
        cy.get('#btn-salvar').click();

         //fechando modal
        cy.get('#cadastro-produto > div > div > div.modal-header > button').click();

        // Verifica se o produto foi adicionado à lista
        cy.get('tbody').contains('tr', 'Arroz').should('exist');

        // Exclui o produto
        cy.get('tbody').contains('tr', 'Arroz').find('button').contains('Excluir').click();

        // Verifica se o produto foi excluído da lista
        cy.get('tbody').contains('tr', 'Arroz').should('not.exist');
            
    });

    it('TC011 - Deve ser possivel cadastrar o produto e fechar o modal de cadastro', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');

        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
 
        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz');
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
         
        //Salvando
        cy.get('#btn-salvar').click();

         // Verifica se o modal de cadastro está fechado
        cy.get('#cadastro-produto').should('not.be.visible');

            
    });

    it('TC012 - Deve ser possivel sair do modal de cadastro de produto ao clicar em sair', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');

        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
 
        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz');
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        cy.get('#data').type('2024-06-25');
         
        //Salvando
        cy.get('#btn-sair').click();
        cy.get('#btn-sair').click();

        // Verifica se o modal de cadastro está fechado
        cy.get('#cadastro-produto').should('not.be.visible');

    });

    it('TC013 - deve ser possivel fechar o alerta de ausencia de informação ao clicar no X', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz'); 
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        // cy.get('#data').type('2024-06-25');EM BRANCO
        
        //Salvando
        cy.get('#btn-salvar').click();

        //clicando no x do alerta;
        cy.get('#cadastro-produto > div > div > div.modal-body > div.alert.alert-danger.text-center.alert-dismissible > button').click
        cy.get('#cadastro-produto > div > div > div.modal-body > div.alert.alert-danger.text-center.alert-dismissible > button').click

        //verificando se o alerta fechou
        cy.get('#cadastro-produto .alert-danger').should('not.exist');
    });


    it('TC014 - deve retornar para tela de login ao clicar em voltar', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#collapsibleNavbar > ul > li > a').click();
        cy.get('#collapsibleNavbar > ul > li > a').click();

        
        //verificando se voltou para tela de login
        cy.url().should('include', 'login.html');
    });

    it('TC015 - deve excluir as informações incluidas no cadastro após eu fechar o modal de cadastro no X', () => {

        cy.visit('http://127.0.0.1:5500/produtos.html');
        //esta abrindo o modal apenas com dois cliques (adicionar logica para dar o erro)
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();

        //Adicionando informações com exceção da quantidade em branco
        cy.get('#codigo').type('01');
        cy.get('#nome').type('Arroz'); 
        cy.get('#quantidade').type('05');
        cy.get('#valor').type(2.00);
        // cy.get('#data').type('2024-06-25');EM BRANCO
        
        //fechando modal
        cy.get('#cadastro-produto > div > div > div.modal-header > button').click();

        //esta abrindo o modal novamente
        cy.get('#btn-adicionar').click();

        //verificar se os campos contem algum valor
        cy.get('#codigo').should('have.value', '');
        cy.get('#nome').should('have.value', '');
        cy.get('#quantidade').should('have.value', '');
        cy.get('#valor').should('have.value', '');
    });




});
