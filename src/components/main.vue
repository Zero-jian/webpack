<template>
    <div>
        <div class="todo-question" v-for="(item,index) in todoData">
            <div class="todo-check" :class="{check: item.status === `Completed`}" @click="changeState(item)"></div>
            <div class="todo-text">{{item.text}}</div> 
        </div>
    </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState([
                'filterToDo'
            ]),
            todoData() {
                return this.filterToDo;
            }
        },
        methods: {
            changeState(item) {
                item.status === 'Completed' ? item.status = 'Active' : item.status = 'Completed';
            }
        }
    }
</script>
<style lang="less" scoped>
    .check {
        background: #3F51B5;
    }
    .todo-question {
        border-top: 1px solid #2182be;
        background: #fff;
        height: 45px;
    }

    .todo-check {
        float: left;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid #3F51B5;
        cursor: pointer;
        margin-top: 7.5px;
        margin-left: 10px;
    }

    .todo-text {
        line-height: 45px;
        float: right;
        height: 100%;
        width: 540px;
        font-size: 18px;
    }

    .bg {
        background: #5ca5af;
    }
</style>