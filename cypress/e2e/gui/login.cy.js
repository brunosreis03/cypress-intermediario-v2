describe('login', () => {
  it('successfully', () => {
    const user = {
      login: Cypress.env('user_name'),
      password: Cypress.env('user_password')
    }
    const options = { cacheSession: false }

    cy.login(user.login, user.password, options)
    cy.get('.qa-user-avatar').should('be.visible')
  })
})