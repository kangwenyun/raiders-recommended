<template>
    <div class="resetPasswd">
        <a href="/home" title="返回首页" class="logo">马蜂窝</a>
        <div class="add-info">
            <div class="hd">设置新密码</div>
            <el-form ref="resetPasswd" :model="resetPasswd" :rules="resetPasswd_rules" status-icon>
                <el-form-item class="form-field"
                 style="text-align: left; margin: 0 0 -10px 30px;">
                    <span>邮件验证码已下发，请注意查收。</span>
                </el-form-item>
                <el-form-item class="form-field" prop="passwd">
                    <el-input type="password" v-model="resetPasswd.passwd" placeholder="您的密码" autocomplete="off"/>
                </el-form-item>
                <el-form-item class="form-field" prop="passwdAgain">
                    <el-input type="password" v-model="resetPasswd.passwdAgain" placeholder="确认密码" autocomplete="off"/>
                </el-form-item>
                <el-form-item class="form-field" prop="code">
                    <el-input v-model="resetPasswd.code" placeholder="邮件验证码" autocomplete="off"/>
                </el-form-item>
                <el-form-item class="submit-btn">
                    <el-button @click="reset('resetPasswd')">完成</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'resetPasswd',
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.resetPasswd.passwdAgain !== '') {
                    this.$refs.resetPasswd.validateField('passwdAgain');
                }
                callback();
            }
        };
        var validatePassAgain = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.resetPasswd.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            resetPasswd: {
                email: 'pu971954596@qq.com',
                account: '',
                passwd: '',
                passwdAgain: '',
                code: ''
            },
            resetPasswd_rules:{
                account: [
                    { required: true, message: '您的名号不能为空', trigger: 'blur'}
                ],
                passwd: [
                    { validator: validatePass, trigger: 'blur'}
                ],
                passwdAgain: [
                    { validator: validatePassAgain, trigger: 'blur'}
                ],
                code: [
                    { required: true, message: '邮件验证码不能为空', trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        reset(form){
            this.$refs[form].validate((valid, {}) => {
                if (valid) {
                    var vm = this
                    var item = {
                        'account': this.resetPasswd.email,
                        'name': vm.resetPasswd.account,
                        'passwd': vm.resetPasswd.passwd,
                        'code': vm.resetPasswd.code
                    }
                    vm.$http.post(this.GLOBAL.baseUrl + '/option', item)
                        .then((response) => {
                        if (response.body.status === 200){
                            console.log('resetPasswd success')
                            this.$router.push({
                                path: '/login'
                            })
                        } else {
                            this.$message({
                                message: response.body.msg,
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
        get_code() {
            var vm = this
            vm.$http.get(this.GLOBAL.baseUrl + '/mail?account=' + this.resetPasswd.email)
                .then((response) => {
                if (response.body.status == 200){
                    console.log('get_code success')
                } else {
                    this.$message({
                        message: response.body.msg,
                        type: 'error'
                    })
                }
            },(response) => {});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.resetPasswd{
    background-image: url(https://images.mafengwo.net/images/signup/wallpaper/40.jpg);
    height: 800px;
    padding: 10px 0;

    a.logo {
        width: 75px;
        height: 70px;
        text-indent: -999px;
        background: url(https://css.mafengwo.net/images/signup/logo-new.png) no-repeat;
        margin: 10px auto;
    }

    .add-info {
        text-align: center;
        width: 370px;
        background-color: #fff;
        border-radius: 5px;
        padding-bottom: 20px;
        margin: 0 auto;

        .hd {
            height: 56px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #d8d8d8;
            line-height: 56px;
            font-size: 18px;
            color: #666;
            padding: 0 26px;
            border-radius: 5px 5px 0 0;
            text-align: left;
            margin-bottom: 10px;
        }
    }

    .form-field {
        clear: both;
        width: 320px;
        margin: 0 auto 10px;
        padding-top: 15px;
        zoom: 1\9;

        input {
            border: 1px solid #d8d8d8;
            border-radius: 4px;
            color: #666;
            box-shadow: 0 0 5px #fff;
            outline: 0;
            transition: box-shadow .25s linear 0s;
            -webkit-transition: box-shadow .25s linear 0s;
        }
    }

    .code {
        width: 120px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        margin-right: 10px;
        text-align: center;
        border: 1px solid #dfdfdf;
        border-radius: 4px;
        background: #f2f2f2;
        color: #333;
        float: left;
    }

    .el-button {
        padding: 0;
        font-weight: 400;
        font-size: 12px;
    }

    .submit-btn {
        width: 320px;
        margin: 0 auto;
        padding: 12px 0 0;

        button {
            width: 320px;
            height: 42px;
            border: 0;
            background-color: #ffa800;
            border-radius: 5px;
            text-align: center;
            line-height: 40px;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
        }
    }
}
</style>
