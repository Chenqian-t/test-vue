<template>
  <div class="about">
    <h1>This is {{what}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'About',
  props: {
    what: String,
  },
  mounted(){
    console.log(this);
    
  },
})
</script>