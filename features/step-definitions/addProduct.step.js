import { Given, When, Then } from '@wdio/cucumber-framework';
import genericUtils from '../../utils/generic.utils';
import commonPage from '../pageobjects/common.page';
import addProductPage from '../pageobjects/addProduct.page';
import electronicsPage from '../pageobjects/electronics.page';
import mattressBedroomPage from '../pageobjects/mattressBedroom.page';
import shoppingCartPage from '../pageobjects/shoppingCart.page';
import billingDetailsPage from '../pageobjects/billingDetails.page';
import shippingPage from '../pageobjects/shipping.page';
import paymentPage from '../pageobjects/payment.page';
import paymentInformationPage from '../pageobjects/paymentInformation.page';
import confirmPage from '../pageobjects/confirm.page';
var data = require('../../utils/read_csv').default;
var fs = require('fs');
var json = data();
var testData = JSON.parse(json);
//Feature01
Given(/^Mike on home page after opening nopCart mobile app$/, async()=>{
    await commonPage.clickAceptBtn();
});

When(/^Mike click electronics from OUR CATEGORIES list from home page$/, async()=>{
    await driver.pause(1000);
    await genericUtils.scrollH();
    await addProductPage.selectElectronicsCart();
    console.log("Print the testData")
    console.log(testData[0]["FirstName"]);
    console.log(testData[0]["LastName"]);
    console.log(testData[0]["Email"])
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
 await mattressBedroomPage.clickCartIcon();
});


When(/^Mike click checkout button from shopping cart page$/, async()=>{
   await shoppingCartPage.clickCheckOutBtn();
});


When(/^Mike select checkout as guest from shopping cart page$/, async()=>{
   await shoppingCartPage.clickCheckOutAsGuest();
});


Then(/^Mike input all the details in checkout billing details page and click continue$/, async()=>{
   await billingDetailsPage.inputFirstName(testData[0]["FirstName"]);
   await billingDetailsPage.inputLastName(testData[0]["LastName"]);
   await billingDetailsPage.inputEmail(testData[0]["Email"]);
   await billingDetailsPage.selectTheCountryName();
   await driver.pause(5000);
   await billingDetailsPage.selectTheStateName();
   await driver.pause(1000);
   await billingDetailsPage.inputCompanyName(testData[0]["Company"]);
   await genericUtils.scrollToEnd();
   await billingDetailsPage.inputCity(testData[0]["City"]);
   await billingDetailsPage.inputStreetAddress(testData[0]["address1"]);
   await billingDetailsPage.inputZipCode(testData[0]["postal"]);
   await billingDetailsPage.inputPhoneNumber(testData[0]["mobile"]);
   await billingDetailsPage.clickContinueBtn();
   await driver.pause(1000);
});


When(/^Mike select "Next Day Air" as shipping method and click continue$/, async()=>{
    await shippingPage.clickNextDayAir();
    await genericUtils.scrollToEnd();
    await driver.pause(1000);
    await shippingPage.clickContinueBtn();
    await driver.pause(1000);
});


When(/^Mike select "Check or Money Order" as payment method and click continue$/, async()=>{
   await genericUtils.scrollToEnd();
   await driver.pause(1000);
   //await genericUtils.scrollToCheckMoneyOrder();
   await paymentPage.clickCheckMoneyOrder();
   await paymentPage.clickContinueBtn();
   await driver.pause(1000);
});


When(/^Mike click next button on payment information page$/, async()=>{
   await paymentInformationPage.clickNextBtn();
   await driver.pause(1000);
});


When(/^Mike click confirm button to place the order$/, async()=>{
   await confirmPage.clickConfirmBtn();
   await driver.pause(1000);
});


Then(/^Verify order place successfully with popup message "Your order has been successfully processed!"$/, async()=>{
   await confirmPage.successMessage();
});







