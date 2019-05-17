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
    }
})