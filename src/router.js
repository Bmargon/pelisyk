import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'dashboard',
            component: () =>
                import ('./views/Dashboard.vue')

        },
        {
            path: '/signin',
            name: 'signin',
            component: () =>
                import ('./views/SignIn.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () =>
                import ('./views/SignUp.vue')
        }
    ]
});