context("Проверка на негативный кейс валидации", () => {
    it("e2e тест на проверку валидации", () => {
  cy.visit("https://login.qa.studio");
  cy.get('#mail').type('GerMan@Dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.contains('Авторизация прошла успешно').should('be.visible');   
  cy.get('#exitMessageButton').should('exist')     
});
});