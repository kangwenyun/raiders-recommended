<template>
    <div class="setting-nest">
      <p>我的域名：<span>{{ address }}</span>
      </p>
    </div>
</template>

<script>
export default {
  name: 'setting-nest',
  data() {
    return{
      address: '/u/83528961.html'
    };
  },
  created() {
    this.get_own();
  },
  methods:{
    get_own() {
      var vm = this;
      vm.$http.get(this.GLOBAL.baseUrl + "/user_url", { credentials: true })
        .then(response => {
            if (response.body.status === 200) {
              this.address = response.body.user.wdo;
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
}
</script>

<style scope>

</style>
