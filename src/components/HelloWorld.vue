<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img :src="src">
    <h6>{{aa}}</h6>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: Object,
    src: String,
  },
  data(){
    return {
      aa: 'hehe',
    }
  },
});
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
