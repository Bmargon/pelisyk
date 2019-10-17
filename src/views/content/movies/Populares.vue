<template>
    <div class="main">
       <seisPorDos class="containerMovies" :format="'movie'" :genre="'popular'" ></seisPorDos>
        
    </div>
</template>

<script>
///
import seisPorDos from '../../../components/InfoCels.vue';
///
export default {
    name: 'peliculasPopulares',
   
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
.btn {
    text-align: center;
}
</style>