class common {
    get btnAccept(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnAccept"]');
    }
    get dialogTitle(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/tvDialogTitle"]');
    }
    get privacyPolicy(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/wvPrivacyPolicy"]');
    }
    async clickAceptBtn(){
        await driver.pause(10000);
        (await this.btnAccept).click();
        console.log("Mike on Application Home Page");
    }
}
export default new common();