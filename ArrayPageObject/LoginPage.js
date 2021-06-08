/// <reference types="Cypress" />

class LoginPage_PO
{
    navigateTo()
{   
    cy.visit('https://www.saucedemo.com/')
}
    fillUserName(userName)
{   
    return cy.get("#user-name").clear().type(userName)
}
    fillPassword(password)
{   
    return cy.get("#password").clear().type(password)
}
    clickLoginButton()
{
    cy.get("#login-button").click()
}
    
}
export default LoginPage_PO