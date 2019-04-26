<!--
     /**
      * 组件名称
      * @desc 组件描述
      * @author lixiwang-15315
      * @date 2019/4/26 10:15
      * @param {Object} [title]    - 参数说明
      * @example 调用示例
      *
      */
    -->
<template>
    <div class="header">

        <div class="f18 dib">仓库管理系统</div>
        <div style="float: right;" @click="login">未登录</div>
    </div>
</template>

<script>
    export default {

        name: '',
        components: {},
        data() {
            return {};
        },
        methods: {
            login() {
                console.log('login')
            }
        },
        computed: {},
        mounted() {

        }
    }
</script>
<style lang="stylus">
    .header {
        height 50px;
        overflow hidden;
        position relative;
        line-height 50px
        padding: 0 50px
    }
</style>



