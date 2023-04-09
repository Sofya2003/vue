export default {
    state() {
        return {
            prods: [],
            detailProd: {}
        }
    },
    actions: {
        async fetchProds(ctx) {
            const res = await fetch("http://localhost:3000/products");
            const prods = await res.json();
            this.prods = prods;
            ctx.commit('updateProds', prods)
        },
        async filter({ state, commit }, price) {
            const res = await fetch("http://localhost:3000/products");
            const prods = await res.json();
            state.prods = prods;
            console.log(state.prods);
            commit('filterProds', price);
            // commit('updateProds', prods);
        }
        // fetchDetailProd(ctx, id) {
        //     for (let item of this.prods) {
        //         if (item.id == id) {
        //         console.log(item);
        //             ctx.commit('updateDetail', item)
        //         }
        //     }
        // },
        
    },
    mutations: {
        updateProds(state, prods) {
            state.prods = prods
        },
        updateDetail(state, detailProd) {
            state.detailProd = detailProd
        },
        sortAscending(state) {
            // this.prods.sort((a, b) => {
            //     a.name.localeCompare(b.name)
            // });
            let prod = state.prods;
            prod.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                return parseFloat(a.price) - parseFloat(b.price);
            });
            state.prods = prod;
            // console.log(',,,', state.prods);
            // ctx.commit('updateProds', prod);
        },
        sortDescending(state) {
            let prod = state.prods;
            prod.sort(function(a, b) {
                // var textA = a.name.toUpperCase();
                // var textB = b.name.toUpperCase();
                // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                return parseFloat(b.price) - parseFloat(a.price);
            });
            state.prods = prod;
            // console.log('...', state.prods);
        },
        filterProds(state, price) {
            console.log(111, state.prods);
            let prods = [];
            let min = price[0];
            let max = price[1];
            for (let item of state.prods) {
                if (min <= item.price && item.price <= max) {
                    prods.push(item);
                }
            }
            state.prods = prods;
            console.log(222, state.prods);
        }
    },
    getters: {
        allProds(state) {
            // console.log('!!!', state.prods);
            return state.prods
        },
        getById: state => id => state.prods.find(prod => prod.id == id)
        // detail(state) {
        //     console.log(state.detailProd);
        //     return state.detailProd
        // }
    },
}