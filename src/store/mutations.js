import * as types from './mutations_types.js'

export default {
    //保存全部数据
    [types.DATASAVE](state,data) {
        state.todo.push(data.data);
    },

    //获取全部数据
    [types.DATAALL](state) {
        let data = state.todo;
        state.filterToDo = [];
        data.forEach(item => {
            state.filterToDo.push(item);
        })
    },

    //获取完成数据
    [types.DATACOMPLETED](state) {
        let data = state.todo;
        state.filterToDo = [];
        state.filterToDo = data.filter(item => item.status == 'Completed');
    },

    //获取未完成数据
    [types.DATAACTIVE](state) {
        let data = state.todo;
        state.filterToDo = [];
        state.filterToDo = data.filter(item => item.status == 'Active'|| item.status == 'All') ;
    },

    //获取当前选中的按钮状态
    [types.HASBUTTON](state,data) {
        state.status = data.data;
    }
}