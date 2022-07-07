const Page = require('./page');

class LoginShopPage extends Page {
    /**
    * define elements
    * 
    */

    get loginBtnOne () {
        return $('//*[@id="login"]');
    }

    get userNameField () {
        return $('//*[@id="username-modal"]');
    }

    get passwordField () {
        return $('//*[@id="password-modal"]');
    }

    get loginBtnTwo () {
        return $('//*[@class="btn btn-primary"]');
    }

    get logText () {
        return $('#howdy > a:nth-child(1)');
    }

    get catalogueBtn () {
        return $('.dropdown-toggle');
    }

    get filterBlueBtn () {
        return $('div.checkbox:nth-child(4) > label:nth-child(1) > input:nth-child(1)');
    }

    get filterSportBtn () {
        return $('div.checkbox:nth-child(8) > label:nth-child(1) > input:nth-child(1)');
    }

    get applyBtn () {
        return $('#filters-form > a:nth-child(2)');
    }

    get addProductOne (){
        return $('#products > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > p:nth-child(3) > a:nth-child(2)');
    }
    
    get addProductTwo () {
        return $('div.col-md-4:nth-child(2) > div:nth-child(1) > div:nth-child(3) > p:nth-child(3) > a:nth-child(2)');
    }

    get cartItems () {
        return $('#numItemsInCart');
    }

    get cartDisplayed () {
        return $('#basket > div:nth-child(1) > form:nth-child(1) > h1:nth-child(1)');
    }

    get checkoutBtn (){
        return $('#orderButton');
    }

    /**
     * method to return the elements
     * 
     * @param {String} username
     * @param {String} password 
     */

    async submitUsername (username) {
        await this.userNameField.setValue(username);
    }

    async submitPassword (password) {
        await this.passwordField.setValue(password);
    }

    open () {
        return super.open('');
    }
}
module.exports = new LoginShopPage();
