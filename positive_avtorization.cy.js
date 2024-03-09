context("Проверка на позитивный кейс авторизации", () => {
        it("e2e тест на проверку авторизации", () => {
      cy.visit("https://login.qa.studio");
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Авторизация прошла успешно').should('be.visible');   
      cy.get('#exitMessageButton').should('exist')     
    });
  });