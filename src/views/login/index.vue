<!--
     /**
      * 组件名称
      * @desc 组件描述
      * @author lixiwang-15315
      * @date 2019/4/23 11:09
      * @param {Object} [title]    - 参数说明
      * @example 调用示例
      *
      */
    -->
<template>
    <div class="login">
        <div class="f20 mg20" style="text-align: center;">仓库管理系统</div>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm">
            <el-form-item  prop="username">
                <el-input  v-model="loginForm.username" autocomplete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input  type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login()" style="width: 100%">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import index from './index.js'

    export default {
        ...index
    }
</script>

<style lang="stylus" src="./index.styl">
</style>
