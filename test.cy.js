let x=1;
describe('ToDo', () => {
  it('Task', () => {
    cy.visit('https://forhemer.github.io/React-Todo-List/')
    while (x<4){
      cy.get('.input-text').type(x)
      cy.contains("Submit").click()
      cy.contains(x).should("be.visible")
      x+=1
      
    }
    cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ').click()
    cy.get('ul > :nth-child(1)').should("have.css","font-style")
    cy.get(':nth-child(1) > button').click()
    cy.get('ul > :nth-child(1)').should('not.have.value', '1')
  })
})
