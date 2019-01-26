<template>
  <div class="setting-secure">
    <div class="userpass">
      <dl>
        <dt>密码：</dt>
        <dd>
          <a href="javascript:;" class="set-pw-btn" 
          @click="modifyPasswd = !modifyPasswd ">修改密码</a>
          <div class="ways" v-show="modifyPasswd">
            <a href="javascript:;" class="byphone disable"><i></i><p>手机验证修改</p></a>
            <a href="javascript:;" class="bymail" @click="to_reset"><i></i><p>邮箱验证修改</p></a>
          </div>
        </dd>
      </dl>
      <dl>
          <dt>绑定邮箱：</dt>
          <dd>
            <a href="javascript:;" @click="set_email = !set_email">设置邮箱</a>
            <setting-email v-show="set_email"></setting-email>
          </dd>
      </dl>
      <dl>
        <dt>绑定手机：</dt>
        <dd>
            188****7421
            <span class="status">
              <i></i>
              已绑定 
              <a href="/setting/security/mobile/?type=change">更改号码</a>
            </span>
        </dd>
      </dl>
      <dl>
        <dt>账号注销：</dt>
        <dd class="destroy">
            <br>
            <p>请发邮件至 : <a href="mailto:mfwyouji@mafengwo.com">mfwyouji@mafengwo.com</a></p><br>
            <p>邮件内请说明 : </p>
            <p>1. 登陆账号所使用的手机号或邮箱</p>
            <p>2. 账号内的重要资产 </p>
            <p>3. 账号相关的商城订单 </p>
            <p>4. 简要说要注销原因</p><br>
            <p>我们将在 1～3 个工作日内通过邮箱联系您，请您耐心等待！</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>

import setting_email from './setting_email.vue'

export default {
  name: 'setting-secure',
  data() {
    return{
      modifyPasswd: false,
      set_email: true
    };
  },
  components: {
    "setting-email": setting_email
  },
  methods:{
    to_reset() {
      this.$refs[form].validate((valid, {}) => {
        if (valid) {
            var vm = this
            vm.$http.get(this.GLOBAL.baseUrl + '/reset')
                .then((response) => {
                    if (response.body.status == 200){
                        console.log('reset success')
                        this.$router.push({
                            path: '/reset'
                        })
                    } else {
                        this.$message({
                        message: response.body.msg,
                        type: 'error'
                        })
                    }
                },(response) => {
                });
            } else {
                console.log('error submit!!');
                return false;
            }
            });
    }
  }
}
</script>

<style lang="less" scoped>
.userpass {
    width: 560px;

    .ways {
        padding-top: 15px;

        a {
            display: inline-block;
            text-align: center;
            font-size: 14px;
            color: #999;
            padding-bottom: 30px;
        }

        .byphone i {
            background-position: 0 -54px;
        }

        .bymail {
            margin-left: 45px;
        }

        .disable {
            cursor: default;
        }

        .bymail i {
            background-position: -54px 0;
        }

        i {
            width: 54px;
            height: 54px;
            display: inline-block;
            background: url(http://css.mafengwo.net/images/isettings/i_pw.png) no-repeat;
            margin: 10px 0 10px;
        }
    }

    dl {
        clear: both;
        width: 560px;
        padding-bottom: 15px;
        height: auto;
    }

    dt {
        width: 75px;
        float: left;
        padding: 0 10px 0 0;
        text-align: right;
        font-size: 14px;
    }

    dd {
        width: 455px;
        float: left;
        line-height: 1.8em;
        color: #666;
        height: auto;

        i {
          width: 18px;
          height: 18px;
          display: inline-block;
          background: url(http://css.mafengwo.net/images/isettings/i_btns4.png) -72px -1px no-repeat;
          margin: 0 4px 0 15px;
          vertical-align: middle;
        }

        .status {
          font-size: 12px;
          color: #999;

          a {
            display: inline;
            margin-left: 10px;
          }
        }
      }

      a {
          color: #ffa800;
          margin-top: 3px;
          font-weight: 600;
      }

      .destroy {
        font-size: 12px;

        a {
          display: inline;
        }
      }
}
</style>
