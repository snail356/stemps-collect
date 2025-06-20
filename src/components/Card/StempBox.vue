<template>
  <div class="stemp-box">
    <div
      v-for="(icon, idx) in icons"
      :key="icon"
      class="icon-item"
      :class="{ selected: selectedIdx === idx }"
      @click="selectIcon(idx)"
    >
      <Icon
        :iconClass="icon"
        :color="selectedIdx === idx ? '#1976d2' : '#888'"
        size="1.6rem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "@/components/common/Icon.vue";
const icons = ["fa-solid fa-star", "fa-solid fa-heart", "fa-solid fa-lemon"];
const selectedIdx = ref(0);

function selectIcon(idx: number) {
  selectedIdx.value = idx;
}
</script>

<style scoped>
.stemp-box {
  display: flex;
  align-items: center;
  background: #f5f7fa;
  border-radius: 24px;
  padding: 8px 20px;
  box-shadow: 0 2px 8px #0001;
  width: fit-content;
  min-width: 180px;
  height: 48px;
}
.icon-item {
  width: 40px;
  height: 40px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.icon-item.selected {
  background: #1976d222;
}
.icon-item:hover {
  background: #e3f2fd;
}
</style>
