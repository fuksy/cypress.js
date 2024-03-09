context("Проверка логики восстановления пароля", () => {
    it("e2e тест на проверку восстановления пароля", () => {
  cy.visit("https://login.qa.studio");
  
  cy.get('#forgotEmailButton').click();
  cy.get('#mailForgot').type('user@mail.ru');
  cy.get('#restoreEmailButton').click();
  cy.contains('Успешно отправили пароль на e-mail').should('be.visible');   
  cy.get('#exitMessageButton').should('exist')     
});
});