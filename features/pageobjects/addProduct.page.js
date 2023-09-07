class addProduct {
    get readyFoodCat(){
        return $('//android.widget.TextView[@text="Ready Food"]');
    }
    get homeAndLivingCat(){
        return $('//android.widget.TextView[@text="Home &  Living"]');
    }
    get foodAndGroceryCat(){
        return $('//android.widget.TextView[@text="Food & Grocery"]');
    }
    get wAccessoriesCat(){
        return $('//android.widget.TextView[@text="W-Accessories"]');
    }
    get outdoorCat(){
        return $('//android.widget.TextView[@text="Outdoor"]');
    }
    get JewelriesCat(){
        return $('//android.widget.TextView[@text="Jewelries"]');
    }
    get electronicsCat(){
        return $('//android.widget.TextView[@text="Electronics"]');
    }
    get sunglassesCat(){
        return $('//android.widget.TextView[@text="Sunglasses"]');
    }
    get computersCat(){
        return $('//android.widget.TextView[@text="Computers"]');
    }

    async selectElectronicsCart(){
        await (await this.electronicsCat).click();
        console.log("Going to Electronics Cart");
    }

}
export default new addProduct();