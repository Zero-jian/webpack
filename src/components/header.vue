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
                    this.checkRepeat();
                    this.text = "";
                }
            },
            save() {
                if(this.repeat) {
                    let data = {
                        text: this.text,
                        status: this.status
                    }
                    this.$store.dispatch('data_save',{
                        data: data
                    }).then((data)=>{
                        this.newData();
                    });
                } else {
                    alert("小孩子，不可以重复哦");
                }
            },
            checkRepeat() {
                this.repeat = this.todo.every(item => item.text != this.text);
                this.save();
            },
            newData() {
                switch(this.status) {
                    case 'All': this.$store.dispatch('dataall'); break;
                    case 'Active': this.$store.dispatch('dataactive'); break;
                    case 'Completed': this.$store.dispatch('datacompleted'); break;
                }
            }
        },
        computed: {
            ...mapState([
                'todo',
                'filterToDo',
                'status'
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