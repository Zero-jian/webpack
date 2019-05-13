import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';

let div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

new Vue({
    el: '#app',
    render: h=> h(App),
});