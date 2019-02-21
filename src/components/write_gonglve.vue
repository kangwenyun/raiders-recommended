<template>
  <div class="write_gonglve">
    <el-tabs>
      <el-tab-pane label="发表新游记/攻略" name="gonglve"></el-tab-pane>
    </el-tabs>
    <div class="edit">
      <el-input v-model="title" placeholder="请在这里输入标题" suffix-icon="el-icon-edit" class="title"></el-input>
      <div ref="editor" style="text-align:left"></div>
      <div class="btns">
        <div>
          <el-checkbox v-model="agree" @change="agree_change(agree)">我已阅读并同意</el-checkbox>
          <a href="https://www.mafengwo.cn/s/rules.html" title="《马蜂窝游记协议》" target="_blank">《马蜂窝游记协议》</a>
          <div v-show="tips" class="span">请先阅读</div>
        </div>
        <input class="btn_submit" value="发表" type="submit" @click="publish">
      </div>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "write_gonglve",
  data() {
    return {
      title: "",
      editorContent: "",
      agree: false,
      tips: false
    };
  },
  methods: {
    agree_change(key){
      if(!key){
        this.tips = true
      }else{
        this.tips = false
      }
    },
    publish() {
      if(!this.agree){
        this.tips = true
      }else{
        this.tips = false
        var vm = this
        var item = {
          title: this.title,
          content: this.editorContent
        }
        vm.$http.post(this.GLOBAL.baseUrl + '/write_gonglve', item)
                .then((response) => {
                  if (response.body.status == 200){
                      console.log('writting success')
                      this.load()
                  } else {
                      this.$message({
                        message: response.body.message,
                        type: 'error'
                      })
                  }
                },(response) => {
                });
      }
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.zIndex = 1
    editor.customConfig.uploadImgShowBase64 = true
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  }
};
</script>

<style lang="less">
.write_gonglve {
  margin: 70px auto;
  width: 80%;

  .is-top {
    font-size: 18px;
    font-weight: 600;
    color: #ff9d00;
    margin-top: 10px;
  }

  .edit {

    .title {
      margin: 0 0 10px;
    }

    .toolbar {
      border: 1px solid #ccc;
    }

    .text {
      border: 1px solid #ccc;
      height: 400px;
    }

    .btns {
      padding: 10px 0 30px 0;
      width: 665px;

      input {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
        padding: 6px 20px;
        border: 0 none;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
      }

      .btn_submit {
        background-color: #ff9e00;
        color: #fff;
      }

      .span {
        color: red;
      }
    }

    input {
      position: relative;
      top: 2px;
      margin: 0 5px 0 0;
      padding: 0;
    }

    a {
      color: #666;
      display: inline;
    }
  }

  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }

  .el-checkbox__label {
    padding-left: 0px;
  }
}
</style>