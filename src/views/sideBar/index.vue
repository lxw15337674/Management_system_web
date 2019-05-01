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
            <template v-for="menu in menuList">
                <template v-if="!menu.children">
                    <el-menu-item :index="menu.name"
                                  v-if="itemValue(menu,['meta','showInSideBar'],false)"
                                  :key="menu.name"
                                  @click="$router.push({name:menu.name})">
                        {{itemValue(menu,['meta','title'])}}
                    </el-menu-item>
                </template>
                <template v-else>
                    <el-submenu :index="menu.name" :key="menu.name">
                        <template slot="title">{{itemValue(menu,['meta','title'])}}</template>
                        <template v-for="childMenu in menu.children">
                            <el-menu-item :index="childMenu.name"
                                          v-if="itemValue(childMenu,['meta','showInSideBar'],false)"
                                          :key="childMenu.name"
                                          @click="$router.push({name:childMenu.name})">
                                {{itemValue(childMenu,['meta','title'])}}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </template>
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
