const HomePage = require('../pageobjects/home.page')
const RegisterPage = require('../pageobjects/register.page')
const { expect } = require('chai')

describe('Sock shop user login and shopping experience', () => {
    it('should let user login to the application and add items to the cart', async () => {
            await HomePage.open()
            await browser.maximizeWindow()
            
            await HomePage.loginBtnOne.waitForDisplayed()
            await HomePage.loginBtnOne.click()
    
            await HomePage.submitUsername('testing99')
    
            await HomePage.submitPassword('secret@password')
    
            await HomePage.loginBtnTwo.click()
            
            let actualText = 'Logged in as testfirstname testlastname'
            expect(actualText).to.equals(await HomePage.logText.getText())
        
            await RegisterPage.logOutBtn.click() 

        });

        it('should not let user login with an invalid credentials', async () => {
            await HomePage.open()
            // await browser.maximizeWindow()
            
            await HomePage.loginBtnOne.waitForDisplayed()
            await HomePage.loginBtnOne.click()

            await HomePage.submitUsername('testing19')
    
            await HomePage.submitPassword('password')
    
            await HomePage.loginBtnTwo.click()
            
            let invalidLoginText = 'Invalid login credentials.'
            expect(invalidLoginText).to.equals(await HomePage.invalidLogin.getText())

        });
    });
