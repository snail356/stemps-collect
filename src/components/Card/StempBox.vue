<template>
  <div class="stemp-box">
    <div
      v-for="icon in stempBoxStore.icons"
      :key="icon"
      class="icon-item"
      :class="{ selected: stempBoxStore.selectedIcon === icon }"
      @click="stempBoxStore.setSelectedIcon(icon)"
    >
      <Icon
        :iconClass="icon"
        :color="stempBoxStore.selectedIcon === icon ? '#1976d2' : '#888'"
        size="1.6rem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStempBoxStore } from "@/stores/stempBoxStore";
import Icon from "@/components/common/Icon.vue";

const stempBoxStore = useStempBoxStore();
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
  background: #cf7917;
}
</style>
