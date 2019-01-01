<template>
    <div class="raiders">
        <raiders-select class="rselect"></raiders-select>
    </div>
</template>

<script>

import raiders_select from './raiders_select.vue'

export default {
  name: 'raiders',
  components: {
    "raiders-select": raiders_select
  },
  data() {
    return{
    };
  }
}
</script>

<style scoped>
.rselect{
    width: 400px;
    position: inherit;
    margin-top: 60px;
}
</style>