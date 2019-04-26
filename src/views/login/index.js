/**
 *
 * @author lixiwang-15315
 * @date 2019/4/23 11:12
 */

// import  from '';

export default {

    name: '',
    components: {},
    data() {
        return {
            loginForm: {
                userName: '',
                password: '',
            },
            rules: {
                userName: [
                    {required: true, message: '请输入账号', trigger: 'blur'},
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                ],
            }
        };
    },
    methods: {
        login() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.$http({
                        method: 'post',
                        url: '/index/login',
                        data:this.loginForm
                    }).then((res) => {
                        let data = res.data;
                        if(data.result) {
                            this.$message({
                                message: data.description,
                                type: 'success'
                            });
                            this.$store.commit('handleUserName', formName.userName)
                        }else{
                            this.$message({
                                message: '登陆成功',
                                type: 'success'
                            });
                        }
                    }).catch((res) => {
                        debugger
                    });
                    this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    computed: {},
    mounted() {

    }

};
