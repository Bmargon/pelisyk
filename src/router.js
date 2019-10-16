import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'dashboard',
            component: () =>
                import ('./views/Dashboard.vue'),
            children: [{
                    path: '/peliculas',
                    name: 'peliculas',
                    component: () =>
                        import ('./views/content/Peliculas.vue'),

                },
                {
                    path: '/series',
                    name: 'series',
                    component: () =>
                        import ('./views/content/Series.vue')
                }
            ],
            meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
    const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
    const user = firebase.auth().currentUser;

    if (rutaProtegida === true && user === null) {
        next({ name: 'signin' });
    } else {
        next();
    }

});

export default router;