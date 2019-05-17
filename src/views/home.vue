<template>
    <div>
        <p>{{test}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                test: 'This is test the vue-router'
            }
        }
    }
</script>
<style scoped>
    p {
        font-size: 40px;
        color: #27babf;
        text-align: center;
        margin-top: 50px;
    }
</style>