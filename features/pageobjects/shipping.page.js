class shippingPage {
    get selectShippingMathod(){
        return $('//android.widget.TextView[@text="Next Day Air"]');
    }
    get btnContinue(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnContinue"]');
    }
    async clickNextDayAir(){
        (await this.selectShippingMathod).click();
    }
    async clickContinueBtn(){
        (await this.btnContinue).click();
    }
}
export default new shippingPage();