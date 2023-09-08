class billingDetails {
    get firstNameInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etFirstName"]');
    }
    get lastNameInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etLastName"]');
    }
    get emailInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etEmail"]');
    }
    get selectCountry(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/countrySpinner"]');
    }
    get selectCountryName(){
        return $('//android.widget.TextView[@text="Afghanistan"]');
    }
    get selectState(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/stateSpinner"]');
    }
    get selectStateName(){
        return $('//android.widget.TextView[@text="Other"]');
    }
    get companyNameInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etCompanyName"]');
    }
    get cityNameInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etCity"]');
    }
    get streetAddressNameInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etStreetAddress"]');
    }
    get streetAddress2NameInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etStreetAddress2"]');
    }
    get zipCodeInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etZipCode"]');
    }
    get phoneNumberInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etPhone"]');
    }
    get faxNumberInput(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/etFax"]');
    }
    get btnContinue(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnContinue"]');
    }
    async inputFirstName(firstName){
        await this.firstNameInput.addValue(firstName);
    }
    async inputLastName(lastName){
        (await this.lastNameInput).addValue(lastName);
    }
    async inputEmail(email){
        (await this.emailInput).addValue(email);
    }
    async selectTheCountryName(){
        (await this.selectCountry).click();
        (await this.selectCountryName).click();
    }
    async selectTheStateName(){
        (await this.selectState).click();
        (await this.selectStateName).click();
    }
    async inputCompanyName(companyName){
        await this.companyNameInput.addValue(companyName);
    }
    async inputCity(city){
        await this.cityNameInput.addValue(city);
    }
    async inputStreetAddress(streetAddress){
        (await this.streetAddressNameInput).addValue(streetAddress);
    }
    async inputZipCode(zipCode){
        (await this.zipCodeInput).addValue(zipCode);
    }
    async inputPhoneNumber(phoneNumber){
        (await this.phoneNumberInput).addValue(phoneNumber);
    }
    async clickContinueBtn(){
        (await this.btnContinue).click();
    }
}
export default new billingDetails();