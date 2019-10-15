<template>
    <div class="main">
        <v-card class="form">
            <h1>Crear nueva cuenta:</h1>
            <v-form class="inputs">
                <v-text-field v-model="$v.nombre.$model" label="Nombre" type="text"></v-text-field>
                <v-text-field v-model="$v.apellidos.$model" label="Apellido/s" type="text"></v-text-field>
                <v-text-field v-model="$v.email.$model" label="Email" type="email"></v-text-field>
                <v-text-field v-model="$v.alias.$model" label="Alias" type="text"></v-text-field>
                <v-text-field v-model="$v.pass.$model" label="Contraseña" type="password"></v-text-field>
                <v-text-field v-model="$v.pass2.$model" label="Repita contraseña" type="password"></v-text-field>
                <div class="botones">
                    <v-btn :to="{name: 'signin'}" text small>Iniciar sesión</v-btn>                 
                    <v-btn :disabled="$v.$invalid" small color="primary">Crear cuenta</v-btn>      
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
///
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
import swal from 'sweetalert';
///
export default {
    name: 'SignUp',
    data () {
        return {
            nombre: '',
            apellidos: '',
            email: '',
            alias: '',
            pass: '',
            pass2: '',
        }
    },
    validations: {
            nombre: { required },
            apellidos: { required },
            email: { required, email},
            alias: { required, minLength: minLength(5)},
            pass: { required },
            pass2: { required,  sameAs :sameAs('pass')}
    }
}
</script>
<style>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
}
.form{
      padding: 2rem;
    width: 500px;
    height: auto;
}
</style>