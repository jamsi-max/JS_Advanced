const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    isVisibleCart: false,
  },

  methods: {

    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    
    addProduct(product){
      console.log(product.id_product);
    },

    filterGoods(){
      const regExp = new RegExp(this.searchLine, 'i');
      for(let product of this.products){
        if (!regExp.test(product.product_name) ){
          document.querySelector(`.product-item[data-id="${product.id_product}"]`).classList.add('invisible');
        } else {
          document.querySelector(`.product-item[data-id="${product.id_product}"]`).classList.remove('invisible');
        }
      }
    },

    cartView(){
      document.querySelector('.cart-block').classList.toggle('invisible');
    },


  },

  computed: {

    myStyle(){
      return {display: this.visibl};
    },

  },

  mounted(){

    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });
      
  },

  // updated(){
  //   this.products=[...this.filtred];
  //   console.log(this.products);
  // },

});