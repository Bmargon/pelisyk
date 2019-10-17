<template>
    <div>
            <router-link class="link" to="/peliculas/populares">
            <h2 >Del momento:</h2>
            </router-link>
            <seisPorDos class="containerMovies" :format="'movie'" :genre="'popular'" ></seisPorDos>

        <hr>

            <router-link class="link" to="/peliculas/rated"> 
            <h2 >Películas mejor puntuadas:</h2>
            </router-link>
            <seisPorDos class="containerMovies" :format="'movie'" :genre="'top_rated'" ></seisPorDos>

        <hr>
         <router-link class="link" to="/peliculas/actual">
            <h2 >Ahora en cines:</h2>
            </router-link>
            <seisPorDos class="containerMovies" :format="'movie'" :genre="'now_playing'" ></seisPorDos>
        
    </div>
</template>

<script>
///
import seisPorDos from '../../../components/InfoCels'
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
.link {
    text-decoration: none;
    color: black;
}
h2 {
    margin:  2rem 0 1rem 2rem;
    text-decoration: none;
    color: black;
}
</style>