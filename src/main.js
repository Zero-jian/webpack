import Vue from 'vue';
import App from './App';
import '@babel/polyfill';
import '@/assets/css/index.css';
import '@/assets/css/index.less';

let div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

new Vue({
    el: '#app',
    render: h=> h(App),
});