/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import commodity from '@/mixins/commodity'

export default {
    name: 'importCommodity',
    mixins: [commodity],
    components: {},
    data() {
        return {
            dialogVisible: false,
            formData: {},
            orderList: [],
            rules: {
                p_name: [{required: true, message: '商品名不能为空', trigger: 'blur'},],
                p_type: [{required: true, message: '分类不能为空', trigger: 'blur'},],
                p_supplier: [{required: true, message: '供货商不能为空', trigger: 'blur'},],
                pf_price: [{required: true, message: '批发价格不能为空', trigger: 'blur'},],
                ls_price: [{required: true, message: '零售价格不能为空', trigger: 'blur'},],
                pic_url: [{required: true, message: '商品图片不能为空', trigger: 'blur'}],
            },
        };
    },
    methods: {
        createCommodity() {
            let that = this;
            this.$refs['formData'].validate((valid) => {
                if (valid) {
                    this.$http({
                        method: 'post',
                        url: '/proinfo/add',
                        data: that.formData,
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
        pushCommodity(item) {
            for (let i of this.orderList) {
                if (item.p_id === i.p_id) {
                    i.p_num += 1;
                    return
                }
            }
            this.orderList.push({p_id: item.p_id, user_id: this.$store.state.user.id, p_name: item.p_name, p_num: 1})
        },
        submitOrder() {
            this.$http({
                method: 'post',
                url: '/store/input',
                data: this.orderList
            }).then((res) => {
                this.$notify({
                    title: '提示',
                    message: '提交订单成功',
                    type: 'success',
                });
                this.orderList = [];
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '提交订单失败',
                    type: 'error',
                });
            })
        },
    },
};
