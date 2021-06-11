<template>
  <div class="home">
    <HelloWorld :msg="msg" :src="src" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { User } from "@/request";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      msg: {},
      src: "",
    };
  },
  components: {
    HelloWorld,
  },
  async mounted() {
    let ret = await User.userinfo();
    if (ret.errcode === 0) this.msg = ret.data;

    let { errcode, message, data } = await User.getimg();
    if (errcode === 0) this.src = data;

    
  },
});
</script>
