<!-- filepath: c:\Users\NT-PC-024\Desktop\sideproject\my-vue3-app\src\components\NotebookTabs.vue -->
<template>
  <div
    :class="['notebook-card', { 'card-active': isCardActive }]"
    @transitionend="onTransitionEnd"
  >
    <div class="tabs">
      <div
        v-for="(tab, idx) in tabs"
        :key="tab"
        :class="['tab', { active: idx === activeTab }]"
        @click="onTabClick(idx)"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab-content">
      <slot :name="tabs[activeTab]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tabs = ["筆記一", "筆記二", "筆記三"];
const activeTab = ref(0);
const isCardActive = ref(false);

function onTabClick(idx: number) {
  activeTab.value = idx;
  isCardActive.value = false;
  // 觸發浮起動畫
  requestAnimationFrame(() => {
    isCardActive.value = true;
  });
}
function onTransitionEnd() {
  // 動畫結束後可根據需求重設狀態
}
</script>

<style scoped>
.notebook-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  background: #fff;
  padding: 24px 16px 16px 16px;
  max-width: 500px;
  margin: 32px auto;
  transition: box-shadow 0.3s cubic-bezier(0.4, 2, 0.6, 1),
    transform 0.3s cubic-bezier(0.4, 2, 0.6, 1);
}

.notebook-card.card-active {
  box-shadow: 0 8px 32px #1976d244, 0 2px 8px #0001;
  transform: translateY(-8px) scale(1.03);
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  position: relative;
  top: -24px;
}

.tab {
  padding: 8px 24px;
  border-radius: 8px 8px 0 0;
  background: #f5f5f5;
  cursor: pointer;
  border: 1px solid #ddd;
  border-bottom: none;
  font-weight: 500;
  transition: background 0.2s;
}

.tab.active {
  background: #fff;
  border-bottom: 2px solid #fff;
  color: #1976d2;
  font-weight: bold;
  z-index: 1;
}
.tab:not(.active):hover {
  background: #e0e0e0;
}
.tab-content {
  min-height: 80px;
}
</style>
