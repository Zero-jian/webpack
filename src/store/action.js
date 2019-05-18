import * as types from './mutations_types'

export default ({
    //保存数据
    data_save: ({
        commit
    },{
        data
    }) => {
        return new Promise((resolve,reject) =>{
            commit(types.DATASAVE,{
                data
            });
            resolve(data);
        });
    },

    //筛选all数据
    dataall: ({
        commit
    }) => {
        return new Promise((resolve,reject)=>{
            commit(types.DATAALL);
            resolve();
        });
    },

    //筛选未完成数据
    dataactive: ({
        commit
    }) => {
        return new Promise((resolve,reject)=>{
            commit(types.DATAACTIVE);
            resolve();
        })
    },

    //筛选完成数据
    datacompleted: ({
        commit
    }) => {
        return new Promise((resolve,reject) => {
            commit(types.DATACOMPLETED);
            resolve();
        })
    },

    //获取当前按钮选中状态
    hasbutton: ({
        commit
    },{
        data
    }) => {
        return new Promise((resolve,reject) =>{
            commit(types.HASBUTTON,{
                data: data
            });
            resolve();
        })
    }
})