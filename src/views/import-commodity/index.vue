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
    <div class="import-commodity">
        <!--            <div>入库</div>-->
        <el-row>
            <el-col :span="7" class="order-detail">
                <el-card>
                    <div slot="header">
                        <span class="title">订单详情</span>
                    </div>
                    <el-table>
                        <el-table-column
                                prop=""
                                label="商品">
                        </el-table-column>
                        <el-table-column
                                prop=""
                                label="数量">
                        </el-table-column>
                        <el-table-column
                                prop=""
                                label="小计（元）">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" class="content">
                <div style="margin-bottom:10px">
                <div class="title dib" style="padding:10px">商品选择</div>
                <el-button style="float: right" size="small" type="success">新建商品</el-button>
                </div>
                <div>
                    <el-row>
                        <el-col :span="8" v-for="(item,index) in 100" :key="index" style="padding:5px">
                            <el-card>
                                <el-row class="commodity">
                                    <el-col :span="9">
                                        <img src="//fuss10.elemecdn.com/1/e2/e8bf1273b9d4d268bdca6bc61ed46png.png?imageMogr2/thumbnail/100x100/format/webp/quality/85"
                                             class="commodity-img" alt="">
                                    </el-col>
                                    <el-col :span="14" class="detail">
                                        <div class="title">卤肉饭</div>
                                        <div>库存：3</div>
                                        <div class="price">单价：4</div>
                                        <el-button style="float:right" size="small" type="primary" round>加入订单</el-button>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import index from './index.js'

    export default {
        ...index
    }
</script>

<style lang="stylus">
    .import-commodity {
        padding: 1% 5%

        .order-detail {
            /*background white;*/
            min-height: 700px;
        }
        .content {
            background: white;
            margin-left: 20px
            min-height: 700px;
            padding: 20px

            .el-card__body {
                padding: 0
            }
        }

        .title {
            font-size: 16px;
            font-weight: 700;
            color: #333;
        }

        .commodity {
            height 120px

            .commodity-img {
                height: 120px
                width:100%

            }
        }

        .commodity:hover {
            background #f0f2f5
        }


        .detail {
            /*height 100%*/
            font-size: 16px;
            line-height 25px
            padding:5px 0 5px 10px
        }

    }
</style>
