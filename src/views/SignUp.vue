<template>
    <div class="main">
        <v-card class="form">
            <h1>Crear nueva cuenta:</h1>
            <v-form @submit.prevent="crearUsuario" class="inputs">
                <v-text-field v-model="$v.usuario.nombre.$model" label="Nombre" type="text"></v-text-field>
                <v-text-field v-model="$v.usuario.apellidos.$model" label="Apellido/s" type="text"></v-text-field>
                <v-text-field v-model="$v.usuario.email.$model" label="Email" type="email"></v-text-field>
                <v-text-field v-model="$v.usuario.alias.$model" label="Alias" type="text"></v-text-field>
                <v-text-field v-model="$v.usuario.pass.$model" label="Contraseña" type="password"></v-text-field>
                <v-text-field v-model="$v.usuario.pass2.$model" label="Repita contraseña" type="password"></v-text-field>
           
                <div class="botones">
                    <v-btn :to="{name: 'signin'}" text small>Iniciar sesión</v-btn>                 
                    <v-btn type="submit" :disabled="$v.$invalid" small color="primary">Crear cuenta</v-btn>      
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
///
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
import swal from 'sweetalert';
import firebase from 'firebase';
var db = firebase.firestore();
///
export default {
    name: 'SignUp',
    data () {
        return {
            usuario: {
                nombre: '',
                apellidos: '',
                email: '',
                alias: '',
                pass: '',
                pass2: ''
            }
        }
    },
    validations: {
            usuario: {
                nombre: { required },
                apellidos: { required },
                email: { required, email},
                alias: { required, minLength: minLength(5)},
                pass: { required },
                pass2: { required,  sameAs :sameAs('pass')}
            }
    },
    methods: {
        crearUsuario(){
            firebase.auth().createUserWithEmailAndPassword(this.usuario.email, this.usuario.pass).then( () => {
                db.collection(this.usuario.email).doc('perfil').set(this.usuario).then( () => {
                    swal("Usuario creado", "success");
                    this.$router.push({name: 'signin'});
                }).catch(error => {
                    console.log(error);
                })
            }).catch(error => {
                console.log(error);
            })
        }
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