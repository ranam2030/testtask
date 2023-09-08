class paymantInformationPage {
    get nextBtn(){
        return $('//android.widget.Button[@text="Next"]');
    }
    async clickNextBtn(){
        await this.nextBtn.click();
    }
}
export default new paymantInformationPage();