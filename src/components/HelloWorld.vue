<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js App</h1>
    <p>This is a simple component to get you started.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
});
</script>

<style scoped>
.hello {
  text-align: center;
  margin-top: 20px;
}
</style>