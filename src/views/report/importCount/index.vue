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
    <div class="Count">
        <div style="padding:3% 5%; background:white">
            <div class="title">
                商品入库统计
            </div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column label="商品名" prop="">
                </el-table-column>
                <el-table-column label="供货商" prop="">
                </el-table-column>
                <el-table-column label="所属分类" prop="">
                </el-table-column>
                <el-table-column label="库存" prop="" width="">
                </el-table-column>
                <el-table-column label="批发价格" prop="">
                </el-table-column>
                <el-table-column label="零售价格" prop="">
                </el-table-column>
                <el-table-column label="入库时间" prop="createTime">
                </el-table-column>
            </el-table>
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
    .Count {

        .title {
            font-size: 18px;
            font-weight: 700;
            color: #333;
            padding: 20px 0
        }

        .handle-button {
            width: 80px;
            font-size: 16px;
            margin: 0 5px
        }
    }
</style>
