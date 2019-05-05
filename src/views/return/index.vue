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
        <el-table
                :data="orderList"
                border
                style="width: 100%">
            <el-table-column label="订单号" prop="id">
            </el-table-column>
            <el-table-column label="快递单号" prop="exp_num">
            </el-table-column>
            <el-table-column label="客户姓名" prop="ku_name">
            </el-table-column>
            <el-table-column label="客户地址" prop="ku_address" width="350">
            </el-table-column>
            <el-table-column label="客户手机号" prop="ku_phone">
            </el-table-column>
            <el-table-column label="下单时间" prop="make_date" width="200">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="350">
                <template slot-scope="scope">
                    <el-button @click="detailItem(scope.row)" type="info" size="small" class="handle-button" plain>
                        详情
                    </el-button>
<!--                    <el-button @click="editItem(scope.row)" type="success" size="small" class="handle-button" plain>-->
<!--                        编辑-->
<!--                    </el-button>-->
                    <el-button @click="editItem(scope.row)" type="primary" size="small" class="handle-button" plain>
                        退货处理
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
                title="商品详情"
                :visible.sync="dialogVisible"
                width="60%">
            <svg id="svgcode"></svg>
            <div>
                <el-table
                        :data="orderDetail"
                        border
                        style="width: 100%">
                    <el-table-column label="商品名" prop="p_name">
                    </el-table-column>
                    <el-table-column label="供货商" prop="p_supplier">
                    </el-table-column>
                    <el-table-column label="所属分类" prop="p_type">
                    </el-table-column>
                    <el-table-column label="数量" prop="num" >
                    </el-table-column>
                    <el-table-column label="批发价格" prop="pf_price">
                    </el-table-column>
                    <el-table-column label="零售价格" prop="ls_price">
                    </el-table-column>
                </el-table>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
  </span>
        </el-dialog>
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
            min-width: 60px;
            margin: 0 5px
        }
    }
</style>
