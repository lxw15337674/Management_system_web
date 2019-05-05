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
            dialogVisible: false,
            formData: {},
            title: '修改商品',
        };
    },
    methods: {
        edit(item) {
            this.formData = JSON.parse(JSON.stringify(item));
            this.title = '修改商品';
            this.dialogVisible = true
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
        createCommodityDialog() {
            this.formData = {};
            this.title = '新建商品';
            this.dialogVisible = true
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
