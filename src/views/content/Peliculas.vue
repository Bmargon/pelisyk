<template>
    <div>
        <h1>Películas: </h1>
        <h2 >Del momento:</h2>
            <seisPorDos class="containerMovies" :format="'movie'" :genre="'popular'" ></seisPorDos>
        <hr>
        <h2 >Películas mejor puntuadas:</h2>
            <seisPorDos class="containerMovies" :format="'movie'" :genre="'top_rated'" ></seisPorDos>
        <hr>
            <h2 >Ahora en cines:</h2>

            <seisPorDos class="containerMovies" :format="'movie'" :genre="'now_playing'" ></seisPorDos>
        
    </div>
</template>

<script>
///
import seisPorDos from '../../components/InfoCels.vue'
///
export default {
    name: 'peliculas',

    components: {
        seisPorDos
    }
    
}
</script>

<style>
.containerMovies{
    width: 100%;
    height: auto;
}
h2 {
    margin:  2rem 0 1rem 2rem;
}
</style>