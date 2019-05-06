/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
// import jsbarcode from 'jsbarcode';
import VueBarcode from 'vue-barcode';


export default {

    name: 'return',
    components: {    'barcode': VueBarcode},
    data() {
        return {
            dialogVisible: false,
            formData: {},
            orderDetail:[],
            rules: {
                name: [{required: true, message: '商品名不能为空', trigger: 'blur'},],
                classification: [{required: true, message: '分类不能为空', trigger: 'blur'},],
                supplier: [{required: true, message: '供货商不能为空', trigger: 'blur'},],
                wholesalePrice: [{required: true, message: '批发价格不能为空', trigger: 'blur'},],
                pic_url: [{required: true, message: '商品图片不能为空', trigger: 'blur'}],
            },
            orderList: [],
            tableData: [{
                id: '123',
                name: '123',
                address: '123',
                phone: '123',
                expressNUmber: '123'
            }],
            selId:''

        };
    },
    methods: {
        returnOrder(item) {
            this.$http({
                method: 'post',
                url: 'store/salesreturn',
                data: {'id': item.id}
            }).then((res) => {
                this.$notify({
                    title: '提示',
                    message: '退货成功',
                    type: 'success',
                });
                this.getOrderList();
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '退货失败',
                    type: 'error',
                });
            })
        },

        detailItem(item) {
            this.selId=item.id;
            this.dialogVisible = true;
            this.getOrderDetail(item.id);
        },
        getOrderDetail(id) {
            this.$http({
                method: 'post',
                url: 'store/getinfo',
                data: {'id': id}
            }).then((res) => {
                this.orderDetail = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取订单列表失败',
                    type: 'error',
                });
            })
        },
        getOrderList() {
            this.$http({
                method: 'post',
                url: 'store/getlist',
                data:{s_type:'1'}
            }).then((res) => {
                this.orderList = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取订单列表失败',
                    type: 'error',
                });
            })
        }

    },
    computed: {},
    mounted() {
        this.getOrderList();
    }

};
