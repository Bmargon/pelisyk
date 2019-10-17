<template>
    <div class="main">
                    <div class="master-details" v-bind:style="{ backgroundImage: 'url(' + image + ')', backgroundSize: 'cover' }">
                        <div class="details">
                            <img class="poster-img" :src="'https://image.tmdb.org/t/p/w500'+item.poster_path">
                            <div class="item-info">
                                <h1>{{item.title}}</h1>
                                <h4>{{item.overview}}</h4>
                            </div>
                        </div>
                    </div>  
        <br>
        <detailItem :item="item"></detailItem>      
    </div>
</template>

<script>
///
import axios from 'axios';
import {mapActions} from 'vuex';
import detailItem from './infoContent/Details.vue';
///
export default {
    name: 'informationContent',
    components: {
        detailItem
    },
    data () {
        return {
            item: ''
        }
    },
    methods: {
        getParams(){
            
            var param = this.$route.name;
            var tipo = '';
            switch (param) {
                case 'peli':
                     tipo = 'movie'
                    break;
                case 'tv':
                    tipo = 'tv'
                    break;
            }
            this.getInfo(tipo);
        },
        // get data od an item
        async getInfo( tipo ){

            var id = this.$route.params.id;
            let url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=9146c1d352b164fffa6551c7d81804ab&language=es-ES`;
            
            await axios.get(url).then((data) => {
                this.item = data.data;
                console.log(this.item);
            }).catch((error) => {
                console.log(error);
            })
        },
        ...mapActions(['getItem'])
    },
    computed: {
        image() {
            return `https://image.tmdb.org/t/p/original${this.item.backdrop_path}`;
        }
    },
    created(){
        this.getParams(); 
        }
    
}
</script>

<style>
.main{
    
    position: relative;
}

.dark{
        background-color: black;
}
.poster-img{
    height: 240px;
    width: 150px;   
}


.details {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 2rem;
    padding-right: 1rem;
}
.master-details{
    
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 2;
    overflow: hidden;
    height: 400px;
  
    
}
.item-info{
    color: white ;
    margin-left: 2rem;
    max-width: 75%;
}
h1, h4 {
    color: white;
}

</style>


