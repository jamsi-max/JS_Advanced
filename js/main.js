const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',

    // data тут больше ненужна так как все теперь в компонентах
    data: {
        errorLoad: '',
    },

    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.errorLoad = error;
                })
        },
    },
    mounted() {
        console.log(this);
    }
});

