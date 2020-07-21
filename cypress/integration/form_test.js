// Objectives
// 1. We want to make the assertion that each of the field of the form can be filled out and that it has the proper value.
// 2. The button is disbaled if the form is not filled out.
// 3. The button is enabled when the form is properly filled out.
// Extra: We provide invalid value like the the email input and make sure that error message is displayed.


describe('form test', ()=> {
    it('test if the site is working', () => {
        cy.visit('/')

        cy.get('[for="name"] > input')
        .type('Rezaur Rahman')
        .should('have.value', 'Rezaur Rahman')
       
        const email = 'rezaur-rahman@lambdastudents.com'
        cy.get('[for="email"] > input')
        .type(email)
        .should('have.value', email)

        const text = 'Sup lets test this out'
        cy.get('textarea#motivation')
        .type(text)
        .should('have.value', text)
    })
})