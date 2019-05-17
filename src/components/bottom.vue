<template>
    <div class="bottom">
        <div class="left">0 items left</div>
        <div class="right">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
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