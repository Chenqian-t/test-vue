<template>
  <div>
    AsyncTest<br />
    <button @click="show = !show">Toggle render</button><br />
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
		<button @click="show = !show">Toggle show</button><br />
		<transition name="bounce">
			<p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
		</transition>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "AsyncTest",
  data() {
    return {
			show: true,
		};
  },
  methods: {},
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
p {
	width: 200px;
}
</style>