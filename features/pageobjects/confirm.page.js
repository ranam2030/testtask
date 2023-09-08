class confirmPage {
    get btnConfirm(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnConfirm"]');
    }
    get successfullOrderMessage(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/md_text_message"]');
    }
    async clickConfirmBtn(){
        (await this.btnConfirm).click();
    }
    async successMessage(){
        const message = (await this.successfullOrderMessage).getText();
        console.log(message);
    }
}
export default new confirmPage();