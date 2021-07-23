<template>
  <a :href="url" class="nav-link">
    <slot>{{a}}</slot>
    <slot name="header">{{a}}</slot>
    <slot name="footer" :a="a">{{a}}</slot>
  </a>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "SlotTest",
  props: {
    url: String,
  },
  data() {
    return {
			a: 123,
		};
  },
  methods: {},
});
</script>