import Vue from 'vue';
import App from './App';
import createRouter from './router'
import createStore from './store'
//创建挂载节点
let div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

const router = createRouter();
const store = createStore();

new Vue({
    el: '#app',
    router,
    store,
    render: h=> h(App),
});