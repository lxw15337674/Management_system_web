/**
 *
 * @author lixiwang-15315
 * @date 2019/4/23 11:12
 */

// import  from '';

export default {

    name: 'login',
    components: {},
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [
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
                        data: this.loginForm
                    }).then((res) => {
                        let data = JSON.parse(res.data.result);
                        if (data) {
                            this.$message({
                                message:'登录成功',
                                type: 'success'
                            });
                            this.$store.commit('login', data);
                            localStorage.setItem('isLogin','1');
                            this.$router.push({name: 'home'})

                        } else {
                            this.$message({
                                message:'账号或密码错误',
                                type: 'error',
                                center: true,
                                customClass: 'message',
                            });
                        }
                    }).catch((res) => {
                        this.$notify.error({
                            title: '错误',
                            message: '登录错误'
                        });
                    });

                } else {
                    return false;
                }
            });
        },
    },
    computed: {},
    mounted() {
    }

};
