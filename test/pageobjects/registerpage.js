const Page = require('./page');

class RegisterPage extends Page {
     /**
    * define elements
    * 
    */
    get registerBtnOne () {
        return $('#register > a');
    }

    get inputUsername () {
        return $('//*[@id="register-username-modal"]');
    }

    get inputFirstName () {
        return $('//*[@id="register-first-modal"]');
    }

    get inputLastName () {
        return $('//*[@id="register-last-modal"]');
    }

    get inputEmail () {
        return $('//*[@id="register-email-modal"]');
    }

    get inputPassword () {
        return $('//*[@id="register-password-modal"]');
    }

    get registerBtnTwo () {
        return $('p.text-center:nth-child(6) > button:nth-child(1)');
    }

    get accountTab() {
        return $('#tabAccount > a:nth-child(1)');
    }
    
    get logOutBtn () {
        return $('#logout > a:nth-child(1)');
    }

    /**
     * method to return the elements
     * @param {String} username
     * @param {String} firstname 
     * @param {String} lastname
     * @param {String} email 
     * @param {String} password
     */

    async submitUsername (username) {
        username = Math.random().toString(36).substring(7);
        await this.inputUsername.setValue(username);
    }

    async submitFirstName (firstname) {
        firstname = Math.random().toString(36).substring(7);
        await this.inputFirstName.setValue(firstname);
    }

    async submitLastName (lastname) {
        lastname = Math.random().toString(36).substring(7);
        await this.inputLastName.setValue(lastname);
    }

    async submitEmail (email) {
        email = Math.random().toString(36).substring(7);
        email = email + '@test.com';
        await this.inputEmail.setValue(email);
    }

    async submitPassword (password) {
        await this.inputPassword.setValue(password);
    }

    open () {
        return super.open('');
    }
}
module.exports = new RegisterPage();
