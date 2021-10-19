const basePath = '/'
const api=Cypress.env('api');

describe('Acceptance test', () => {
	it('Should visit the site and print ROCHA on the screen', () => {
		cy.visit(basePath);
		cy.get('.App').contains('ROCHA');
	});

	

	it('Should visit website and encounters 3 buttons ["Início", "Contato", "Sobre"]', ()=>{
		cy.visit(basePath);
		cy.get('[class*="inicio"]').contains('Início')
		cy.get('[class*="contato"]').contains('Contato')
		cy.get('[class*="sobre"]').contains('Sobre')
	})

	it('Should test api answer with code 200 ok', ()=>{
		cy.request(api+'/init-test/test').its('status').should('eq', 200)
	})

	it('Should show in the inital page the api answer rendered in the document screen',()=>{
		cy.visit(basePath)
		cy.get('.api-container').contains("It is working")
	})
});
