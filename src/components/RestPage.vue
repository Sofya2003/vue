<template>
    <div class="forms">
        <form action="" class="sort">
            <label>Сортировка:
                <select v-model="selectedItem" @change="doSort()">
                    <option disabled value="">Выберите один из вариантов</option>
                    <option :value="1">По возрастанию цены</option>
                    <option :value="2">По убыванию цены</option>
                </select>
            </label>
        </form>
        <form action="" class="filter">
            <label>Мин. цена: <input class="search" type="text" v-model="min"></label>
            <label>Макс. цена: <input class="search" type="text" v-model="max"></label>
            <button type="button" @click="filter([min, max])">Найти</button>
        </form>
    </div>
    <div class="rest-wrapper">
        <div class="" v-for='prod in $store.getters.allProds' :key="prod.id">
            <router-link tag="a" :to="{name: 'prod', params: {id: prod.id}}">
            <!-- <a :href="'/product/' + rest.id"> -->
                <div class="rest-wrapper__rest-card-wrapper">
                    <img :src="require('../assets/images/' + prod.image)" class="rest-wrapper__img" alt="restaurant image">
                    <p class="rest-wrapper__title">{{prod.name}}</p>
                </div>
            </router-link>
            <!-- </a> -->
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default ({
    name: 'App',
    data() {
        return {
            allProds: {},
            selectedItem: null,
            min: 0,
            max: 100000,
        }
    },
    computed: {
        getProds() {
            return this.sortItems()
        }
    },
    // mapGetters(['allProds']),
    methods: {
        ...mapActions(['fetchProds', 'filter']),
        sort1() {
            this.$store.commit('sortAscending')
        },
        sort2() {
            this.$store.commit('sortDescending')
        },
        doSort() {
            console.log(this.selectedItem);
            if (this.selectedItem == 1) {
                this.sort1()
            } else {
                this.sort2()
            };
        },
        getValues() {
            if (this.min >= 0 && !isNaN(this.min) && !isNaN(this.max) && this.max > this.min){
                // console.log(this.max);
                this.$store.commit('filterProds', [this.min, this.max])
            };
        },
        },
    async mounted() {
        this.fetchProds();
        this.allProds = this.$store.getters.allProds;
    }
})
</script>

<style>
main {
    margin-bottom: 50px;
}

.rest-wrapper, .dish-wrapper {
    min-height: 300px;
    max-width: 965px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    margin: auto;
    padding: 0 30px;
}

.rest-wrapper__rest-card-wrapper {
    border-radius: 5px;
}

.rest-wrapper__img {
    max-width: 200px;
    border-radius: 5px 5px 0 0;
}

.rest-wrapper__rest-card-wrapper, .dish-card-wrapper, .product-card-wrapper {
    max-width: 200px;
    width: 100%;
    min-height: 200px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
}

.forms {
    margin: 50px auto;
    max-width: 965px;
    width: 100%;
}

select, .search {
    margin: 25px auto;
    padding: 7px 40px 7px 12px;
    max-width: 300px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
}

.search {
    max-width: 200px;
}

select:required:invalid, .search:required:invalid {
    color: #5a667f;
}
select:focus, .search:focus {
    outline: none;
    border-color: #07f;
    box-shadow: 0 0 0 2px rgba(0,119,255,0.2);
}
</style>