<template>
    <div class="todo-question">
        <div class="todo-check"></div>
        <div class="todo-text">dada</div>
    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang="less" scoped>
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