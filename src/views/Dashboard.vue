<template>
    <div>
        <navbar></navbar>
        <v-container>
            <v-card class="main-card">
                <router-view/>
            </v-card>
        </v-container>
    </div>
</template>

<script>
///
import navbar from '../components/nav';
///
export default {
    name: 'Dashboard',
    components: {
        navbar
    }
}
</script>

<style>
.main-card {
    width: 100%;
    height: 100%;
    padding: 2rem;
    margin: 1rem;
}
</style>