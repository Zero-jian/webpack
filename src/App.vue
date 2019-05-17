<template>
    <div class="main">
        <p class="title">{{text}}</p>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                text: "todoList"
            }
        }
    }
</script>
<style lang="less">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: url('./assets/images/sister.jpg')
    }

    .title {
        text-align: center;
        margin-top: 150px;
        font-size: 60px;
        color: #5a9cdd;
    }
</style>