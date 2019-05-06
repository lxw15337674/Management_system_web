/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';

export default {

    name: 'return',
    components: {},
    data() {
        return {
            orderList:[]
        };
    },
    methods: {
        editItem() {

        },
        deleteItem() {

        },
        getImportCommodity() {
            this.$http({
                method: 'post',
                url: 'view/useroutview',
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
        this.getImportCommodity()
    }

};
