context("Проверка на негативный кейс авторизации", () => {
    it("e2e тест на проверку авторизации", () => {
  cy.visit("https://login.qa.studio");
  cy.get('#mail').type('user@mail.ru');
  cy.get('#pass').type('12345');
  cy.get('#loginButton').click();
  cy.contains('Такого логина или пароля нет').should('be.visible');   
  cy.get('#exitMessageButton').should('exist')     
});
});