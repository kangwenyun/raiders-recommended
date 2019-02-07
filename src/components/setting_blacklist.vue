<template>
  <div class="setting-blacklist">
    <dl class="col-search">
      <dt>
        <el-autocomplete
          v-model="find_user"
          placeholder="输入用户昵称搜索指定用户"
          suffix-icon="el-icon-search"
          class="inp-t"
          :fetch-suggestions="querySearchAsync"
          @select="selectBlacklist"
        ></el-autocomplete>
      </dt>
      <dd>
        <ul class="search-list">
        </ul> 
        <div class="action"><a class="btn" href="javascript:;">加入黑名单</a></div>
      </dd>
    </dl>
    <dl class="col-list">
      <dt>我的黑名单</dt>
      <dd>
        <ul>
          <li v-for="item in blackusers" :key="item.index">{{ item.value }}</li>
        </ul>
      </dd>
    </dl>
    <div class="tips">＊你将不会收到此黑名单中用户发来的私信</div>
  </div>
</template>

<script>
export default {
  name: 'setting-blacklist',
  data() {
    return{
      users: [],
      blackusers: [],
      find_user: '',
      timeout:  null
    };
  },
  methods:{
    loadAll() {
      return [
        { "index": 1, "value": "三全鲜食（北新泾店）"},
        { "index": 2, "value": "Hot honey 首尔炸鸡（仙霞路）"},
        { "index": 3, "value": "新旺角茶餐厅"},
        { "index": 4, "value": "泷千家(天山西路店)"},
        { "index": 5, "value": "胖仙女纸杯蛋糕（上海凌空店）"},
        { "index": 6, "value": "贡茶"},
        { "index": 7, "value": "豪大大香鸡排超级奶爸"},
        { "index": 8, "value": "茶芝兰（奶茶，手抓饼）"},
        { "index": 9, "value": "十二泷町"},
        { "index": 10, "value": "星移浓缩咖啡"}
      ];
    },
    querySearchAsync(queryString, cb) {
      var users = this.users;
      var results = queryString ? users.filter(this.createStateFilter(queryString)) : users;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.user.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    selectBlacklist(item) {
      this.blackusers.push(item)
    }
  },
  mounted() {
    this.users = this.loadAll();
    console.log(this.users)
  }
};
</script>

<style lang="less">
.setting-blacklist {
  width: 584px;
  margin-left: 20px;
  background-color: #efefef;
  padding: 20px;
  margin: 0 -18px;

  .col-search {
    width: 308px;
    margin-right: 10px;
  }

  dl {
    float: left;
    width: 258px;
    height: 370px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    clear: none;
    padding: 0;
  }

  dt {
    height: 30px;
    float: none;
    padding: 0;
    margin: 9px 9px 0;
    width: auto;
    position: relative;
  }

  .inp-t {
    width: 290px;

    input {
      border-color: #ff9d00;
    }

    i {
      color: #ff9d00;
    }
  }


  .search-list {
    height: 260px;
    overflow: auto;
    position: relative;
  }

  .action {
    margin-top: 10px;
    text-align: center;
  }

  .btn {
    display: inline-block;
    height: 30px;
    padding: 0 25px;
    line-height: 30px;
    background-color: #ff9d00;
    color: #fff;
    font-size: 14px;
    border-radius: 2px;
  }

  .col-list {
    dt {
      margin: 9px 20px 0;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      text-align: right;
      color: #a1a1a1;
    }

    ul {
      height: 310px;
      overflow: auto;
      position: relative;
      
      li {
        
      }
    }
  }
  .tips {
    clear: both;
    text-align: right;
    font-size: 12px;
    color: #ffa800;
    margin-right: 5px;
  }
}
</style>