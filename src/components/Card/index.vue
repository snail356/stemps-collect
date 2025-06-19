<template>
  <Card>
    <template #front>
      <Content />
    </template>
    <template #back> 這是卡片背面 </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import Content from "./Content.vue";
</script>
