<template>
    <div class="login">
        <a href="/home" title="返回首页" class="logo">马蜂窝</a>
        <div class="signup-box">
            <div class="inner" :class="page == 'regist' ? 'height_regist' : 'height_login'">
                <div class="inner_left">
                    <div v-if="page == 'regist'">
                        <el-form ref="regist" :model="regist" :rules="regist_rules">
                            <el-form-item class="form-field" prop="account">
                                <el-input v-model="regist.account" placeholder="您的邮箱"/>
                            </el-form-item>
                            <el-form-item class="form-field" prop="phone1" style="display: none">
                                <el-input v-model="regist.phone1" placeholder="您的邮箱"/>
                            </el-form-item>
                            <el-form-item class="submit-btn">
                                <el-button @click="regist_now('regist')">立即注册</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="agreement">
                            注册视为同意<a target="_blank" href="http://www.mafengwo.cn/s/agreement.html">《用户使用协议》</a>
                        </div>
                    </div>
                    <div v-else>
                        <el-form ref="login" :model="login" :rules="login_rules">
                            <el-form-item class="form-field" prop="account">
                                <el-input v-model="login.account" placeholder="您的邮箱"/>
                            </el-form-item>
                            <el-form-item class="form-field" prop="passwd">
                                <el-input type="password" v-model="login.passwd" placeholder="您的密码"/>
                            </el-form-item>
                            <div class="form-link"><a href="/forget">忘记密码</a></div>
                            <el-form-item class="submit-btn">
                                <el-button @click="login_now('login')">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="connect">
                        <p class="hd">用合作网站账户直接登录</p>
                        <div class="bd">
                            <a href="/weibo" class="weibo"><i></i>新浪微博</a>
                            <a href="/qq" class="qq"><i></i>QQ</a>
                            <a href="/wechat" class="weixin"><i></i>微信</a>
                        </div>
                    </div>
                </div>
                <div class="inner_right">
                    <img src="https://images.mafengwo.net/mobile/images/omc/login-omc/code.jpg">
                    <p>扫一扫<br>下载APP</p>
                </div>
            </div>
            <div class="bottom-link" v-if="page == 'regist'">
                已经注册?<a href="" @click="regist_reset('regist')">马上登录</a>
            </div>
            <div class="bottom-link" v-else>
                还没有账号？<a href="#" @click="login_reset('login')">马上注册</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            page: '',
            regist: {
                account: ''
            },
            regist_rules:{
                account: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur'}
                ]
            },
            login: {
                account: '',
                passwd: ''
            },
            login_rules:{
                account: [
                    { required: true, message: '账号不能为空', trigger: 'blur'}
                ],
                passwd: [
                    { required: true, message: '密码不能为空', trigger: 'blur'}
                ]
            }
        };
    },
    created() {
        this.load()
    },
    methods: {
        load() {
            if(window.location.href.indexOf('=')){
                this.page = window.location.href.split('=')[1]
            }
        },
        regist_now(form){
            this.$refs[form].validate((valid) => {
                if (valid) {
                    var vm = this
                    var item = {
                        'account': vm.regist.account
                    }
                    vm.$http.post(this.GLOBAL.baseUrl + '/account_ver', item)
                        .then((response) => {
                            console.log(response)
                        if (response.body.status == 200){
                            if (response.body.args == 1){
                                console.log('regist success')
                                this.$router.push({
                                    path: '/regist'
                                })
                            }else{
                                this.$message({
                                    message: response.body.message,
                                    type: 'error'
                                })
                            }
                        } else {
                            this.$message({
                                message: response.body.message,
                                type: 'error'
                            })
                        }
                    },(response) => {
                        this.$message({
                            message: "没通过验证",
                            type: 'error'
                        })
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
        },
        regist_reset(form) {
            this.$refs[form].resetFields();
            this.page = 'login'
            window.$router.push(window.location.host + '?page=login')
        },
        login_now(form){
            this.$refs[form].validate((valid, {}) => {
                if (valid) {
                    var vm = this
                    var item = {
                        'account': vm.login.account,
                        'passwd': vm.login.passwd
                    }
                    vm.$http.post(this.GLOBAL.baseUrl + '/user_login', item)
                        .then((response) => {
                            if (response.body.status === 200){
                                if (response.body.args === 1) {
                                    console.log('login success')
                                    this.$router.push({
                                        path: '/home',
                                        // query: {
                                        //     account: this.login.account
                                        // }
                                    })
                                } else {
                                    this.$message({
                                        message: response.body.message,
                                        type: 'error'
                                    })
                                }
                            } else {
                                this.$message({
                                    message: response.body.message,
                                    type: 'error'
                                })
                            }
                        },(response) => {
                            console.log("没通过验证")
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
            });
        },
        login_reset(form) {
            this.$refs[form].resetFields();
            this.page = 'regist'
        },
        // getParams() {
        //     // 取到路由带过来的参数,放在当前组件的数据内
        //     this.page = this.$route.query.page
        // }
    },
    // created(){
    //     this.getParams()
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    background-image: url(https://images.mafengwo.net/images/signup/wallpaper/40.jpg);
    position: relative;
    padding-top: 10px;
    height: 800px;
}

a.logo {
    width: 75px;
    height: 70px;
    text-indent: -999px;
    background: url(https://css.mafengwo.net/images/signup/logo-new.png) no-repeat;
    margin: 10px auto;
}

.signup-box {
    padding: 10px;
}

.inner {
    padding-top: 26px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 3px rgba(0,0,0,.4);
    margin: 0 auto;
    width: 600px;
}

.height_regist {
    height: 326px;
}

.height_login {
    height: 350px;
}

.inner_left {
    float: left;
    width: 370px;
}

.form-field {
    clear: both;
    width: 320px;
    margin: 0 auto 10px;
    padding-top: 10px;
    zoom: 1\9;
}

.form-field input {
    width: 306px;
    height: 28px;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    font-size: 14px;
    color: #666;
    line-height: 28px;
    padding: 6px 0 6px 12px;
    box-shadow: 0 0 5px #fff;
    outline: 0;
    transition: box-shadow .25s linear 0s;
    -webkit-transition: box-shadow .25s linear 0s;
}

.submit-btn {
    width: 320px;
    margin: 0 auto;
    padding: 10px 0 0;
}

.submit-btn button {
    width: 320px;
    height: 42px;
    border: 0;
    background-color: #ffa800;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.agreement {
    width: 320px;
    margin: 0 auto;
    padding-top: 12px;
    font-size: 12px;
    color: #ccc;
    text-align: right;
    line-height: 1em;
}

.agreement a {
    color: #999;
    margin-left: 2px;
    display: inline;
}

.connect {
    margin-top: 30px;
}

.connect .hd {
    padding: 15px 0 20px 24px;
    font-size: 12px;
    color: #999;
    border-top: 1px solid #ebebeb;
}

.bd {
    padding: 0 0 0 25px;
    width: 348px;
    height: 84px;
    overflow: hidden;
}

.connect a {
    width: 58px;
    height: 84px;
    text-align: center;
    font-size: 12px;
    color: #999;
    display: inline-block;
    margin-right: 25px;
}

.connect a i {
    width: 42px;
    height: 42px;
    background: url(https://css.mafengwo.net/images/signup/c_icon3.gif) no-repeat;
    display: block;
    margin: 0 0 4px 10px;
    cursor: pointer;
}

.connect a.weibo i {
    background-position: 0 0;
}

.connect a.qq i {
    background-position: -42px 0;
}

.connect a.weixin i {
    background-position: -294px 0;
}

.inner_right {
    float: right;
    border-left: 1px solid #ebebeb;
    width: 208px;
    padding-left: 20px;
    height: 300px;
    padding-top: 20px;
}

.inner_right img {
    width: 180px;
    height: 180px;
}

.inner_right p {
    font-size: 15px;
    color: #797979;
    line-height: 24px;
    margin-top: 20px;
    text-align: center;
    width: 180px;
}

.bottom-link {
    width: 140px;
    margin: 10px auto 0;
    border-radius: 15px;
    background-color: rgba(0,0,0,.4);
    text-align: center;
    font-size: 12px;
    color: #fff;
    padding: 4px 0;
    font-weight: 600;
}

.bottom-link a {
    color: #ffa800;
    margin-left: 6px;
    display: inline;
}

.form-link {
    text-align: right;
    font-size: 12px;
    font-weight: 600;
    margin-right: 25px;
}

.form-link a {
    color: #ffa800;
}

/* .el-form-item.is-success .el-input__inner{
    border-color: #ff9d00 !important
} */
</style>
