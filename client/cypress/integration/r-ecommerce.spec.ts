describe('Acceptance test', () => {
	it('Should visit the site and print ROCHA on the screen', () => {
		cy.visit('http://localhost:4000');
		cy.get('.App').contains('ROCHA');
	});
});
