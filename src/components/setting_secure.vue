<template>
  <div class="setting-secure">
    <div class="userpass">
      <dl>
        <dt>密码：</dt>
        <dd>
          <a href="javascript:;" class="set-pw-btn" @click="modifyPasswd = !modifyPasswd ">修改密码</a>
          <div class="ways" v-show="modifyPasswd">
            <a href="javascript:;" class="byphone disable">
              <i></i>
              <p>手机验证修改</p>
            </a>
            <a href="javascript:;" class="bymail" @click="send_email">
              <i></i>
              <p>邮箱验证修改</p>
            </a>
            <div v-show="to_emial" class="set-mail">
              <p>
                邮件已发送到您的邮箱：
                <strong>{{ email }}</strong>
              </p>
              <p>
                请点击邮箱中的验证链接完成验证
                <a class="to_email" target="_blank" href="http://mail.qq.com">前往邮箱验证</a>
              </p>
              <br>
              <p class="no">没有收到邮件？</p>
              <p class="no">1.电子邮件偶尔会有延时状况，请耐心等待
                <br>2.尝试到垃圾邮件里找找看
              </p>
            </div>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>绑定邮箱：</dt>
        <dd>
          {{ email }}
          <span class="status">
            <i></i>
            已绑定
            <a href="javascript:;" @click="set_email = !set_email">更改邮箱</a>
            <setting-email v-show="set_email"></setting-email>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>账号注销：</dt>
        <dd class="destroy">
          <br>
          <p>
            请发邮件至 :
            <a href="mailto:798218157@qq.com">798218157@qq.com</a>
          </p>
          <br>
          <p>邮件内请说明 :</p>
          <p>1. 登陆账号所使用的手机号或邮箱</p>
          <p>2. 账号内的重要资产</p>
          <p>3. 账号相关的商城订单</p>
          <p>4. 简要说要注销原因</p>
          <br>
          <p>我们将在 1～3 个工作日内通过邮箱联系您，请您耐心等待！</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import setting_email from "./setting_email.vue";

export default {
  name: "setting-secure",
  data() {
    return {
      modifyPasswd: false,
      set_email: false,
      to_emial: false,
      email: "" //"23892789@qq.com"
    };
  },
  components: {
    "setting-email": setting_email
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      var vm = this;
      vm.$http.get(this.GLOBAL.baseUrl + "/user_safe", { credentials: true })
        .then(
          response => {
            if (response.body.status == 200) {
              this.email = response.body.user.email;
            } else {
              this.$message({
                message: response.body.message,
                type: "error"
              });
            }
          },
          response => {}
        );
    },
    send_email() {
      var vm = this;
      vm.$http.get(this.GLOBAL.baseUrl + "/reset_mail", { credentials: true })
        .then(
          response => {
            if (response.body.status === 200) {
              this.to_emial = true;
            } else {
              this.$message({
                message: response.body.message,
                type: "error"
              });
            }
          },
          response => {}
        );
    }
  }
};
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

    .set-mail {
        padding-top: 20px;

        .to_email {
            color: #ffa800;
            display: inline;
        }

        .no {
            font-size: 12px;
        }
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
      background: url(http://css.mafengwo.net/images/isettings/i_pw.png)
        no-repeat;
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
      background: url(http://css.mafengwo.net/images/isettings/i_btns4.png) -72px -1px
        no-repeat;
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
