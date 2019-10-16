<template>
    <div>
            <v-toolbar>
      <v-toolbar-title>Peliculas Yonkis</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
            <input type="text" placeholder="Buscar">
        <v-btn :to="{path: '/'}" text>Inicio</v-btn>
        <v-btn :to="{name: 'peliculas'}">Peliculas</v-btn>
        <v-btn :to="{name: 'series'}" text>Series</v-btn>
      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp">

      </template>
    </v-toolbar>
    </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>