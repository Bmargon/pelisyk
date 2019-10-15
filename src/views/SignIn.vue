<template>
    <div class="main">
        <!-- tarjeta -->
        <v-card class="form">
            <h1>Iniciar sesión:</h1>
            <!-- inputs -->
             <v-form class="inputs" @submit.prevent="acceder">
                 <v-text-field v-model="$v.email.$model" label="Email" type="email"></v-text-field>
                    <!-- Validaciones email -->

                    <!-- ----- -->
                 <v-text-field v-model="$v.pass.$model" label="Contraseña" type="password"></v-text-field>
                 <!-- botones del form -->
                 <div class="botones">
                    <v-btn :to="{name: 'signup'}" text small>Registrarse</v-btn>                 
                    <v-btn :disabled="$v.$invalid" small color="primary" type="submit">Iniciar sesión</v-btn>      
                </div>
             </v-form>
        </v-card>
    </div>
</template>

<script>
///
import { required, minLength, email } from 'vuelidate/lib/validators'
import firebase from 'firebase';
///
export default {
    name: 'SignIn',
    data () {
        return {
            email: '',
            pass: ''
        }
    },
    validations: {
        email: {
            required,
            minLength: minLength(4),
            email
        },
        pass: {
            required
        }
    },
    methods: {
        acceder(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then((data) =>{
                this.$router.push({path: '/'});
            } ).catch( error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
h1{
    margin-bottom: 2rem;
}
.main {
    background-color: #F4D03F;
    background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form {
    padding: 2rem;
    width: 500px;
    height: auto;
}
.inputs{
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
}
.botones {
    text-align: right;
}
</style>