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
                address:[{required: true, message: '客户地址不能为空', trigger: 'blur'},],
                phone: [{required: true, message: '客户手机号不能为空', trigger: 'blur'},],
                expressNumber: [{required: true, message: '快递单号不能为空', trigger: 'blur'},],
                },
            submitVisible:false,
            orderList:[],
        };
    },
    methods: {
        pushCommodity(item) {
            for (let i of this.orderList) {
                if (item.p_id === i.p_id) {
                    i.p_num += 1;
                    return
                }
            }
            this.orderList.push({p_id: item.p_id, ls_price:item.ls_price, user_id: this.$store.state.user.id, p_name: item.p_name, p_num: 1})
        },
        submit(){

        },
        submitOrder(){

        }
    },
    computed: {},
};
