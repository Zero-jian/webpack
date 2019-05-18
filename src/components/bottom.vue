<template>
    <div class="bottom">
        <div class="left">{{todoData.length}} items left</div>
        <div class="right">
            <button v-for="(item,index) in btn" @click="changeBtn(item,index)" :style="{background: status==index?`#429a8a`:``}">{{item}}</button>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                btn: ['All','Active','Completed'],
                status: 0,
            }
        },
        methods: {
            all() {
                this.$store.dispatch('dataall').then(()=>{
                    console.log(this.filterToDo);
                });
            },
            active() {
                this.$store.dispatch('dataactive').then(()=>{
                    console.log(this.filterToDo);
                })
            },
            completed() {
                this.$store.dispatch('datacompleted').then(()=>{
                    console.log(this.filterToDo);
                })
            },
            changeBtn(item,index) {
                this.status = index;
                this.$store.dispatch('hasbutton',{
                    data: item
                });
                switch(item) {
                    case 'All': this.all(); break;
                    case 'Active': this.active(); break;
                    case 'Completed': this.completed(); break;
                }
            }
        },
        computed: {
            ...mapState(['filterToDo']),
            todoData() {
                return this.filterToDo;
            }
        }
    }
</script>
<style lang="less" scoped>
    .bottom {
        display: flex;
        justify-content: space-between;
        padding: 0 5px 0 10px;
        border-top: 1px solid #2182be;
        height: 45px;
        line-height: 45px;
        background: #fff;
    }

    .right {
        display: flex;
        align-items: center;

        button {
            width: 80px;
            height: 30px;
            border: none;
            border-radius: 5px;
            color: #fff;
            background: #2182be;
            outline: none;
            cursor: pointer;
            margin: 0 10px;
            transition: all 0.3s ease;
        }

        button:hover {
            background: #195f8a;
        }
    }
</style>