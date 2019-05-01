<!--
     /**
      * 组件名称
      * @desc 组件描述
      * @author lixiwang-15315
      * @date 2019/4/30 9:10
      * @param {Object} [title]    - 参数说明
      * @example 调用示例
      *
      */
    -->
<template>
    <div class="reportCount">
        <div class="title">
            报表统计
        </div>
        <div class="dib">
            <staff-export></staff-export>
            <staff-import></staff-import>
        </div>
        <div class="dib " style="margin-left:10%">
            <order></order>
            <profit></profit>
        </div>
        <div class="dib" style="margin-left:10%">
            <export-echarts></export-echarts>
            <import-echarts></import-echarts>
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
    .reportCount {
        padding: 1% 3%
        min-height 800px;
        background: white

        .title {
            font-size: 25px;
            font-weight: 700;
            color: #333;
            padding: 20px 0
            text-align center
        }

        .handle-button {
            width: 80px;
            font-size: 16px;
            margin: 0 5px
        }
    }
</style>
