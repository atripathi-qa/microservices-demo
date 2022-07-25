const RegisterPage = require('../pageobjects/register.page')

describe('User sockshop registration', () => {
    it('should let user register to the application', async () => {
        await RegisterPage.open()
        await browser.maximizeWindow()
        
        await RegisterPage.registerBtnOne.waitForDisplayed()

        await RegisterPage.registerBtnOne.click()
        
        await RegisterPage.registerUser('username')

        await RegisterPage.registerFirstname('firstname')

        await RegisterPage.registerLastName('lastname')

        await RegisterPage.registerEmail('email')

        await RegisterPage.registerPassword('secret@password')

        await RegisterPage.registerBtnTwo.click()

        await RegisterPage.accountTab.waitForDisplayed()
        
        await RegisterPage.logOutBtn.click()
    });

    it('should not let user register with incomplete details-bug', async () => {
        await RegisterPage.open()
        await browser.maximizeWindow()
        
        await RegisterPage.registerBtnOne.waitForDisplayed()
        await RegisterPage.registerBtnOne.click();
        
        await RegisterPage.registerUser('username')

        await RegisterPage.registerFirstname('firstname')

        await browser.keys('Enter')
    });
});
