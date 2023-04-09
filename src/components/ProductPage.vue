<template>
    <h2>{{detail.name}}</h2>
    <div class="info-wrapper">
        <img :src="require('../assets/images/' + detail.image)" class="info-wrapper__img">
        <div class="info-wrapper__container" >
            <p class="info-wrapper__price">{{detail.price}} руб.</p>
            <div class="info-wrapper__buy-wrapper">
                <form id="buy-product" action="{% url 'delivery:basket_adding' %}" class="info-wrapper__form">
                    <!-- {% csrf_token %} -->
                    <input type="number" name="number" id="number">
                    <button type="submit" id="submit-btn" class="info-wrapper__btn"
                    >В корзину</button>
                </form>
            </div>
            <p class="info-wrapper__description">{{ detail.description }}</p>
            </div>
        </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    props: [
        'id'
    ],
    data() {
        return {
            item: {}
        }
    },
    // computed: mapGetters(['detail']),
    computed: {
        detail() {
            return this.$store.getters.getById(this.id)
        }
    },
    methods: mapActions(['fetchProds']),
    async mounted() {
        // this.fetchProds();
        this.$store.dispatch('fetchProds')
    }
}
</script>

<style>
h2 {
    margin: 50px auto;
    text-align: center;
}
.info-wrapper {
    margin: auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    gap:  50px;
}

.info-wrapper__price {
    font-size: 30px;
    font-weight: bold;
}

.info-wrapper__container {
    display: flex;
    flex-direction: column;
}

.form-wrapper__btn, .info-wrapper__btn {
    border: 2px solid black;
    padding: 10px 15px;
    background-color: white;
    cursor: pointer;
    margin-top: 30px;
}

.form-wrapper__btn:hover, .info-wrapper__btn:hover {
    transition: .3s;
    background-color: black;
    color: white;
}

.form-wrapper input, .info-wrapper input {
    border-radius: 0;
    height: 40px;
    max-width: 270px;
    width: 100%;
}
</style>