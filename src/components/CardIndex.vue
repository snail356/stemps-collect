<template>
  <div class="center-box">
    <Card>
      <template #front>這是卡片正面</template>
      <template #back>這是卡片背面</template>
    </Card>
    <StempBox />
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/Card/index.vue";
import StempBox from "@/components/Card/stempBox.vue";
</script>

<style scoped>
.center-box {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
</style>
