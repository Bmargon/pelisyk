<template>
    <div class="card">
        <div class="cards">


            <v-card class="card" :to="{name: router, params: {id: item.id}}" :key="item.id" outlined v-for="item of items">


                <v-img  class="poster" :src="'https://image.tmdb.org/t/p/w500'+item.poster_path"></v-img>
                <h3>{{item.original_title}}</h3>
                  <v-chip
                    class="ma-2 nota"
                    color="primary"
                    label
                    >{{item.vote_average}}</v-chip>
            </v-card>

            <v-btn @click="sumar" v-if="getUrl">ddddddd</v-btn>
        </div>
    </div>
</template>

<script>
///
import axios from 'axios';
///
export default {
    name: 'generalInfoContainer',
    data() {
        return {
            items: '',
            page: 1
        }
    },
    methods: {
        // Get titles up to 12
       async getMassiveContent(genre, format, page){
           var url = `https://api.themoviedb.org/3/${format}/${genre}/?api_key=9146c1d352b164fffa6551c7d81804ab&language=es-ES&page=${page}`;
           this.items = await axios.get(url).then( data => {
               if (this.$route.name === 'peliculas') {
                    return data.data.results.slice(0, 12);
               } 
               return data.data.results.slice(0, 18);
           });
       },
       getUrl() {
            return this.$route.name === 'peliculas' ? true : false;
        },
        sumar() {
            var page = this.page += 1 ;
            this.getMassiveContent(this.genre, this.format, page)

        }
    },
    computed: {
        router() {
          if (this.$route.name === 'peliculas') {
              return 'peli';

            }else {
                return 'tv'
            }
        } 
    },
    created() {
        this.getMassiveContent(this.genre, this.format, this.page)
        
    },
    props: ['genre', 'format']

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
        margin: 0 1rem 1rem;
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