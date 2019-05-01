/**
 *
 * @author lixiwang-15315
 * @date 2019/4/30 9:10
 */

// import  from '';
import staffExport from './component/staffExport.vue'
import staffImport from './component/staffImport.vue'
import profit from './component/profit.vue'
import order from './component/order.vue'
import exportEcharts from './component/exportEcharts'
import importEcharts from './component/importEcharts'

export default {

    name: 'reportCount',
    components: {staffExport, staffImport, order, profit,exportEcharts,importEcharts},
    data() {
        return {};
    },
    methods: {},
    computed: {},
    mounted() {

    }

};
