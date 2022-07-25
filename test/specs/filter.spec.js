const HomePage = require('../pageobjects/home.page')
const { expect } = require('chai')

describe('Sockshop homepage filter button', () => {
    it('user should be able to filter the products', async () => {
        await browser.waitUntil(() => HomePage.catalogueBtn.isDisplayed())
        
        await HomePage.catalogueBtn.click()

        await HomePage.filterBlueBtn.click()

        await HomePage.filterSportBtn.click()

        await HomePage.applyBtn.click()

        await HomePage.totalProducts.isDisplayed()
    });

    it('should let user clear filter and add new filter', async ()=>{
        await HomePage.filterBlueBtn.click()

        await HomePage.clearFilter.click()

        await HomePage.applyBtn.click()

        let countMessage = 'Showing 0 of 0 products'
        expect(countMessage).to.equals(await HomePage.totalProducts.getText())
            
    });

});