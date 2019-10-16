<template>
    <div>
        <h1>Películas: </h1>
        <h2 >Películas del momento:</h2>
        <div class="cards">
            <v-card class="card" :key="peli.id" outlined v-for="peli of peliculas">
                <v-img class="poster" :src="'https://image.tmdb.org/t/p/w500'+peli.poster_path"></v-img>
                <h3>{{peli.original_title}}</h3>
                  <v-chip
                    class="ma-2 nota"
                    color="primary"
                    label
                    >{{peli.vote_average}}</v-chip>
            </v-card>
        </div>
        <hr>
    </div>
</template>

<script>
///
import axios from 'axios';
///
export default {
    name: 'peliculas',
    data() {
        return {
            peliculas: ''
        }
    },
    methods: {
       async getPeliculasPopulares(){
           var url = 'https://api.themoviedb.org/3/movie/popular/?api_key=9146c1d352b164fffa6551c7d81804ab&language=es-ES&page=1';
           this.peliculas = await axios.get(url).then( data => {
               
               return data.data.results.slice(0, 12);
           });
       }
    },
    created() {
        this.getPeliculasPopulares()
    }
}
</script>

<style>
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card {
        height: 240px;
        width: 150px;
        margin: 0 1rem 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-overflow: ellipsis;

    }

    .poster{
        width: 100%;
        height: 100%;
    }
    h3{
        color: white;
        position: absolute;
        left: 0;
        bottom: 0;
        margin-bottom: 50px;
        margin-left: 10px;
        text-align: left;
    }
    .nota {
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>