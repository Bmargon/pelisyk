import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            // RUTAS PROTEGIDAS
            path: '/',
            name: 'dashboard',
            component: () =>
                import ('./views/Dashboard.vue'),
            children: [{
                    // Peliculas
                    path: '/peliculas',
                    name: 'peliculas',
                    component: () =>
                        import ('./views/content/Peliculas.vue')

                },
                {
                    path: '/peli/:id',
                    name: 'peli',
                    component: () =>
                        import ('./views/content/Single/Peli.vue')

                },

                // Series
                {
                    path: '/series',
                    name: 'series',
                    component: () =>
                        import ('./views/content/Series.vue')
                },
                {
                    path: '/perfil',
                    name: 'perfil',
                    component: () =>
                        import ('./views/Profile.vue')
                }
            ],
            meta: { requiresAuth: true }
        },
        // INICIO DE SESION Y REGISTRO
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
    var rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
    var user = firebase.auth().currentUser;

    if (rutaProtegida === true && user === null) {
        next({ name: 'signin' });
    } else {
        next();
    }

});

export default router;