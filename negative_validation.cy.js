context("Проверка на негативный кейс валидации", () => {
    it("e2e тест на проверку валидации", () => {
  cy.visit("https://login.qa.studio");
  cy.get('#mail').type('user');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.contains('Нужно исправить проблему валидации').should('be.visible');   
  cy.get('#exitMessageButton').should('exist')     
});
});