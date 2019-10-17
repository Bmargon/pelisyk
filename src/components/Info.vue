<template>
    <div class="main">
        <div >
            <div class="dark">
                <img class="backdrop" :src="'https://image.tmdb.org/t/p/original'+item.backdrop_path">
            </div>
            <div class="details">
                    <img class="poster-img" :src="'https://image.tmdb.org/t/p/w500'+item.poster_path">
                   <div class="item-info">
                        <h1>{{item.original_title}}</h1>
                        <h4>{{item.overview}}</h4>
                   </div>
            </div>
        </div>        
    </div>
</template>

<script>
///
import axios from 'axios';
///
export default {
    name: 'informationContent',
    data () {
        return {
            item: ''
        }
    },
    methods: {
        // get data od an item
        async getInfo( tipo ){
            var id = this.$route.params.id;

            let url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=9146c1d352b164fffa6551c7d81804ab&language=es-ES`;
            var info = await axios.get(url).then((data) => {
                this.item = data.data
                console.log(this.item);
            }).catch((error) => {
                console.log(error);
            })
        },
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
        }
    },
    created(){
        this.getParams(); 
        }
    
}
</script>

<style>
.dark{
    background-color: black;
}

.poster-img{
    height: 240px;
    width: 150px;   
}

.backdrop{
    position: relative;
    width: 100%;
    opacity: 0.5;
}

.details{
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 2;
    bottom: 60px;
    left: 60px;
}
.item-info{
    color: white ;
    margin-left: 2rem;
    max-width: 60%;
}
h1, h4 {
    color: white;
}

</style>


