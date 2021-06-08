/// <reference types="Cypress" />


import LoginPage_PO from '../ArrayPageObject/LoginPage.js'
describe('arrayDemoDemonstration', () => {
    it('arrayDemo1', () => {
        
        const LoginPage = new LoginPage_PO
        LoginPage.navigateTo()                                                                         // Go to the system and login
        LoginPage.fillUserName("standard_user")
        LoginPage.fillPassword("secret_sauce")
        LoginPage.clickLoginButton()

        cy.get(".header_secondary_container").should("contain", "Products")                             // Assertions
        cy.get(".title").should('be.visible')

        cy.get(".inventory_item_name").each(($el, index, $listOfElements) =>{                           // Array
        if(index == 4){
            $el.trigger("click")
        }
        })
        cy.contains("Sauce Labs Onesie").should("contain", "Sauce Labs Onesie")                         // Assertions
        
    });
    it('arrayDemo2', () => {
        
        const Login = new LoginPage_PO
        Login.navigateTo()                                                                             // Go to the system and login
        Login.fillUserName("standard_user")
        Login.fillPassword("secret_sauce")
        Login.clickLoginButton()

        cy.get(".header_secondary_container").should("contain", "Products")                             // Assertions
        cy.get(".title").should('be.visible')

        cy.get(".inventory_item_name").each(($el) =>{                                                   // Array
            if($el.text().includes("Sauce Labs Bolt T-Shirt")){
                $el.trigger("click")
            }
        })
        cy.contains("Sauce Labs Bolt T-Shirt").should("contain", "Sauce Labs Bolt T-Shirt")            // Assertions
    });


    it('ConditionalStatements ', () => {
        
        const Login = new LoginPage_PO
        Login.navigateTo()                                                                             // Go to the system and login
        Login.fillUserName("standard_user")
        Login.fillPassword("secret_sauce")
        Login.clickLoginButton()

        cy.get(".header_secondary_container").should("contain", "Products")                             // Assertions
        cy.get(".title").should('be.visible')

        cy.get('body').then(($conditions) => {                                                          // Conditional Statements 
            if ($conditions.text().includes("29.999")){
               cy.contains("29.999").click()

            } else if ($conditions.text().includes("15.999")){
                cy.contains("15.999").click()
                
            }else {
                cy.contains("7.99").click({force:true})
            }
        })
    });

    it('arrayDemo3', () => {
        
        const LoginPage = new LoginPage_PO
        LoginPage.navigateTo()                                                                         // Go to the system and login
        LoginPage.fillUserName("standard_user")
        LoginPage.fillPassword("secret_sauce")
        LoginPage.clickLoginButton()

        cy.get(".header_secondary_container").should("contain", "Products")                             // Assertions
        cy.get(".title").should('be.visible')

        

        const elements = [                                                                              // Array Information
            "Sauce Labs Backpack",
            "Sauce Labs Bike Light",
            "Sauce Labs Bolt T-Shirt",
            "Sauce Labs Fleece Jacket",
            "Sauce Labs Onesie",
            "Test.allTheThings() T-Shirt (Red)",
        ] 

        cy.get(".inventory_item_name").each(($el, index, $listOfElements) => {                           // Array
            if($el.text().includes("Sauce Labs Bolt T-Shirt", elements[index])) {

                cy.wrap($el).trigger("click")
                expect($listOfElements).to.have.length(6)
            }
          

        })
        
    });


    it('arrayAndConditionalStatements', () => {
        
        const LoginPage = new LoginPage_PO
        LoginPage.navigateTo()                                                                         // Go to the system and login
        LoginPage.fillUserName("standard_user")
        LoginPage.fillPassword("secret_sauce")
        LoginPage.clickLoginButton()

        cy.get(".header_secondary_container").should("contain", "Products")                             // Assertions
        cy.get(".title").should('be.visible')


        cy.get(".inventory_item_name").each(($el, index, $listOfElements) => {                           // Array
            if($el.text().includes("Sauce Labs Backpack")) {

                cy.contains("Add to cart").click()
            }


            else if($el.text().includes("Sauce Labs Bike Light")) {                                      // ConditionalStatements

                cy.contains("Add to cart").click()
            }
            else if($el.text().includes("Sauce Labs Bolt T-Shirt")) {

                cy.contains("Add to cart").click()
            }
            else if($el.text().includes("Sauce Labs Fleece Jacket")) {

                cy.contains("Add to cart").click()
            }
            else if($el.text().includes("Sauce Labs Onesie")) {

                cy.contains("Add to cart").click()
            }
            else  {

                cy.contains("Add to cart").click()
            }
        })

            cy.get("#shopping_cart_container").click()
            cy.get("#checkout").click()
            cy.get("#first-name").type("Ivan")
            cy.get("#last-name").type("Georgiev")
            cy.get("#postal-code").type("1000")
            cy.get("#continue").click()
            cy.get("#finish").click()
        
            cy.contains("THANK YOU FOR YOUR ORDER").should("contain", "THANK YOU FOR YOUR ORDER")       // Assertions
        

    });

    it('ArrayCleanCode', () => {
        const LoginPage = new LoginPage_PO
        LoginPage.navigateTo()                                                                         // Go to the system and login
        LoginPage.fillUserName("standard_user")
        LoginPage.fillPassword("secret_sauce")
        LoginPage.clickLoginButton()

        cy.get("div.inventory_item_name").as("AllItemsNames")                                          // First page - shop items 

        cy.get("div.inventory_item").each(($el) => {

        cy.get($el).contains("Add to cart").click()

        })

        cy.get(".shopping_cart_link").click()

        cy.get("div.inventory_item_name").as("NameOfAllItemsInTheCart")                                 // Second page - cart items 

        cy.get("@AllItemsNames").each((name) => {
            cy.get("@NameOfAllItemsInTheCart").should("contain", name.text())
        })
    });
}); 