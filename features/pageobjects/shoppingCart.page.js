class shoppingCart {
    get btnCheckOut(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnCheckOut"]');
    }
    get btnCheckOutAsAGuest(){
        return $('//*[@resource-id="com.nopstation.nopcommerce.nopstationcart:id/btnGuestCheckout"]');
    }

    async clickCheckOutBtn(){
        (await this.btnCheckOut).click();
    }
    async clickCheckOutAsGuest(){
        (await this.btnCheckOutAsAGuest).click();
    }
}
export default new shoppingCart();