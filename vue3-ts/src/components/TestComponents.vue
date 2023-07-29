/* eslint-disable */
<template>
  <div>
    {{ username }}
  </div>
  <button @click="changeName"> ChangeUserName</button>
  <h2> 제품명 : {{ name }}, 가격: {{ price }}</h2>
  <button @click="changeProduct"> changeProduct</button>
  <div>
    <input type="text" v-model="username">>
  </div>
</template>

<script lang="ts">

import {reactive, ref, toRefs} from "vue";

export default {
  name: "TestComponents",
  setup() {

    const username = ref("JSP2");

    const state = reactive({
      name: 'TV',
      price: 120,
    })

    function changeName() {
      username.value = "Messi";
    }

    function changeProduct() {
      state.name = "세탁기";
      state.price = 200;
    }

    return {
      username, changeName,
      ...toRefs(state)
      ,changeProduct
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
