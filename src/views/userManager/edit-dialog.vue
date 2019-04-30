<!--
     /**
      * 组件名称
      * @desc 组件描述
      * @author lixiwang-15315
      * @date 2019/4/28 17:49
      * @param {Object} [title]    - 参数说明
      * @example 调用示例
      *
      */
    -->
<template>
    <el-dialog
            class="editDialog"
            :close-on-click-modal="false"
            :visible.sync="dialogVisible"
            :title="title"

            width="30%">
        <el-form :model="formData"
                 ref="formData"
                 label-width="80px"
                 :rules="rules">
            <el-form-item v-if="title==='新增'" label="用户名" prop="username">
                <el-input clearable v-model="formData.username" placeholder="请选择用户名"  ></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
                <el-input clearable v-model="formData.nickname" placeholder="请选择昵称"></el-input>
            </el-form-item>
            <el-form-item label="用户类型" prop="user_type">
                <el-select v-model="formData.user_type" placeholder="请选择用户类型">
                    <el-option v-for="item in userType"
                               :label="item.label"
                               :value="item.value"
                               :key="item.value"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancelForm">取 消</el-button>
            <el-button type="primary" @click="submitForm">确 定</el-button>
         </span>
    </el-dialog>
</template>

<script>
    import userType from '@/mixins/userType'

    export default {
        name: 'editDialog',
        mixins: [userType],
        props: {
            selData: {
                type: Object,
            }
        },
        data() {
            let checkname = (rule, value, callback) => {
                this.$http.post('/index/checkname', JSON.stringify({
                    username: value
                })).then(res => {
                    if (res.data.result) {
                        callback(new Error('用户名已被使用'));
                    } else {
                        callback();
                    }
                }).catch(res => {
                    callback();
                });
            };
            return {
                dialogVisible: false,
                formData: {},
                title: '',
                rules: {
                    username: [{required: true, message: '账号不能为空', trigger: 'blur'},
                        {validator: checkname, trigger: 'blur'}],
                    nickname: [{required: true, message: '昵称不能为空', trigger: 'blur'}],
                    user_type: [{required: true, message: '用户类型不能为空', trigger: 'blur'}]
                },
            };
        },
        methods: {
            submitForm() {
                let that = this;
                this.$refs['formData'].validate((valid) => {
                    if (valid) {
                        let param = {
                            id: that.formData.id,
                            nickname: that.formData.nickname,
                            user_type: that.formData.user_type,
                        };
                        this.$http({
                            method: 'post',
                            url: '/index/edit',
                            data: param
                        }).then((res) => {
                            this.$notify({
                                title: '提示',
                                message: '修改用户成功',
                                type: 'success',
                            });
                            this.$emit('refresh')
                        }).catch((res) => {
                            this.$notify({
                                title: '提示',
                                message: '修改用户失败',
                                type: 'error',
                            });
                        });
                        this.dialogVisible = false

                    }
                });
            },
            cancelForm() {
                this.dialogVisible = false
            }
        },
        watch: {
            selData(newValue) {
                if (newValue) {
                    this.formData = JSON.parse(JSON.stringify(newValue))
                }
            }
        }
    }
</script>

<style lang="stylus">
    .el-dialog__header {
        background: #5c6de8;
        padding: 14px 20px 10px;
    }

    .el-dialog__title {
        color: #fff;
        font-weight: bold;
    }
</style>
