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
                    // Peliculas Master
                    path: '/peliculas',
                    name: 'peliculas',
                    component: () =>
                        import ('./views/content/Movies.vue'),
                    // Subcategorias random movies
                    children: [{
                            path: '',
                            name: '',
                            component: () =>
                                import ('./views/content/movies/General.vue')
                        },
                        {
                            path: 'populares',
                            name: 'popmov',
                            component: () =>
                                import ('./views/content/movies/Populares.vue')
                        },
                        {
                            path: 'rated',
                            name: 'ratmov',
                            component: () =>
                                import ('./views/content/movies/Rate.vue')
                        },
                        {
                            path: 'actual',
                            name: 'actmov',
                            component: () =>
                                import ('./views/content/movies/Actual.vue')
                        }
                    ]

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
                    path: '/tv/:id',
                    name: 'tv',
                    component: () =>
                        import ('./views/content/Single/Tv.vue')

                },

                // Perfil
                {
                    path: '/perfil',
                    name: 'perfil',
                    component: () =>
                        import ('./views/Profile.vue')
                }
            ],
            // meta: { requiresAuth: true }
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