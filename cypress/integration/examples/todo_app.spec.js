describe('Todo app is online', function() {
    it('front-page can be opened', function() {
        cy.visit('http://localhost:3000');
        cy.contains('input field');
    })
})

describe('Creating/Deleting/Editing', function() {

    it('user can add todo', function () {
        cy.get('#newTodo').type('test Todo');
        cy.get('#createTodo').click();
        cy.reload();
        cy.contains('test Todo');
    })

    it('user can delete todo', function () {
        cy.get('#deleteTodo').click();
        cy.should('not.contain', 'test Todo');
    })
})