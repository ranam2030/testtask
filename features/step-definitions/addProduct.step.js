import { Given, When, Then } from '@wdio/cucumber-framework';
import genericUtils from '../../utils/generic.utils';
import commonPage from '../pageobjects/common.page';
import addProductPage from '../pageobjects/addProduct.page';
import electronicsPage from '../pageobjects/electronics.page';
import mattressBedroomPage from '../pageobjects/mattressBedroom.page';

//Feature01
Given(/^Mike on home page after opening nopCart mobile app$/, async()=>{
    await commonPage.clickAceptBtn();
});

When(/^Mike click electronics from OUR CATEGORIES list from home page$/, async()=>{
    await driver.pause(1000);
    await genericUtils.scrollH();
    await addProductPage.selectElectronicsCart();
});

When(/^Mike click to Mattress Bedroom product details page$/, async()=>{
    await genericUtils.scrollToMattressBedroom();
    await electronicsPage.clickProductDetailsMattressBedroom();
});
When(/^Mike click plus button to increase Qty by 2$/, async()=>{
    await driver.pause(1000);
    await genericUtils.scrollToQuantity();
    await driver.pause(1000);
    console.log("Scroll to the Quantity section");
    await mattressBedroomPage.clickPlusBtnbyTwo();
    await driver.pause(1000);
    console.log("Dobule Click");
});
Then(/^Mike click add to cart button to add the product in his cart$/, async()=>{
    await driver.pause(1000);
    console.log("Add to card click");
    await mattressBedroomPage.clickAddToCartBtn();
    await driver.pause(1000);
});

//SecenerioTwo
Given(/^Mike go to shopping cart by clicking top cart icon$/, async()=>{


});


When(/^Mike click checkout button from shopping cart page$/, async()=>{
   
});


When(/^Mike select checkout as guest from shopping cart page$/, async()=>{
   
});


Then(/^Mike input all the details in checkout billing details page and click continue$/, async()=>{
   
});


When(/^Mike select "Next Day Air" as shipping method and click continue$/, async()=>{
   
});


When(/^Mike select "Check or Money Order" as payment method and click continue$/, async()=>{
   
});


When(/^Mike click next button on payment information page$/, async()=>{
   
});


When(/^Mike click confirm button to place the order$/, async()=>{
   
});


Then(/^Verify order place successfully with popup message "Your order has been successfully processed!"$/, async()=>{
   
});





