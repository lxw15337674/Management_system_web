/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import commodity from '@/mixins/commodity'
export default {
    name: 'exportCommodity',
    mixins: [commodity],
    components: {},
    data() {
        return {
            dialogVisible: false,
            formData: {},
            rules: {
                name: [{required: true, message: '客户姓名不能为空', trigger: 'blur'},],
                address: [{required: true, message: '客户地址不能为空', trigger: 'blur'},],
                phone: [{required: true, message: '客户手机号不能为空', trigger: 'blur'},],
                expressNumber: [{required: true, message: '快递单号不能为空', trigger: 'blur'},],
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

        }
    },
    computed: {},
};
