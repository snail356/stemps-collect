<template>
  <div
    class="card-container"
    @mouseenter="onMouseEnter"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div class="card-flip-area left" @click="flipLeft"></div>
    <div class="card-flip-area right" @click="flipRight"></div>
    <div :class="['card', { flipped }]" :style="cardStyle">
      <div class="card-face card-front">
        <slot name="front">卡片正面</slot>
      </div>
      <div class="card-face card-back">
        <slot name="back">卡片背面</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const flipped = ref(false);
const cardStyle = ref({});
const isHovering = ref(false);

function flipLeft() {
  flipped.value = false;
}
function flipRight() {
  flipped.value = true;
}

function onMouseEnter() {
  isHovering.value = false;
  cardStyle.value = {
    transform: `perspective(1000px) rotateY(${
      flipped.value ? 180 : 0
    }deg) rotateX(0deg) rotateY(0deg)`,
    transition: "transform 0.5s cubic-bezier(0.77,0,0.175,1), box-shadow 0.3s",
  };
}
function onMouseMove(e: MouseEvent) {
  if (!isHovering.value) isHovering.value = true;
  const container = e.currentTarget as HTMLElement;
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 3; // 幅度從 10 改成 3
  const rotateY = ((x - centerX) / centerX) * -3; // 幅度從 10 改成 3
  cardStyle.value = {
    transform: `perspective(1000px) rotateY(${
      flipped.value ? 180 : 0
    }deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: "none",
  };
}
function onMouseLeave() {
  isHovering.value = false;
  cardStyle.value = {
    transform: `perspective(1000px) rotateY(${
      flipped.value ? 180 : 0
    }deg) rotateX(0deg) rotateY(0deg)`,
    transition: "transform 0.5s cubic-bezier(0.77,0,0.175,1), box-shadow 0.3s",
  };
}
</script>

<style scoped>
.card-container {
  perspective: 1000px;
  display: inline-block;
  position: relative;
}
.card-flip-area {
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;
  z-index: 10; /* 提高層級，確保可點擊 */
  cursor: pointer;
  pointer-events: auto;
}
.card-flip-area.left {
  left: 0;
}
.card-flip-area.right {
  right: 0;
}
.card {
  width: 310px;
  height: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 24px #1976d244, 0 2px 8px #0001;
  background: #fff;
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), box-shadow 0.3s;
  transform-style: preserve-3d;
  position: relative;
  /* 不要設 z-index 或設比 flip-area 低 */
  pointer-events: none;
}
.card.flipped {
  transform: rotateY(180deg);
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 500;
  background: #fff;
  pointer-events: auto; /* 讓卡片內容還是可以互動（例如蓋章） */
}
.card-front {
}
.card-back {
  background: #1976d2;
  color: #fff;
  transform: rotateY(180deg);
}
</style>
