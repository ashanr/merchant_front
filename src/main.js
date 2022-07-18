import 'core-js/stable'
import "regenerator-runtime/runtime";
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'

import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store/store'
import Vuex from 'vuex';
import login from "@/store/auth/login";
import Snotify from 'vue-snotify';
import { SnotifyStyle } from 'vue-snotify';
import { SnotifyPosition } from 'vue-snotify';
import "vue-snotify/styles/material.css";
import 'semantic-ui-css/semantic.min.css';
import money from 'v-money';



import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";

Vue.use(require('vue-moment'));
Vue.use(money, {precision: 2});

//Clipper Image Cropper
import VueRx from 'vue-rx'
import VuejsClipper from 'vuejs-clipper'
// install vue-rx
Vue.use(VueRx)
// install vuejs-clipper
Vue.use(VuejsClipper)

/* ... */


Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Snotify)
Vue.use(SnotifyStyle)
Vue.use(SnotifyPosition)
Vue.prototype.$log = console.log.bind(console)

import { ValidationObserver, ValidationProvider, configure } from 'vee-validate/dist/vee-validate.full';

import { extend } from 'vee-validate/dist/vee-validate.full';



extend('valid_email', {
  validate: value => {
    console.log(this.$refs.profile_pic.files[0]);
  },
  message: 'Please enter a valid Email ID.'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.component('multiselect', Multiselect);
 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading', Loading);
Vue.use(Vuex)

import VueEvents from "vue-events";
Vue.use(VueEvents);


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.permission)) {
        if (login.getters.loggedIn() == true) {

            if (to.meta.permission) {
                var base64Url = login.state.access_token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                let payload = JSON.parse(jsonPayload);
                let permissions = payload.scopes;
                if (to.matched.some(record => record.meta.permission)) {
                    if (permissions.indexOf(to.meta.permission) == -1) {
                        router.push("/denied");
                    } else {
                        next()
                    }
                } else {
                    next()
                }
            } else {
                next()
            }
        } else {
            if (to.name == "Login") {
                next()
            } else {
                router.push("/login");
            }
        }
    } else {
        next()
    }
});


new Vue({
    el: '#app',
    router,
    store,
    icons,
    Snotify, 
    template: '<App/>',
    components: {
        App
    },
    beforeCreate() {
        Vue.$snotify = this.$snotify;
    }
})