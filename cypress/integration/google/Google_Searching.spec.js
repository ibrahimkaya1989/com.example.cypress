describe('Google searching spec', () => {

  it('passes', () => {
    cy.visit(Cypress.expose('googleUrl'));
    cy.get("title").should('have.text', 'Google');
    cy.get("textarea[name='q'], input[name='q']")
      .first()
      .should('be.visible')
      .type('Cypress Automation')
      .should('have.value', 'Cypress Automation');
    cy.get("input[name='btnK']").first().click();
  })

  it('searches for JavaScript automation', () => {
    cy.visit(Cypress.expose('googleUrl'));
    cy.get("textarea[name='q'], input[name='q']")
      .first()
      .should('be.visible')
      .type('Javascript Automation')
      .should('have.value', 'Javascript Automation');
    cy.get("input[name='btnK']").first().click();
  })

})