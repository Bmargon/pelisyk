<template>
    <div>
        <div class="grid">
            <v-card class="det-card" raised>
                <!-- puntuacion -->
                <h3>Puntuación: <small>{{average}} %</small></h3>
              <v-progress-linear :value="average"></v-progress-linear>
              <!-- generos -->
                      <v-chip v-for="(genero, i) of item.genres" :key="i"
                        class="ma-2"
                        small
                        >
                        ss
                        {{genero.__ob__.name}}
                     </v-chip>
            </v-card>
            <v-card class="link-card" raised>
            dshfhudi
            </v-card>
        </div>
    </div>
</template>

<script>
///
import {mapState} from 'vuex';
///
export default {
    name: 'detailsItem',
    computed: {
        average(){
            return this.item.vote_average * 10;
        }
    },
    props: ['item']
}
</script>
<style>
.margen{
    margin-top: 1rem;
}
.grid{
    display: grid;
    grid-template-columns: 25% 75%; 
    grid-gap: 1rem;
}
.det-card{
    padding: 1rem;
    grid-column-start: 1/2;
}
.link-card{
    padding: 0.5rem;
    grid-column-start: 1/2;
}
</style>