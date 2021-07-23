<template>
  <div class="home">
    <HelloWorld :msg="msg" :src="src" :bb='false' abc='ac' label="Username:" v-model="username" required placeholder="Enter your username"/>
    <SlotTest url="/about">
      <h1>slottest</h1>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
      <template #footer="{a}">
        <h1>{{a}}</h1>
      </template>
    </SlotTest>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld/index.vue";
import SlotTest from "@/components/SlotTest/index.vue";
import { User } from "@/request";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      msg: null,
      src: "",
      username: '123'
    };
  },
  components: {
    HelloWorld,
    SlotTest,
  },
  async mounted() {
    let ret = await User.userinfo();
    if (ret.errcode === 0) this.msg = ret.data;

    let { errcode, message, data } = await User.getimg();
    if (errcode === 0) this.src = data;

    
  },
});
</script>
