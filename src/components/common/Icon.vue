<template>
  <i
    :class="['icon', iconClass, customClass]"
    :style="{ color, fontSize: size }"
    aria-hidden="true"
  ></i>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  iconClass: string; // 例如 'fa-solid fa-star'
  color?: string;
  size?: string | number;
  class?: string;
}>();

const customClass = computed(() => props.class);
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
