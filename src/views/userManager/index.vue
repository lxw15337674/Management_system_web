<!--
     /**
      * 组件名称
      * @desc 组件描述
      * @author lixiwang-15315
      * @date 2019/4/28 17:15
      * @param {Object} [title]    - 参数说明
      * @example 调用示例
      *
      */
    -->
<template>
    <div>
        <div style="float:right; padding:10px 0">
            <el-button type="success" size="small" @click="add">新增用户</el-button>
        </div>
        <el-table
                :data="userList"
                stripe>
            <el-table-column
                    prop="username"
                    label="用户名">
            </el-table-column>
            <el-table-column
                    prop="user_type"
                    label="用户类型"
            ></el-table-column>
            <el-table-column
                    prop="create_time"
                    label="创建时间">
            </el-table-column>
            <el-table-column
                    prop="last_login_time"
                    label="最后一次登录时间">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="editRow(scope.row)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="deleteRow(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <edit-dialog ref="dialog" :selData="selData" @refresh="getUserList"></edit-dialog>
    </div>
</template>

<script>
    import index from './index.js'

    export default {
        ...index
    }
</script>

<style lang="stylus"></style>
