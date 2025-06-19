<template>
  <div class="circles-grid">
    <div
      v-for="n in 30"
      :key="n"
      class="circle"
      @click.stop="toggleStamp(n - 1)"
    >
      <p v-if="!stamped[n - 1]">{{ n }}</p>
      <i
        v-else
        class="fa-solid fa-certificate stamp-icon"
        aria-hidden="true"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const stamped = ref(Array(30).fill(false));
function toggleStamp(idx: number) {
  stamped.value[idx] = !stamped.value[idx];
}
</script>

<style scoped>
.circles-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 12px;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #90caf9;
  border: 2px dashed #85aed8;
  box-shadow: 0 1px 4px #1976d233;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin: 0;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
}
.circle:hover {
  background: #64b5f6;
}
.circle p {
  margin: 0;
  color: #035bb4cc;
}
.stamp-icon {
  color: #e53935;
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px #0003);
  /* 讓印章有點浮起的感覺 */
  pointer-events: none;
}
</style>
