const basePath = '/'
const api = Cypress.env('api')

describe('Acceptance test', () => {
  it('Should visit the site and print Okiama on the screen', () => {
    cy.visit(basePath)
    cy.get('.App').contains('Okiama')
  })

  it('Should visit website and encounters 3 buttons ["Início", "Contato", "Sobre","Entrar"]', () => {
    cy.visit(basePath)
    cy.get('[class*="inicio"]').contains('Início')
    cy.get('[class*="contato"]').contains('Contato')
    cy.get('[class*="sobre"]').contains('Sobre')
    cy.get('[class*="entrar"]').contains('Entrar')
  })

  it('Should test api answer with code 200 ok', () => {
    cy.request(api + '/init-test/test')
      .its('status')
      .should('eq', 200)
  })

  it('Should show in the initial page the api answer rendered in the document screen', () => {
    cy.visit(basePath)
    cy.get('.api-container').contains('Está funcionando!')
  })

  it('Should go to registration page and print Registrar text inside h4', () => {
    cy.visit(basePath)
    cy.get('li[class*="entrar"]')
      .should('be.visible')
      // .wait(500)
      .click()
      .get('button[class*="cadastrar"]')
      .should('be.visible')
      // .wait(500)
      .click()
      .get('h4')
      .contains('Registrar')
  })
})
