import * as types from './mutations_types.js'

export default {
    //保存全部数据
    [types.DATASAVE](state,data) {
        state.todo.push(data.data);
    },

    //获取全部数据
    [types.DATAALL](state) {
        state.filterData = state.data;
    },

    //获取完成数据
    [types.DATACOMPLETED](state) {
        
    },

    //获取未完成数据
    [types.DATAACTIVE](state) {
        
    },
}