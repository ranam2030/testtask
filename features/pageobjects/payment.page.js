class paymentPage {
    get selectCheckMoneyOrder(){
        return $('//android.widget.TextView[@text="Pay by cheque or money order"]');
    }
    get btnContinue(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnContinue"]');
    }
    async clickContinueBtn(){
        (await this.btnContinue).click();
    }
    async clickCheckMoneyOrder(){
        (await this.selectCheckMoneyOrder).click();
    }
}
export default new paymentPage();