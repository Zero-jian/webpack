<template>
    <div class="header">
        <input type="text" placeholder="What need to be done ?" @keyup.enter="enter" v-model="text">
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                text: "",
            }
        },
        methods: {
            enter() {
                if(!this.text) {
                    alert("小朋友，不可以为空哦");
                }else {
                    this.save();
                    this.text = "";
                }
            },
            save() {
                let data = {
                    text: this.text,
                    status: 'completed'
                }
                this.$store.dispatch('data_save',{
                    data: data
                }).then((data)=>{
                    console.log(this.todo);
                });
            }
        },
        computed: {
            ...mapState([
                'todo'
            ])
        }
    }
</script>
<style scoped lang="less">
    .header {
        width: 100%;

        input {
            width: 100%;
            border: none;
            height: 45px;
            text-indent: 10px;
            outline: none;
            font-size: 18px;
        }
    }
</style>