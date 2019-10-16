<template>
    <div>
        
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
        }
    },
    methods: {
      
        async getInfo( tipo ){
            const id = this.$route.params.id;

            let url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=9146c1d352b164fffa6551c7d81804ab&language=es-ES`;
            var info = await axios.get(url).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    created(){
        this.getInfo('movie');
    }
}
</script>