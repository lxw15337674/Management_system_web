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
    <div class="export-commodity">
        <!--            <div>入库</div>-->
        <el-row>
            <el-col :span="7" class="order-detail">
                <el-card>
                    <div slot="header">
                        <span class="title">出库订单详情</span>
                    </div>
                    <el-table :data="orderList">
                        <el-table-column
                                prop="p_name"
                                label="商品">
                        </el-table-column>
                        <el-table-column
                                :width="150"
                                prop="num"
                                label="数量">
                            <template slot-scope="scope">
                                <el-input-number v-model="scope.row.num"  size="mini"  :min="1"></el-input-number>
                            </template>
                        </el-table-column>

                        <el-table-column
                                prop="ls_price"
                                label="零售金额">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="orderList.splice(scope.$index,1)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div style="text-align:right; padding:10px 20px" >
                        <span style="font-size:46px ;color:red"><span style="font-size: 20px">¥</span>{{total}}</span>
                    </div>
                    <div class="pd20">
                        <el-form :model="formData"
                                 ref="formData"
                                 label-width="100px"
                                 :rules="rules">
                            <el-form-item label="客户姓名" prop="ku_name">
                                <el-input clearable v-model="formData.ku_name" placeholder="请输入客户姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="客户地址" prop="ku_address">
                                <el-input clearable v-model="formData.ku_address" placeholder="请输入客户地址"></el-input>
                            </el-form-item>
                            <el-form-item label="客户手机号" prop="ku_phone" >
                                <el-input clearable v-model="formData.ku_phone" placeholder="请输入客户手机号"></el-input>
                            </el-form-item>
                            <el-form-item label="快递单号" prop="exp_num">
                                <el-input clearable v-model="formData.exp_num" placeholder="请输入快递单号"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div style="float:right; padding: 20px" >
                        <el-button type="danger" @click="submitOrder" style="width:110px; font-size:18px" :disabled="orderList.length === 0">确定</el-button>
                    </div>

                </el-card>
            </el-col>
            <el-col :span="16">
                <div class="content" style="min-height: 60px; margin-bottom:30px">
                    <el-row>
                        <el-col :span="3" style="color: #999;    padding: 12px;">商品分类：</el-col>
                        <el-col :span="21">
                            <el-button type="text" style="padding: 10px 20px;font-size:18px; margin:0"  @click="getCommodity()">所有分类</el-button>
                            <el-button type="text" style="padding: 10px 20px;font-size:18px; margin:0"
                                       v-for="(item,index) in typeList" :key="index"
                                       @click="getCommodity(item.p_type)">
                                {{item.p_type}}
                            </el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="content" style="min-height: 700px;">
                    <div style="margin-bottom:10px">
                        <div class="title dib" style="padding:10px">商品选择</div>
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="8" v-for="(item,index) in commodityList" :key="index" style="padding:5px">
                                <el-card class="commodity">
                                    <el-row>
                                        <el-col :span="9" style="padding:20px 5px">
                                            <img src="//fuss10.elemecdn.com/4/ec/8a5907b8a881258e4859cf63dc70bpng.png?imageMogr2/thumbnail/100x100/format/webp/quality/85"
                                                 class="commodity-img" alt="">
                                        </el-col>
                                        <el-col :span="15" class="detail">
                                            <div class="title">{{item.p_name}}</div>
                                            <div>供货商：{{item.p_supplier}}</div>

                                            <div>所属分类：{{item.p_type}}</div>
                                            <div>库存：{{item.p_num}}</div>
                                            <div class="price">批发价格：¥{{item.pf_price}}</div>
                                            <div class="price">零售价格：¥{{item.ls_price}}</div>
                                            <el-button style="float:right;    margin:10px 10px;" size="small"
                                                       type="primary" round
                                                       @click="pushCommodity(item)">加入入库单
                                            </el-button>
                                        </el-col>
                                    </el-row>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
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
    .export-commodity {
        padding: 1% 2%

        .order-detail {
            /*background white;*/
            min-height: 700px;
        }

        .content {
            background: white;
            margin-left: 20px
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
            height 190px
        }

        .commodity-img {
            height: 100px
            width: 100px
            position: relative;
            /*background-image: url("https://img.ithome.com/newsuploadfiles/2019/5/20190503_095829_648.png@wm_1,k_aW1nL3FkLnBuZw==,y_20,o_100,x_20,g_7");*/
            /*background-size: 100% 100%;*/
        }



        .el-card:hover {
            background #f0f2f5 !important
        }

        .detail {
            /*height 100%*/
            font-size: 15px;
            line-height: 20px;
            padding: 10px 0 0 0;
        }

    }
</style>
