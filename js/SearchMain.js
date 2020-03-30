Vue.component('search',{
    data(){
        return {
            userSearch: '',
        }
      },
    template: `
        <div>
            <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch" @keyup="$root.$refs.products.filter(userSearch)">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <div class="search-view" v-if="userSearch">
                <div class="search-item" v-for="item of $root.$refs.products.filtered">
                    <img :src="$root.$refs.products.imgCatalog" alt="Some img" >
                    <p>{{item.product_name}}</p>
                    <p>{{item.price}}₽</p>
                </div>  
                <div v-if="!$root.$refs.products.filtered.length" class="search-empty">По вашему запросу ничего не найдено</div> 
            </div>
        </div>`
});