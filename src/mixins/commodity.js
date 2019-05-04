/**
 *
 * @author lixiwang-15315
 * @date 2019/4/29 10:48
 */

// import  from '';

export default {

    data() {
        return {
            commodityList: [],
            typeList: [],
        };
    },
    methods: {
        //获取分类表
        getTypeList() {
            this.$http({
                method: 'post',
                url: 'proinfo/fl',
            }).then((res) => {
                this.typeList = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取分类列表失败',
                    type: 'error',
                });
            })
        },
        //获取商品表
        getCommodity(type) {
            this.$http({
                method: 'post',
                url: '/proinfo/getlist',
                data: type ? {type: type} : null
            }).then((res) => {
                this.commodityList = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取商品列表失败',
                    type: 'error',
                });
            })
        },
    },
    computed: {},
    mounted() {
        this.getCommodity();
        this.getTypeList()
    }
};
