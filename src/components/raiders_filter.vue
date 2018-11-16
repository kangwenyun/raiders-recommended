<template>
  <div class="raiders_head">
    <div class="left">
         <a :href="raiders_url" target="_blank">
            <img :src="img_url" :href="raiders_url" target="_blank"/>
         </a>
    </div>
    <div class="right">
        <dl>
            <dt>
                <a :href="raiders_url" target="_blank">{{ title }}</a>
            </dt>
            <dd>
                <a :href="raiders_url" target="_blank">{{ abstract }}</a>
            </dd>
        </dl>
        <div class="tn-extra">
            <span class="tn-ding">
                {{ ding }}<a class="btn-ding" :href="ding_url" target="_blank"></a>
            </span>
            <span class="tn-place">
                <i></i>
                <a :href="place_url" target="_blank">{{ place }}</a>，by
            </span>
            <span class="tn-user">
                <a :href="user_url" target="_blank">
                    <img :src="user_img"/>
                    {{ user_name }}
                </a>
            </span>
            <span class="tn-nums">
                <i></i>{{ nums }}
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'raiders_filter',
  props: ['data'],
  data() {
    return {
        raiders_url: this.data.raiders_url,
        title: this.data.title,
        img_url: this.data.img_url,
        abstract: this.data.abstract,
        ding: this.data.ding,
        ding_url: this.data.ding_url,
        place_url: this.data.place_url,
        place: this.data.place,
        user_url: this.data.user_url,
        user_img: this.data.user_img,
        user_name: this.data.user_name,
        nums: this.data.nums
    }
  },
  watch: {
      raiders_url(newVal) {
        this.$emit('update', newVal)
      },
      title(newVal) {
        this.$emit('update', newVal)
      },
      img_url(newVal) {
        this.$emit('update', newVal)
      },
      abstract(newVal) {
        this.$emit('update', newVal)
      },
      ding(newVal) {
        this.$emit('update', newVal)
      },
      ding_url(newVal) {
        this.$emit('update', newVal)
      },
      place_url(newVal) {
        this.$emit('update', newVal)
      },
      place(newVal) {
        this.$emit('update', newVal)
      },
      user_url(newVal) {
        this.$emit('update', newVal)
      },
      user_img(newVal) {
        this.$emit('update', newVal)
      },
      user_name(newVal) {
        this.$emit('update', newVal)
      },
      nums(newVal) {
        this.$emit('update', newVal)
      }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>