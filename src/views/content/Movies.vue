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
                case 'rated':
                    return 'Películas mejor valoradas';
                    break;
                case 'actual':
                    return 'Películas en cines';
                    break;
            }
        }
    },

}
</script>
