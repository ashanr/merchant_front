import Vue from 'vue'
import Router from 'vue-router'

// Containers

   const MerchantList = () =>
    import('@/views/application/merchant/MerchantList')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: '/',
            redirect: 'home',
            component: {
                render(c) {
                    return c("router-view");
                },
            },

            children: [
            {
                path: 'home',
                name: 'Home',
                component: MerchantList
            },           
            ]

        }, 
    ]

}