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
    <div class="home">
        <div style="padding:3% 30%; background:white">
            登录成功
        </div>
    </div>
</template>

<script>
    import index from './index.js'

    export default {
        ...index
    }
</script>

<style lang="stylus">
    .home {
        padding: 1% 3%
        .title {
            font-size: 16px;
            font-weight: 700;
            color: #333;
            padding: 20px 0
        }

        .button-card {
            width: 100%;
        }
    }
</style>
