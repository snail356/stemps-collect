<template>
  <i
    :class="['stamp-icon', iconClass, customClass]"
    :style="stampStyle"
    aria-hidden="true"
  ></i>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  iconClass: string;
  color?: string;
  size?: string | number;
  class?: string;
}>();

const customClass = computed(() => props.class);

const stampStyle = computed(() => ({
  color: props.color || "#1976d2",
  fontSize:
    typeof props.size === "number" ? props.size + "px" : props.size || "2rem",
}));
</script>

<style scoped>
.stamp-icon {
  /* 立體浮雕陰影效果 */
  filter: drop-shadow(0 2px 6px #1976d233);
  text-shadow: 0 2px 4px #1976d288, 0 1px 0 #fff;
  transition: filter 0.2s, text-shadow 0.2s;
}
</style>
