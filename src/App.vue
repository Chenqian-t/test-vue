<template>
  <div id="app">
    <div id="nav" v-if="$route.name !== 'NotFound'">
      <router-link :to="{name: 'Home'}">a</router-link> |
      <router-link to="/about/123">b</router-link>
    </div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  data(){
    return {
      transitionName: 'fade',
    }
  },
  mounted(){
    console.log(this.$route);
    
  },
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
