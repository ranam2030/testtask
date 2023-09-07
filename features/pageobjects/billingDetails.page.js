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
    get selectState(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/stateSpinner"]');
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
}
export default new billingDetails();