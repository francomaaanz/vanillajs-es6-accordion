describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('https://francomaaanz.github.io/vanillajs-es6-accordion/')
      cy.get('title').contains('Schibsted Accordion')
      cy.get('#accordion1 > .accordion-panel').should('have.class', 'accordion-panel')
      cy.get('#accordion1:nth-child(1)').click({ force: true, multiple: false })
      cy.get('#accordion1:nth-child(1)').trigger('click').contains('Ghost Story').should('have.class', 'accordion-panel accordion-panel--active')
      //expect(true).to.equal(true)

    })
  })