class electronics {
    get productDetailsBeigeAreaRugTag(){
        return $('//android.widget.TextView[@text="Beige area rug tag"]');
    }
    get productDetailsBurger(){
        return $('//android.widget.TextView[@text="Burger"]');
    }
    get productDetailsCustomTShirt(){
        return $('//android.widget.TextView[@text="Custom T-Shirt"]');
    }
    get productDetailsMattressBedroom(){
        return $('//android.widget.TextView[@text="Mattress Bedroom"]');
    }

    async clickProductDetailsMattressBedroom(){
        (await this.productDetailsMattressBedroom).click();
    }
}
export default new electronics();