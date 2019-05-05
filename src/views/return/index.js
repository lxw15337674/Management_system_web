/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import jsbarcode from 'jsbarcode';

export default {

    name: 'return',
    components: {},
    data() {
        return {
            dialogVisible: false,
            formData: {},
            orderDetail:{},
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
            }]
        };
    },
    methods: {
        editItem(item) {

        },
        deleteItem() {

        },
        detailItem(item) {
            this.dialogVisible = true;
            this.getOrderDetail(item.id);
            this.createCodeImg(item.id)
        },
        createCodeImg(id) {
            jsbarcode('#svgcode', id, {
                lineColor: '#000',
                width: 2,
                height: 40,
                displayValue:false
            })
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
        // this.createBarcode();
        this.getOrderList();
    }

};
