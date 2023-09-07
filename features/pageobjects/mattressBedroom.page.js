class mattressBedroom {
    get btnPlus(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnPlus"]');
    }
    get btnMinus(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnMinus"]');
    }
    get btnAddToCart(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnAddToCart"]');
    }
    get btnBuyNow(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnBuyNow"]');
    }
    get cartCounter(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/counterText"]');
    }
    
    async clickPlusBtnbyTwo(){
        (await this.btnPlus).click();
    }
    async clickAddToCartBtn(){
        (await this.btnAddToCart).click();
    }
    async cardCounterText(){
        const counterNumber = await this.cardCounterText.getText();
        return counterNumber;
    }
}
export default new mattressBedroom();