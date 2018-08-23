describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('https://francomaaanz.github.io/vanillajs-es6-accordion/')
    cy.get('title').contains('Schibsted Accordion')
    cy.get('#accordion1 > .Accordion-panel').should('have.class', 'Accordion-panel')
    cy.get('#accordion1:nth-child(1)').click({ force: true, multiple: false })
    cy.get('#accordion1:nth-child(1)').trigger('click').contains('Ghost Story').should('have.class', 'Accordion-panel is-active')  
  })
})