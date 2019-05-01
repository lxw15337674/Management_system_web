/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';

export default {

    name: 'exportCommodity',
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
            submitVisible:false
        };
    },
    methods: {
        pushCommodity() {
        },
        submit(){

        }
    },
    computed: {},
    mounted() {

    }

};
