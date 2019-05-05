/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import commodity from '@/mixins/commodity'
import createCommodity from '@/mixins/createCommodity'

export default {
    name: 'importCommodity',
    mixins: [commodity,createCommodity],
    components: {},
    data() {
        return {
            dialogVisible: false,
            formData: {},
            orderList: [],
        };
    },
    methods: {

        pushCommodity(item) {
            for (let i of this.orderList) {
                if (item.p_id === i.p_id) {
                    i.num += 1;
                    return
                }
            }
            let obj = {p_id: item.p_id, p_name: item.p_name, num: 1};
            this.orderList.push(obj);
        },
        submitOrder() {
            this.$http({
                method: 'post',
                url: '/store/input',
                data: {orderList: this.orderList, user_id: this.$store.state.user.id}
            }).then((res) => {
                this.$notify({
                    title: '提示',
                    message: '提交订单成功',
                    type: 'success',
                });
                this.orderList = [];
                this.getCommodity();
                this.getTypeList()
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
