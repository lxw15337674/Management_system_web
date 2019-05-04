/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import commodity from '@/mixins/commodity'
import createCommodity from '@/mixins/createCommodity'

export default {

    name: 'inventoryManagement',
    mixins: [commodity, createCommodity],
    components: {},
    data() {
        return {
            selIndex: '',
            dialogVisible: false,
            editFormData: {},
        };
    },
    methods: {
        edit(index, item) {
            this.selIndex = index;
            this.editFormData = item
        },
        editSubmit(editFormData) {
            this.$http({
                method: 'post',
                url: '/proinfo/update',
                data: editFormData
            }).then((res) => {
                this.$notify({
                    title: '提示',
                    message: '编辑商品成功',
                    type: 'success',
                });
                this.selIndex = ''
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '编辑商品失败',
                    type: 'error',
                });
            })
        },
        deleteItem(item) {
            this.$http({
                method: 'post',
                url: '/proinfo/delete',
                data: {p_id: item.p_id}
            }).then((res) => {
                this.commodityList = JSON.parse(res.data.result);
                this.$notify({
                    title: '提示',
                    message: '删除商品成功',
                    type: 'success',
                });
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '删除商品失败',
                    type: 'error',
                });
            })
        },
        pushCommodity() {
        },

    },
    computed: {},
};
