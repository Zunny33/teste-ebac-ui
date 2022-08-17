/// <reference types="cypress" />


describe('Funcionalidade Página de produtos', () => {
});

    beforeEach(() => {
        cy.visit('produtos')

    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
         //.first()
         //.last()
         //.eq(3)
         .contains('Aether Gym Pant')
         .click()

    });

    it('Deve adicionar um item ao carrinho', () => {

        var quantidade = 3

        cy.get('[class="product-block grid"]')
         .contains('Aether Gym Pant')
         .click()
         cy.get('.button-variable-item-33').click()
         cy.get('.button-variable-item-Green').click()
         cy.get('.input-text').clear().type(quantidade).click()
         cy.get('.single_add_to_cart_button').click()

         cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
         cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
    });


    it ('Deve adicionar produtos ao carrinho - utilizando comando personalizado', () => {
         cy.addProdutos('Apollo Running Short', '34', 'Black', 2 )
});

it.only ('Deve adicionar produtos ao carrinho - utilizando comando personalizado', () => {
    cy.addProdutos('Aether Gym Pant', '33', 'Green', 3 )
});