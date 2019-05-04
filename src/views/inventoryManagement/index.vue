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
    <div class="inventoryManagement">
        <!--            <div>入库</div>-->
        <div class="content" style="min-height: 60px; margin-bottom:30px">
            <el-row>
                <el-col :span="2" style="color: #999;    padding: 12px; text-align: center">
                    商品分类：
                </el-col>
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
                <div class="title dib" style="padding:10px">目前库存</div>
            </div>
            <div>
                <el-row>
                    <el-col :span="8" v-for="(item,index) in commodityList" :key="index" style="padding:5px">

                        <el-card style="    padding: 20px;" class="commodity">
                            <template v-if="index===selIndex">
                                <el-form :model="formData"
                                         ref="formData"
                                         label-width="80px"
                                         :rules="rules">
                                    <el-form-item label="商品名" prop="name">
                                        <el-input clearable v-model="formData.name" placeholder="请输入商品名"></el-input>
                                    </el-form-item>
                                    <el-form-item label="分类" prop="classification">
                                        <el-input clearable v-model="formData.classification"
                                                  placeholder="请输入分类"></el-input>
                                    </el-form-item>
                                    <el-form-item label="供货商" prop="supplier">
                                        <el-input clearable v-model="formData.supplier" placeholder="请输入供货商"></el-input>
                                    </el-form-item>
                                    <el-form-item label="批发价格" prop="wholesalePrice">
                                        <el-input clearable v-model="formData.wholesalePrice"
                                                  placeholder="请输入批发价格"></el-input>
                                    </el-form-item>
                                    <el-form-item label="库存数量" prop="number">
                                        <el-input-number v-model="formData.number" :min="0"
                                                         label="描述文字"></el-input-number>
                                    </el-form-item>
                                    <el-form-item label="零售价格" prop="sellPrice">
                                        <el-input clearable v-model="formData.sellPrice"
                                                  placeholder="请输入零售价格"></el-input>
                                    </el-form-item>
                                    <el-form-item label="商品图片" prop="imgUrl">
                                        <el-input clearable v-model="formData.imgUrl" placeholder="请输入商品图片"></el-input>
                                    </el-form-item>
                                    <el-form-item label="图片浏览">
                                        <img :src="formData.imgUrl"
                                             class="commodity-img" alt="">
                                    </el-form-item>
                                    <el-button class="handle-button" size="medium" type="primary"
                                               @click="submit()">确定
                                    </el-button>
                                </el-form>
                            </template>
                            <template v-else>
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
                                    </el-col>
                                </el-row>
                                <el-button class="handle-button" size="medium" type="primary"
                                           @click="edit(index)">编辑
                                </el-button>
                                <el-button class="handle-button" size="medium" type="danger"
                                           @click="deleteItem(item)">删除
                                </el-button>
                            </template>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-dialog
                title="新建商品"
                :visible.sync="dialogVisible"
                width="30%">
            <el-form :model="formData"
                     ref="formData"
                     label-width="80px"
                     :rules="rules">
                <el-form-item label="商品名" prop="name">
                    <el-input clearable v-model="formData.name" placeholder="请输入商品名"></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="classification">
                    <el-input clearable v-model="formData.classification" placeholder="请输入分类"></el-input>
                </el-form-item>
                <el-form-item label="供货商" prop="supplier">
                    <el-input clearable v-model="formData.supplier" placeholder="请输入供货商"></el-input>
                </el-form-item>
                <el-form-item label="批发价格" prop="wholesalePrice">
                    <el-input clearable v-model="formData.wholesalePrice" placeholder="请输入批发价格"></el-input>
                </el-form-item>
                <el-form-item label="零售价格" prop="sellPrice">
                    <el-input clearable v-model="formData.sellPrice" placeholder="请输入零售价格"></el-input>
                </el-form-item>
                <el-form-item label="商品图片" prop="imgUrl">
                    <el-input clearable v-model="formData.imgUrl" placeholder="请输入商品图片"></el-input>
                </el-form-item>
                <el-form-item label="图片浏览">
                    <img :src="formData.imgUrl"
                         class="commodity-img" alt="">
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
    .inventoryManagement {
        padding: 1% 8%

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


        .commodity {
            min-height: 120px;
            font-size: 18px;
            line-height: 28px;
        }

        .commodity-img {
            height: 120px
            width: 120px

        }


        .handle-button {
            float: right;
            width: 80px;
            font-size: 16px;
            margin: 0 5px
        }

    }
</style>
