/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import commodity from '@/mixins/commodity'

export default {

    name: 'inventoryManagement',
    mixins: [commodity],
    components: {},
    data() {
        return {
            selIndex: '',
            dialogVisible: false,
            formData: {
                number: 0,
            },
            rules: {
                name: [{required: true, message: '商品名不能为空', trigger: 'blur'},],
                classification: [{required: true, message: '分类不能为空', trigger: 'blur'},],
                supplier: [{required: true, message: '供货商不能为空', trigger: 'blur'},],
                wholesalePrice: [{required: true, message: '批发价格不能为空', trigger: 'blur'},],
                imgUrl: [{required: true, message: '商品图片不能为空', trigger: 'blur'}],
                sellPrice: [{required: true, message: '零售价格不能为空', trigger: 'blur'},],

            },
        };
    },
    methods: {
        edit(index) {
            this.selIndex = index
        },
        submit() {
            this.selIndex = ''
        },
        deleteItem(item) {
            this.$http({
                method: 'post',
                url: '/prolist/delete',
                data:{p_id:item.p_id}
            }).then((res) => {
                this.commodityList = JSON.parse(res.data.result);
                this.$notify({
                    title: '提示',
                    message: '删除商品列表成功',
                    type: 'success',
                });
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '删除商品列表失败',
                    type: 'error',
                });
            })
        },
        pushCommodity() {
        },

    },
    computed: {},
};
