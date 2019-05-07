/**
 *
 * @author lixiwang-15315
 * @date 2019/4/29 10:48
 */

// import  from '';

export default {

    data() {
        return {
            userType: [{
                label: '系统管理员',
                value: '0',

            }, {
                label: '进货人员',
                value: '1',
                permissionList: [{name: 'inventoryManagement', title: '库存管理'}, {name: 'import', title: '入库'}]
            },
                {
                    label: '出货人员',
                    value: '2',
                    permissionList: [{name: 'inventoryManagement', title: '库存管理'},{name: 'export', title: '出库'},]
                }
            ],
        };
    },
    computed: {
        permissionList() {
            let type = this.$store.getters.user_type;
            for (let item of this.userType) {
                if (item.value === type) {
                    return item.permissionList
                }
            }
        }
    }

};
