<template>
    <div  class="main-content">
        <information></information>
    </div>
</template>

<script>
///
import information from '../../../components/Info.vue'
///
export default {
    name: 'peliDetails',
    components: {
        information
    }
}
</script>

<style>
.main-content {
    width: 100%;
    height: auto;
}
</style>