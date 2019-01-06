<template>
  <div class="article_detail">
      <article-head></article-head>
  </div>
</template>

<script>

import article_head from './article_head.vue'

export default {
  name: 'article_detail',
  components: {
    "article-head": article_head
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article_detail{
  margin-top: 70px;
}
</style>
