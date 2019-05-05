<template>
    <div id="app">
        <sideBar></sideBar>
        <div class="container" style="margin-left:210px">
            <s-header></s-header>
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    import sideBar from './views/sideBar/index.vue'
    import sHeader from './views/header/index.vue'

    export default {
        name: "app",
        components: {
            sideBar,
            sHeader
        },
        mounted() {
            window.vue = this;

        }
    };
</script>

<style lang="stylus">
    .app {
        height 100%
    }

    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        padding: 32px;
        background-color: #f0f2f5;
        flex: 1
    }

    .content {
        .el-dialog__header {
            background: #5c6de8;
            padding: 14px 20px 10px;
        }

        .el-dialog__title {
            color: #fff;
            font-weight: bold;
        }
         .el-dialog__headerbtn .el-dialog__close {
            color: #fff;
            font-weight: bold;
        }
    }
</style>
