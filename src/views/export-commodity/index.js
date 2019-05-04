/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import commodity from '@/mixins/commodity'
import order from "../report/reportCount/component/order";

export default {
    name: 'exportCommodity',
    mixins: [commodity],
    components: {},
    data() {
        return {
            dialogVisible: false,
            formData: {},
            rules: {
                ku_name: [{required: true, message: '客户姓名不能为空', trigger: 'blur'},],
                ku_address: [{required: true, message: '客户地址不能为空', trigger: 'blur'},],
                ku_phone: [{required: true, message: '客户手机号不能为空', trigger: 'blur'},],
                exp_num: [{required: true, message: '快递单号不能为空', trigger: 'blur'},],
            },
            submitVisible: false,
            orderList: [],

        };
    },
    methods: {
        pushCommodity(item) {
            if (item.p_num === undefined || item.p_num === 0) {
                this.$notify.error({
                    title: '错误',
                    message: '该商品库存为0，不能出库'
                });
            } else {
                for (let i of this.orderList) {
                    if (item.p_id === i.p_id) {
                        i.num += 1;
                        return
                    }
                }
                let obj = {...item, num: 1};
                this.orderList.push(obj);
            }
        },
        submit() {

        },
        submitOrder() {
            this.$refs['formData'].validate((valid) => {
                if (valid) {
                    let orderList =[];
                    for (let item of this.orderList){
                        orderList.push({p_id:item.p_id,num:item.num,p_name:item.p_name})
                    }
                    let obj = {
                        orderList: orderList,
                        user_id: this.$store.state.user.id,
                        kuList: this.formData,
                    };
                    this.$http({
                        method: 'post',
                        url: '/store/out',
                        data: obj
                    }).then((res) => {
                        this.$notify({
                            title: '提示',
                            message: '出库成功',
                            type: 'success',
                        });
                    }).catch((res) => {
                        this.$notify({
                            title: '提示',
                            message: '出库失败',
                            type: 'error',
                        });
                    });

                } else {
                    return false;
                }
            });
        }
    },
    computed: {
        total() {
            let total = 0;
            for (let item of this.orderList) {
                total += item.pf_price * item.num
            }
            return total
        }
    },
};
