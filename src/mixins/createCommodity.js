export default {
    data(){
        return{
            rules: {
                p_name: [{required: true, message: '商品名不能为空', trigger: 'blur'},],
                p_type: [{required: true, message: '分类不能为空', trigger: 'blur'},],
                p_supplier: [{required: true, message: '供货商不能为空', trigger: 'blur'},],
                pf_price: [{required: true, message: '批发价格不能为空', trigger: 'blur'},],
                ls_price: [{required: true, message: '零售价格不能为空', trigger: 'blur'},],
                pic_url: [{required: true, message: '商品图片不能为空', trigger: 'blur'}],
            },
        }
    },
    methods: {
        createCommodity(formData) {
            this.$refs['formData'].validate((valid) => {
                if (valid) {
                    this.$http({
                        method: 'post',
                        url: '/proinfo/add',
                        data: formData,
                    }).then((res) => {
                        this.$notify({
                            title: '提示',
                            message: '新建商品成功',
                            type: 'success',
                        });
                        this.getCommodity()
                    }).catch((res) => {
                        this.$notify({
                            title: '提示',
                            message: '新建商品失败',
                            type: 'error',
                        });
                    });
                    this.dialogVisible = false
                }
            })
        },
    }
}
