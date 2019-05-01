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

        <div class="f18 dib">
            <span style="font-size: 23px;font-weight: 900;">
                仓库管理系统</span>
        </div>
        <div style="float: right;     cursor: pointer">
            <template v-if="$store.getters.username">
                <div class="dib mr20">{{$store.getters.username}}</div>
                <el-button type="text" @click="logout">登出</el-button>
            </template>
            <template v-else>
                <el-button type="text" @click="login">未登录</el-button>
            </template>
        </div>
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
                this.$router.push({name: 'login'})
            },
            logout() {
                this.$store.commit('logout');
                this.$message({
                    message: '登出成功',
                    type: 'success'
                });
                this.$router.push({name: 'login'})
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



