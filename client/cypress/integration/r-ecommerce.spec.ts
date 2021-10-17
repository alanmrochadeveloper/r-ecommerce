describe('Acceptance test', () => {
	it('Should visit the site and print ROCHA on the screen', () => {
		cy.visit('http://localhost:4000');
		cy.get('.App').contains('ROCHA');
	});

	it('Should visit website and encounters 3 buttons ["Início", "Contato", "Sobre"]', ()=>{
		cy.visit('http://localhost:4000');
		cy.get('button*[class*="inicio"]').contains('Início')
		cy.get('button*[class*="contato"]').contains('Contato')
		cy.get('button*[class*="sobre"]').contains('Sobre')
	})
});
