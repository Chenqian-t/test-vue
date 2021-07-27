<template>
  <div class="about">
    <button @click="decrement">-</button>
    <h1>{{count}}</h1>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState} from 'vuex';
export default Vue.extend({
  name:'About',
  computed: {
    ...mapState(['count']),
  },
  methods: {
    decrement(){
      this.$store.commit('decrement');
    },
    increment(){
      this.$store.commit('increment');
    },
  }
})
</script>