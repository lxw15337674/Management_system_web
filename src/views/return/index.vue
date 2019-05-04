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
    <div class="return">
        <div class="return-title">
            订单详情
        </div>
        <svg id="canvas"></svg>

        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column label="订单号" prop="id">
            </el-table-column>
            <el-table-column label="快递单号" prop="expressNumber">
            </el-table-column>
            <el-table-column label="客户姓名" prop="name">
            </el-table-column>
            <el-table-column label="客户地址" prop="address" width="400">
            </el-table-column>
            <el-table-column label="客户手机号" prop="phone">
            </el-table-column>
            <el-table-column label="下单时间" prop="createTime">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="400">
                <template slot-scope="scope">
                    <el-button @click="editItem(scope.row)" type="success" size="small" class="handle-button" plain>
                        详情
                    </el-button>

                    <el-button @click="editItem(scope.row)" type="primary" size="small" class="handle-button" plain>
                        退换货处理
                    </el-button>
                    <el-button @click="deleteItem(scope.row)" type="danger" size="small" class="handle-button"
                               plain>删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    import index from './index.js'

    export default {
        ...index
    }
</script>

<style lang="stylus">
    .return {
        padding: 3% 5%;
        background: white

        .return-title {
            font-size: 16px;
            font-weight: 700;
            color: #333;
            padding: 20px 0
        }

        .handle-button {
            min-width: 80px;
            font-size: 16px;
            margin: 0 5px
        }
    }
</style>
