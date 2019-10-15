import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
//Vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

//Firebase
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyA70Ro-SvJvurdV8pFYxwUn6a1MHm1uI8k",
    authDomain: "pelisyonkis-501ed.firebaseapp.com",
    databaseURL: "https://pelisyonkis-501ed.firebaseio.com",
    projectId: "pelisyonkis-501ed",
    storageBucket: "pelisyonkis-501ed.appspot.com",
    messagingSenderId: "78657656691",
    appId: "1:78657656691:web:ba60da6235b274ca875706"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");