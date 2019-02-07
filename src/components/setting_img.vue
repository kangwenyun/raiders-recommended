<template>
    <div class="setting-img">
      <el-upload
        class="avatar-uploader"
        :action="upload_url"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :with-credentials='true'>
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <div slot="tip" class="el-upload__tip">只能上传jpg文件，且不超过2M</div>
      </el-upload>
    </div>
</template>

<script>
export default {
  name: 'setting-img',
  data() {
    return{
      upload_url: this.GLOBAL.baseUrl + '/user_img_up',
      imageUrl: '' //https://p3-q.mafengwo.net/s12/M00/41/7E/wKgED1vqorqAH93BAAMvIC6AvhM62.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90'
    };
  },
  created() {
    this.load()
  },
  methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      load(){
        var vm = this
        vm.$http.get(this.GLOBAL.baseUrl + '/user_img')
          .then((response) => {
            if (response.body.status === 200){
              this.imageUrl = response.body.user.imageUrl
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

<style scope>
.setting-img .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .setting-img .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .setting-img .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .setting-img .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
