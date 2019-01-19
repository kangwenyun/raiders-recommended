<template>
  <div class="setting-secure">
    <div class="userpass">
      <dl>
        <dt>密码：</dt>
        <dd>
          <a href="javascript:;" class="set-pw-btn">修改密码</a>
          <!-- <div id="set-pw">
            <div class="ways">
              <a href="/setting/security/password/?by=mobile" class="byphone"><i></i><p>手机验证修改</p></a>
              <a href="javascript:;" class="bymail disable"><i></i><p>邮箱验证修改</p></a>
            </div>
          </div> -->
        </dd>
      </dl>
      <dl>
          <dt>绑定邮箱：</dt>
          <dd>
            <a href="/setting/security/email/">设置邮箱</a>
          </dd>
      </dl>
      <dl>
        <dt>绑定手机：</dt>
        <dd>
            188****7421<span class="status"><i></i>已绑定 <a style="margin-left: 15px;" href="/setting/security/mobile/?type=change">更改号码</a></span>
        </dd>
      </dl>
      <dl class="destroy_account">
        <dt class="expand"><a href="javascript:;">账号注销</a></dt>
        <dd>
            <p>&nbsp;</p>
            <p>请发邮件至 : <a href="mailto:mfwyouji@mafengwo.com">mfwyouji@mafengwo.com</a></p><br>
            <p>邮件内请说明 : </p>
            <p>1. 登陆账号所使用的手机号或邮箱</p>
            <p>2. 账号内的重要资产 </p>
            <p>3. 账号相关的商城订单 </p>
            <p>4. 简要说要注销原因</p><br>
            <p>我们将在 1～3 个工作日内通过邮箱联系您，请您耐心等待！</p>
        </dd>
      </dl>
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting-secure',
  data() {
    return{
    };
  },
  methods:{
  }
}
</script>

<style scope>
.userpass {
    width: 560px;
}

.userpass dl {
    clear: both;
    width: 560px;
    padding-bottom: 15px;
}

.userpass dt {
    width: 75px;
    float: left;
    padding: 4px 10px 0 0;
    text-align: right;
    font-size: 14px;
}

.userpass dd {
    width: 455px;
    float: left;
    line-height: 1.8em;
    color: #666;
}

.userpass a {
    font-size: 14px;
    color: #ffa800;
}


</style>
