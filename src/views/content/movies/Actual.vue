<template>
    <div>
       <seisPorDos class="containerMovies" :format="'movie'" :genre="'top_rated'" ></seisPorDos>
    </div>
</template>

<script>
///
import seisPorDos from '../../../components/InfoCels.vue';
///
export default {
    name:'Actual',
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

</style>