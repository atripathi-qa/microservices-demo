const LoginPage = require('../pageobjects/loginshoppage');
const { expect } = require('chai');
let actualText = '';

describe('Sock shop user login and shopping experience', () => {
    it('should let user login to the application and add items to the cart', async () => {
            await LoginPage.open();
            
            await LoginPage.loginBtnOne.waitForDisplayed(5000);
            
            await LoginPage.loginBtnOne.click();
    
            await LoginPage.submitUsername('testing99');
    
            await LoginPage.submitPassword('secret@password');
    
            await LoginPage.loginBtnTwo.click();

            await LoginPage.catalogueBtn.waitForDisplayed(5000);
            
            actualText = 'Logged in as testfirstname testlastname';
            expect(actualText).to.equals(await LoginPage.logText.getText());

            await LoginPage.catalogueBtn.click();

            await LoginPage.filterBlueBtn.waitForDisplayed(3000);
            await LoginPage.filterBlueBtn.click();

            await LoginPage.filterSportBtn.click();

            await LoginPage.applyBtn.click();

            await LoginPage.addProductOne.click();
            await LoginPage.addProductTwo.click();

            await LoginPage.cartItems.click();

            await LoginPage.cartDisplayed.waitForDisplayed(5000);

            await LoginPage.checkoutBtn.click();
        });
    });
