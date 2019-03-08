<template>
  <div class="setting-email">
    <el-steps :active="active_index" finish-status="success">
        <el-step title="输入邮箱"></el-step>
        <el-step title="前往邮箱验证"></el-step>
        <el-step title="完成绑定"></el-step>
    </el-steps>
    <div class="detail">
        <div v-if="active_index == 0">
            <div class="set-mail">
                <dl class="clearfix">
                    <dt>新的邮箱：</dt>
                    <dd><input type="text" id="email" value=""></dd>
                </dl>
                <div class="tips">我们将向该邮箱发送验证邮件，点击该邮件中的链接完成验证。</div>
                <div class="btns">
                    <a class="btn-sub" href="javascript:;" @click="send_email">发送验证邮件</a>
                </div>
            </div>
        </div>
        <div v-else-if="active_index == 1">
            <div class="set-mail">
                <p>邮件已发送到您的邮箱：<strong>{{ email }}</strong></p>
                <p>请点击邮箱中的验证链接完成验证  <a class="to_email" target="_blank" href="http://mail.qq.com">前往邮箱验证</a></p>
                <br/>
                <p class="no">没有收到邮件？</p>
                <p class="no">1.电子邮件偶尔会有延时状况，请耐心等待<br>2.尝试到垃圾邮件里找找看</p>
            </div>
        </div>
        <div v-else>
            <div class="set-mail">
                <p class="t-tit"><i></i>完成绑定邮箱</p>
                <p>绑定的邮箱为：<strong>{{ email }}</strong><br>今后您可使用该邮箱登录</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting-email',
  data() {
    return{
        active_index: 0,
        new_email: '',
        email: '798218157@qq.com',
    };
  },
  methods:{
      send_email() {

      }
  }
}
</script>

<style lang="less" scoped>
.setting-email {
    margin: 30px 0;

    .set-mail {
        padding-top: 20px;

        .to_email {
            color: #ffa800;
            display: inline;
        }

        .t-tit {
            font-size: 18px;
            padding-bottom: 25px;

            i {
                width: 18px;
                height: 20px;
                display: inline-block;
                background: url(http://css.mafengwo.net/images/isettings/i_btns4.png) -72px -1px no-repeat;
                margin: 0 6px 0 0;
                vertical-align: middle;
            }
        }

        .no {
            font-size: 12px;
        }
    }

    dl {
        padding-bottom: 15px;
        height: 0;
    }

    dt {
        width: 100px;
    }

    dd {
        width: 490px;
        margin-left: 95px;
        margin-top: -40px;

        input {
            width: 310px;
            border: 1px solid #d3d3d3;
            height: 18px;
            padding: 6px 8px;
            line-height: 18px;
            font-size: 14px;
            color: #999;
            outline: none;
            transition: box-shadow 0.25s linear 0s;
            border-radius: 3px;
        }
    }

    .tips {
        padding: 0 0 25px 95px;
        font-size: 12px;
        color: #999;
    }

    .btns {
        padding: 10px 0 0 95px;
    }

    .btn-sub {
        width: 176px;
        height: 36px;
        line-height: 36px;
        background-color: #ffa800;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border: none;
        border-radius: 5px;
        margin-left: 150px;
    }
}
</style>
