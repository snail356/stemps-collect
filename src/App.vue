<template>
  <Card>
    <template #front> 這是卡片正面 </template>
    <template #back> 這是卡片背面 </template>
  </Card>
</template>

<script setup lang="ts">
import NotebookTabs from "./components/NotebookTabs.vue";
import Card from "./components/Card/index.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
