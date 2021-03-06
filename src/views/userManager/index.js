/**
 *
 * @author lixiwang-15315
 * @date 2019/4/28 17:15
 */

import editDialog from "./edit-dialog.vue";
import userType from '@/mixins/userType'

export default {
    name: 'userManager',
    components: {editDialog},
    mixins:[userType],
    data() {
        return {
            userList: [],
            selData :{},
        };
    },
    methods: {
        getUserList() {
            this.$http({
                method: 'post',
                url: '/index/userlist',
            }).then((res) => {
                this.userList = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取用户列表失败',
                    type:'error',
                });
            })
        },
        editRow(row){
            this.selData=row;
            this.$refs.dialog.dialogVisible=true;
            this.$refs.dialog.title='编辑';
        },
        add(){
            this.selData={};
            this.$refs.dialog.dialogVisible=true;
            this.$refs.dialog.title='新增';

        },
        deleteRow(row){
            this.$http({
                method: 'post',
                url: '/index/delete',
                data:{id:row.id}
            }).then((res) => {
                this.userList = JSON.parse(res.data.result);
            }).catch((res) => {
                this.$notify({
                    title: '提示',
                    message: '获取用户列表失败',
                    type:'error',
                });
            })

        }
    },
    computed: {},
    mounted() {
        this.getUserList()
    }

};
