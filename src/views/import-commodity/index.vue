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
                        <span class="title">入库单详情</span>
                    </div>
                    <el-table :data="orderList">
                        <el-table-column
                                prop="p_name"
                                label="商品">
                        </el-table-column>
                        <el-table-column
                                prop="num"
                                label="数量">
                            <template slot-scope="scope">
                                <el-input-number v-model="scope.row.num"  size="mini"  :min="1" :max="scope.row.p_num"></el-input-number>
                            </template>
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
                    <div style="float:right; padding: 20px" >
                        <el-button type="danger" @click="submitOrder" style="width:110px; font-size:18px" :disabled="orderList.length === 0">确定</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <div class="content" style="min-height: 60px; margin-bottom:30px">
                    <el-row>
                        <el-col :span="2" style="color: #999;    padding: 12px;">商品分类：</el-col>
                        <el-col :span="22">
                            <el-button type="text" style="padding: 10px 20px;font-size:18px; margin:0" v-for="item in typeList"
                            @click="getCommodity(item.p_type)">
                                {{item.p_type}}
                            </el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="content" style="min-height: 700px;">
                    <div style="margin-bottom:10px">
                        <div class="title dib" style="padding:10px">商品选择</div>
                        <el-button style="float: right" size="small" type="success" @click="dialogVisible = true">新建商品
                        </el-button>
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="8" v-for="(item,index) in commodityList" :key="index" style="padding:5px">
                                <el-card>
                                    <el-row class="commodity">
                                        <el-col :span="8">
                                            <img :src=item.pic_url
                                                 class="commodity-img" alt="">
                                        </el-col>
                                        <el-col :span="15" class="detail">
                                            <div class="title">{{item.p_name}}</div>
                                            <el-row>
                                                <el-col :span="12">
                                                    <div>供货商：{{item.p_supplier}}</div>

                                                </el-col>
                                                <el-col :span="12">
                                                    <div>所属分类：{{item.p_type}}</div>
                                                </el-col>
                                            </el-row>
                                            <div>库存：{{item.p_num}}</div>
                                            <el-row>
                                                <el-col :span="12">
                                                    <div class="price">批发价格：{{item.pf_price}}</div>
                                                </el-col>

                                                <el-col :span="12">
                                                    <div class="price">零售价格：{{item.ls_price}}</div>

                                                </el-col>
                                            </el-row>
                                            <el-button style="float:right;    margin:10px 0;" size="small" type="primary" round
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
        <el-dialog
                title="新建商品"
                :visible.sync="dialogVisible"
                width="30%">
            <el-form :model="formData"
                     ref="formData"
                     label-width="80px"
                     :rules="rules">
                <el-form-item label="商品名" prop="p_name">
                    <el-input clearable v-model="formData.p_name" placeholder="请输入商品名"></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="p_type">
                    <el-input clearable v-model="formData.p_type" placeholder="请输入分类"></el-input>
                </el-form-item>
                <el-form-item label="供货商" prop="p_supplier">
                    <el-input clearable v-model="formData.p_supplier" placeholder="请输入供货商"></el-input>
                </el-form-item>
                <el-form-item label="批发价格" prop="pf_price">
                    <el-input clearable v-model="formData.pf_price" placeholder="请输入批发价格"></el-input>
                </el-form-item>
                <el-form-item label="零售价格" prop="ls_price">
                    <el-input clearable v-model="formData.ls_price" placeholder="请输入零售价格"></el-input>
                </el-form-item>
                <el-form-item label="商品图片" prop="pic_url">
                    <el-input clearable v-model="formData.pic_url" placeholder="请输入商品图片"></el-input>
                </el-form-item>
                <el-form-item label="图片浏览">
                    <img :src="formData.pic_url"
                         class="commodity-img" alt="">
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="createCommodity(formData)">确 定</el-button>
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
    .import-commodity {
        padding: 1% 5%

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
            height 120px


        }

        .commodity-img {
            height: 100%
            width: 120px

        }

        .el-card:hover {
            background #f0f2f5 !important
        }


        .detail {
            /*height 100%*/
            font-size: 15px;
            line-height: 20px;
            padding: 10px 0 ;
        }

    }
</style>
