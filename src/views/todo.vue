<template>
    <div class="todo">
        <todo-header></todo-header>
        <todo-main></todo-main>
        <todo-bottom></todo-bottom>
    </div>
</template>
<script>
    import todoHeader from '@/components/header.vue'
    import todoMain from '@/components/main.vue'
    import todoBottom from '@/components/bottom.vue'
    export default {
        data() {
            return {
                
            }
        },
        components: {
            //ES6写法
            //相当于header: header
            todoHeader,
            todoMain,
            todoBottom,
        }
    }
</script>
<style scoped>
    .todo {
        /* background: #4a9a8a; */
        width: 600px;
        margin: 40px auto;
        border: 1px solid #2182be;
    }
</style>