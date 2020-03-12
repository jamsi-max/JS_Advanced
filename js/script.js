const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

// const renderProduct = (title, price, img = "img/product-empty.jpg") => {
//     return `<div class="card" style="width: 18rem;">
//                 <img src="${img}" class="card-img-top" alt="img">
//                 <div class="card-body">
//                     <h5 class="card-title">${title}</h5>
//                     <p class="card-text">${price}</p>
//                     <button class="btn btn-primary">Добавить в корзину</button>
//                 </div>
//             </div>`
// };
const renderProduct = (title, price, img = "img/product-empty.jpg") => 
    `<div class="card" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="img">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${price}</p>
            <button class="btn btn-primary">Добавить в корзину</button>
        </div>
    </div>`;

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList.join("");
};

renderProducts(products);