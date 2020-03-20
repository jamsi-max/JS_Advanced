const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        //this._fetchProducts();
        this._getProducts()
        .then((data) => {
            this.goods = [...data];
            this._render();
        });
    }

    // _fetchProducts() {
    //     this.goods = [
    //         {id: 1, title: 'Notebook', price: 20000},
    //         {id: 2, title: 'Mouse', price: 1500},
    //         {id: 3, title: 'Keyboard', price: 5000},
    //         {id: 4, title: 'Gamepad', price: 4500},
    //     ];
    // }

// Метод считает в цикле проходя по всему списку goods общую стоимость и выводит её
// в консоль. Можно добавить свойство и внего сохранять или  просто возращать это значение
// решение!!!
// calcSum(){
//     return this.allProducts.reduce((accum, item) => accum += item.price, 0);
//   }
    _goodsSum() {
        let totalPrice = 0;
        this.goods.forEach(item =>{
            totalPrice += item.price
        });
        console.log('Общая стоимость всех товаров '+totalPrice+' рублей')
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
            console.log('Error:', error);
        });

    }
// Метод считает в цикле проходя по всему списку goods общую стоимость и выводит её
// в консоль. Можно добавить свойство и внего сохранять или  просто возращать это значение
    _goodsSum() {
        let totalPrice = 0;
        this.goods.forEach(item =>{
            totalPrice += item.price
        });
        console.log('Общая стоимость всех товаров '+totalPrice+' рублей')
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = "img/product-empty.jpg") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="card" data-id="${this.id} style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.price} \u20bd</p>
                        <button class="btn btn-primary">Добавить в корзину</button>
                    </div>
                </div>`;
    }
}

// Класс список корзины аналогичен ProductList, возможно есть смысл от него и наследовать
// но метод _fetchProducts нужно переопределить так как наполнться будет с учетом 
// количества и общей стоимости. Метод _render вполне подойдёт без переопределения.
// Кроме того  добавить можно медоды "добавить количество", "удалить количество" и "удалить товар"
// возможно добавить и удалить количество товара можно и одним методом сделать  
class BasketList extends ProductList {
    constructor(container = '.basket-products') {
        this.container = container;
        this.goodsBasket = [];
        this.allBasketProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {

    }

    addProductBasket() {

    }

    removeProductBasket() {

    }

    deletProductBasket() {

    }

    _render() {

    }
}

// Класс Элемент корзины наследуем от элемента товара отличие классов 
// это свойство количество поумолчанию 1 товар (пердполагаетсячто кнопка добавления будет изменина 
// на ссылку "в корзинуа" далее количество будет меняться непосредственно в корзине в классе BasketList), 
// Также нужно переопределить рендер скорее всего вывод будет уже не карточкой, а строкой с указанием количества и общей
// стоимости с учетом количества 
class BasketItem extends ProductItem {
    constructor(title, price, id, img, quantity=1){
        super(title, price, id, img);

        this.quantity = quantity;
        this.totalPrice = product.price * quantity
    }

    render(){

    }
}

new ProductList();

