<template>
    <div class="setting-info">
      <el-form ref="form" :model="info" label-width="80px">
        <el-form-item label="昵称">
          <el-input v-model="info.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="info.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="保密"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="居住城市">
          <el-input v-model="info.city"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="info.birthday" format="yyyy 年 MM 月 dd 日"></el-date-picker>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input
            type="textarea"
            :rows="5"
            v-model="info.introduct">
          </el-input>
        </el-form-item>
        <el-form-item class="save">
          <el-button type="primary" @click="save(info)">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'setting-info',
  data() {
    return{
      account: 'pu971954596@qq.com',
      info:{
        name: '',
        sex: '',
        city: '',
        birthday: '',
        introduct: ''
      }
    };
  },
  created() {
    this.load()
  },
  methods:{
    load(){
      var vm = this
      vm.$http.get(this.GLOBAL.baseUrl + '/option', {credentials: true})
        .then((response) => {
            if (response.body.status){
              var item = response.body.user
              this.info.name = item.name,
              this.info.sex = item.sex,
              this.info.city = item.city,
              this.info.birthday = item.birthday,
              this.info.introduct = item.introduction
            } else {
              this.$message({
                message: response.body.message,
                type: 'error'
              })
            }
      },(response) => {});
    },
    save(form) {
      // this.$refs[form].validate((valid, {}) => {
        // if (valid) {
          var vm = this
          var item = {
            name: this.info.name,
            sex: this.info.sex,
            city: this.info.city,
            birthday: this.info.birthday,
            introduction: this.info.introduct
          }
          vm.$http.post(this.GLOBAL.baseUrl + '/option', item)
              .then((response) => {
                if (response.body.status == 200){
                    console.log('setting success')
                    this.load()
                } else {
                    this.$message({
                    message: response.body.message,
                    type: 'error'
                    })
                }
          },(response) => {
          });
          // } else {
          //     console.log('error submit!!');
          //     return false;
          // }
          // });
    }
  }
}
</script>

<style scope>
.setting-info {
    height: 16px;
    display: inline-block;
    margin-left: 8px;
    position: relative;
    vertical-align: middle;
}

.setting-info .el-input{
  width: 300px !important;
}

.setting-info .el-radio__input.is-checked .el-radio__inner {
  border-color: #ff9d00;
  background: #ff9d00;
}

.setting-info .is-checked .el-radio__label{
  color: #ff9d00 !important;
}

.setting-info .el-textarea{
  width: 500px !important;
}

.setting-info .save{
  margin-left: 175px;
}

.setting-info .save button{
  background-color: #ff9d00;
  border-color: #ff9d00;
}
</style>
