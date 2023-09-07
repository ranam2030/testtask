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
}
export default new shoppingCart();