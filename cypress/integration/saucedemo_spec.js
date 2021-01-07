describe('Logar e validar saucedemo', () => {
    it('Acessa a página saucedemo', () =>{
        cy.visit('http://saucedemo.com')
    });
    it('Realiza o login na landing page', () =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    });
    it('Validar página', () =>{
        cy.url().should('include','/inventory.html')
        cy.contains('Products').should('be.visible')
    })
})