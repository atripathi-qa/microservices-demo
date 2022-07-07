const RegisterPage = require('../pageobjects/registerpage');

describe('User sockshop registration', () => {
    it('should let user register to the application- positive flow', async () => {
        await RegisterPage.open();
        await RegisterPage.registerBtnOne.waitForDisplayed(2000);

        await RegisterPage.registerBtnOne.click();
        
        await RegisterPage.submitUsername('username');

        await RegisterPage.submitFirstName('firstname');

        await RegisterPage.submitLastName('lastname');

        await RegisterPage.submitEmail('email');

        await RegisterPage.submitPassword('secret@password');

        await RegisterPage.registerBtnTwo.click();

        await RegisterPage.accountTab.waitForDisplayed(3000);
        
        await RegisterPage.logOutBtn.click();
    });

    it('should let another user register to the application- negative flow', async () => {
        await RegisterPage.open();
        await RegisterPage.registerBtnOne.waitForDisplayed(2000);

        await RegisterPage.registerBtnOne.click();
        
        await RegisterPage.submitUsername('username');

        await RegisterPage.submitFirstName('firstname');

        await browser.keys('Enter');

        await RegisterPage.submitLastName('lastname');

        await RegisterPage.submitEmail('email');

        await RegisterPage.submitPassword('secret@password');

        await RegisterPage.registerBtnTwo.click();

        await RegisterPage.accountTab.waitForDisplayed(3000);

        await RegisterPage.logOutBtn.click();


    });
});
