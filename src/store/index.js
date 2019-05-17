import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

export default ()=>{
    return new Vuex.Store({
        state,
        mutations,
        actions
    })
}