/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit ('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
    
        //cadastro de endereço
    });
});