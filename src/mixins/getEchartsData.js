/**
 *
 * @author lixiwang-15315
 * @date 2019/5/5 20:26
 */

// import  from '';

export default {

    name: '',
    components: {},
    data() {
        return {
            echartsData: [],
            lineValue: [],
            lineKey: [],
        };
    },
    methods: {
        getData(url) {
            this.$http({
                method: 'post',
                url: '/view/' + url
            }).then((res) => {
                this.echartsData = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取商品出库统计失败',
                    type: 'error',
                });
            })
        },
        getLineData(url) {
            this.$http({
                method: 'post',
                url: '/view/' + url
            }).then((res) => {
                let data = JSON.parse(res.data.result);
                for (let item of data) {
                    this.lineKey.push(item.date);
                    this.lineValue.push(item.value);
                }
                // this.echartsData = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取商品出库统计失败',
                    type: 'error',
                });
            })
        }
    },
    computed: {},
    mounted() {

    },
    watch: {
        echartsData: {
            deep: true,
            handler(val) {
                this.init();

            }
        },
        lineValue: {
            deep: true,
            handler(val) {
                this.init();

            }
        },
    },


};
