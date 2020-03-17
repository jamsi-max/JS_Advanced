class Burger{
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.price = 0;
        this.calc  = 0;
        this.toppingSeason = 0;
        this.toppingMayonn = 0;
        this.main();
    }

    _getSize(){
        const size = document.getElementsByName('burger-size');
        size.forEach(element => {
            if(element.checked){
                this.size = element.value;
                this.price = +element.dataset.price;
                this.calc = +element.dataset.calc;
            }
        });
    }

    _getStuffing() {
        const stuffing = document.getElementsByName('burger-stuffing');
        stuffing.forEach(element =>{
            if(element.checked){
                this.stuffing = element.value;
                this.price += +element.dataset.price;
                this.calc += +element.dataset.calc;
            }
        });
    }

    addTopping(topping) {
        if(topping == 'season' && this.toppingSeason < 10){
            this.toppingSeason += 1;  
        } else if(topping == 'mayonn' && this.toppingMayonn < 10) {
            this.toppingMayonn += 1;
        }
    }

    removeTopping(topping) {
        if(topping == 'season' && this.toppingSeason > 0){
            this.toppingSeason -= 1;  
        } else if(topping == 'mayonn' && this.toppingMayonn > 0) {
            this.toppingMayonn -= 1;
        }
    }

    _viewInfo() {
        const info = 
            `<div class="info-block">
            <div class="info info-size">Ваш сочный ${this.size} гамбургер</div>
            <div class="info info-stuffing">С добавлением ${this.stuffing}</div>
            <div class="info info-season">Дополнительно:</div>
            <div class="info info-season">соус - ${this.toppingSeason}</div>
            <div class="info info-season">майонез  - ${this.toppingMayonn}</div>
            <div class="info info-calc">Всего калорий: ${this.calc}</div>
            <div class="info info-price">К оплате: ${this.price} рублей</div>
            </div>`;
        document.querySelector('.view-info').innerHTML = info;
    }

    main() {
        this._getSize();
        this._getStuffing();
        this.price += this.toppingSeason*15;
        this.price += this.toppingMayonn*20;
        this.calc += this.toppingMayonn*5;
        this._viewInfo();
    }
}

const burger = new Burger();