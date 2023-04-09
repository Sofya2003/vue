import { createRouter, createWebHistory } from 'vue-router'
import RestPage from './components/RestPage'
import ProductPage from './components/ProductPage'

// export default new Router({
//     routes: [
//         { path: '/', component: RestPage },
//         { path: '/articles', component: ProductPage },
//     ],
//     mode: history
// });
const routes = [
    
    { path: '/', component: RestPage },
    { path: '/product/:id', name: 'prod', component: ProductPage, props: true },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomeView
    // },
    // {
    //     path: '/about',
    //     name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
    ]

    const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
