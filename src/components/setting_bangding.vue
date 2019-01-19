<template>
    <div class="setting-bangding">
      <div class="bangding bind-connect">
        <div class="weixin">
            <img src="http://images.mafengwo.net/images/footer/qr_mfw2.png" width="126" height="123" alt="">
            <p class="t1">加马蜂窝为微信好友</p>
            <p class="t2">或使用微信搜索<br>马蜂窝微信号</p>
            <p class="t3">mafengwo2006</p>
        </div>
        <div class="title"><span>好东西就要与朋友们分享，</span> {{ share_percent }} <span>的蜂蜂正在将精彩内容分享给朋友们</span></div>
        <dl class="clearfix bind-item">
            <dt><i class="weibo"></i></dt>
            <dd>
              <h3>我的新浪微博账户<span>未绑定</span><br><strong>{{ weibo_percent }}</strong>的蜂蜂正在分享</h3>
              <div class="btns">
                  <a href="/setting/sns/auth/?platform=weibo" class="btn1 btn-bind">现在绑定</a>
              </div>
            </dd>
        </dl>
        <dl class="clearfix bind-item">
            <dt><i class="qzone"></i></dt>
            <dd>
              <h3>我的QQ空间账户<span>未绑定</span><br><strong>{{ qq_percent }}</strong>的蜂蜂正在分享</h3>
              <div class="btns">
                <a href="/setting/sns/auth/?platform=qq" class="btn1 btn-bind">现在绑定</a>
              </div>
          </dd>
        </dl>
    </div>
    </div>
</template>

<script>
export default {
  name: 'setting-bangding',
  data() {
    return{
        share_percent: '97%',
        weibo_percent: '',
        qq_percent: ''
    };
  },
  methods:{
  }
}
</script>

<style scope>
.bangding {
    position: relative;
}

.bangding .weixin {
    width: 132px;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #fff;
    box-shadow: 0 2px 6px #ccc;
    border: 1px solid #ccc;
    color: #999;
}

.bangding .weixin img {
    border: 3px solid #ffa800;
}

.bangding .t1 {
    font-size: 14px;
    padding: 10px 0 15px;
}

.bangding .t2 {
    font-size: 12px;
    line-height: 1.6em;
}

.bangding .t3 {
    font-size: 16px;
    padding-top: 8px;
}

.bangding .title {
    font-size: 14px;
    color: #999;
    padding: 10px 0 20px;
}

.bangding dl {
    width: 470px;
    border-bottom: 1px dashed #d7d7d7;
    padding: 25px 0 40px;
}

.bangding dt {
    width: 57px;
    float: left;
    padding-top: 4px;
}

.bangding .content dt {
    width: 85px;
    float: left;
    padding: 6px 10px 0 0;
    text-align: right;
    color: #a1a1a1;
    font-size: 16px;
}

.bangding dt i {
    width: 37px;
    height: 37px;
    display: block;
    background: url(https://css.mafengwo.net/images/isettings/i_connect.png) no-repeat;
    border-radius: 4px;
}

.bangding i.weibo {
    background-position: 0 0;
}

.bangding dd {
    width: 385px;
    float: left;
}

.bangding h3 {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5em;
    margin: 0;
}

.bangding h3 span {
    color: #444;
    margin-left: 6px;
}

.bangding h3 strong {
    font-size: 18px;
    font-weight: normal;
    margin-right: 6px;
}

.bangding .btns {
    padding: 22px 0 0;
}

.bangding .btn1 {
    background-color: #ffa800;
}

.bangding .btns a {
    width: 145px;
    height: 36px;
    display: inline-block;
    line-height: 36px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
}

.bangding dl:last-child {
    border: none;
}

.bangding dt {
    width: 57px;
    float: left;
    padding-top: 4px;
}

.bangding dt i.qzone {
    background-position: 0 -37px;
}

.bangding dd {
    width: 385px;
    float: left;
}

</style>
