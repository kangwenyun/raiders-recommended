<template>
  <div class="setting-money">
    <div class="honey">
      蜂蜜余额
      <span>
        <i class="icon-honey"></i>
        <em>{{ honey }}</em>
      </span>
    </div>
    <div class="income">
      <el-menu
        default-active="1"
        mode="horizontal"
        class="income_t"
      >
        <el-menu-item index="1">蜂蜜明细</el-menu-item>
      </el-menu>
      <a href="http://www.mafengwo.cn/i/2947856.html" class="link">蜂蜜常见问题</a>
      <table>
        <tbody>
          <tr v-for="item in detail" :key="item.index">
            <td>{{ item.time }}</td>
            <td>
              <p title="签到获得蜂蜜奖励">签到获得蜂蜜奖励</p>
            </td>
            <td class="reward">
              蜂蜜：
              <span class="num" width="20">
                <em>+{{ item.num }}</em>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting-money",
  data() {
    return {
      honey: 31,
      detail: [
        // {'index': 1, 'time': '2019-01-28 13:43:22', 'num': 1},
        // {'index': 2, 'time': '2019-01-23 16:13:02', 'num': 1}
      ]
    };
  },
  created() {
    this.get_money();
  },
  methods:{
    get_money() {
      var vm = this;
      vm.$http.get(this.GLOBAL.baseUrl + "/user_wallet", { credentials: true })
        .then(response => {
            if (response.body.status === 200) {
              this.honey = response.body.user.honey;
              response.body.user.detail.forEach(element => {
                    var data = {
                      index: element.index, 
                      time: element.time,
                      num: element.num
                    }
                    this.detail.push(data)
                  }, this);
            } else { //401
              this.$message({
                message: response.body.message,
                type: "error"
              });
            }
          }
        );
    }
  }
};
</script>

<style lang="less">
.setting-money{
    position: relative;

  .honey {
    font-size: 18px;
    padding: 0 0 25px;
    margin-bottom: 15px;

    span {
      margin-left: 15px;
      color: #ff9d00;

      em {
        font-style: normal;
        font-size: 36px;
      }
    }

    .icon-honey {
      display: inline-block;
      margin-right: 10px;
      width: 15px;
      height: 18px;
      background: url(http://css.mafengwo.net/images/isettings/i_btns4.png) no-repeat 0 -40px;
      overflow: hidden;
    }
  }

  .income_t {
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 26px;

    .is-active {
      border-bottom: 2px solid #ff9d00;
      color: #ff9d00;
      font-size: 16px;
    }

  }

  .link {
    float: right;
    font-size: 12px;
    color: #ff9d00;
    line-height: 48px;
    margin-top: -30px;
  }

  table {
    margin-bottom: 30px;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  td {
    color: #666;
    text-align: left;
    line-height: 24px;
  }

  tbody td {
    padding: 10px 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .reward {
    text-align: right;
    color: #999;
  }

  .income .num {
    color: #666;
  }
}
</style>

