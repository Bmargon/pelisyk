<template>
    <div>
        <h1>{{titulo}}</h1>


            <router-view/>



    </div>
</template>

<script>
///
///
export default {
    name: 'peliculas',
    computed: {
        titulo(){
            switch(this.$route.name) {
                case 'peliculas':
                    return 'Películas:';      
                    break;
                case 'popmov':
                    return 'Películas más populares';
                    break;
                case 'ratmov':
                    return 'Películas mejor valoradas';
                    break;
                case 'actmov':
                    return 'Películas en cines';
                    break;
            }
        }
    },
    created(){
    }

}
</script>

<style>
h1 {
    margin-bottom: 2rem;
}
</style>
