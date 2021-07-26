<template>
  <div class="home">
    <!-- <HelloWorld :msg="msg" :src="src" /> -->
    <AsyncTest />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld/index.vue";
import AsyncTest from "@/components/AsyncTest/index.vue";
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
    AsyncTest,
  },
  async mounted() {
    let ret = await User.userinfo();
    if (ret.errcode === 0) this.msg = ret.data;

    let { errcode, message, data } = await User.getimg();
    if (errcode === 0) this.src = data;

    
  },
});
</script>
