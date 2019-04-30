/**
 *
 * @author lixiwang-15315
 * @date 2019/4/23 11:12
 */
import util from '@/mixins/util'

export default {
    name: '',
    components: {},
    mixins: [util],
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
