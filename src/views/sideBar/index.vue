<!--
     /**
      * 组件名称
      * @desc 组件描述
      * @author lixiwang-15315
      * @date 2019/4/23 14:20
      * @param {Object} [title]    - 参数说明
      * @example 调用示例
      *
      */
    -->
<template>
    <div class="side-bar">
        <el-menu :default-active="activeIndex"
                 @select="handleSelect"
                 background-color="rgb(48, 65, 86)"
                 text-color="#fff"
                 active-text-color="#1890ff">
            <el-menu-item index="1">
                首页
            </el-menu-item>
            <el-menu-item index="2">
                入库
            </el-menu-item>
            <el-menu-item index="3">
                出库
            </el-menu-item>
            <el-menu-item index="4">
                库存管理
            </el-menu-item>
            <el-menu-item index="5">
                退换货处理
            </el-menu-item>
            <el-submenu index="6">
                <template slot="title">报表统计</template>
                <el-menu-item index="6-1">售出商品</el-menu-item>
                <el-menu-item index="6-2">入库商品</el-menu-item>
                <el-menu-item index="6-3">员工入库商品统计</el-menu-item>
                <el-menu-item index="6-4">员工出库订单统计
                </el-menu-item>
                <el-menu-item index="6-5">利润报表
                </el-menu-item>
                <el-menu-item index="6-6">订单报表
                </el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">系统管理</template>
                <el-menu-item index="7-1">用户管理</el-menu-item>
                <el-menu-item index="7-2">权限分配</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import index from './index.js'

    export default {
        ...index
    }
</script>

<style lang="stylus" src="./index.styl"></style>
