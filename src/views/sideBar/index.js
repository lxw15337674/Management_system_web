/**
 *
 * @author lixiwang-15315
 * @date 2019/4/23 11:12
 */
import util from '@/mixins/util'
import userType from '@/mixins/userType'
export default {
    name: '',
    components: {},
    mixins: [util,userType],
    data() {
        return {
            activeIndex: ''
        }
    },
    methods: {
        handleSelect() {
        },

    },
    computed: {
        menuList() {
            return this.$router.options.routes
        },


    },
};
