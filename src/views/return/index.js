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
            rules: {
                name: [{required: true, message: '商品名不能为空', trigger: 'blur'},],
                classification: [{required: true, message: '分类不能为空', trigger: 'blur'},],
                supplier: [{required: true, message: '供货商不能为空', trigger: 'blur'},],
                wholesalePrice: [{required: true, message: '批发价格不能为空', trigger: 'blur'},],
                pic_url: [{required: true, message: '商品图片不能为空', trigger: 'blur'}],
            },
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
        createBarcode () {
            jsbarcode('#canvas', '1421784529458125', {
                lineColor: '#000',
                width: 1,
                height: 40,
                displayValue: false
            })
        }

    },
    computed: {},
    mounted() {
        this.createBarcode()
    }

};
