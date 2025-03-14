<script setup lang="ts">
import { onMounted, ref } from 'vue'

const dh = ref(0)
const dm = ref(0)
const ds = ref(0)

onMounted(() => {
  const time = new Date()
  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()
  dh.value = h + m / 60 + s / 3600
  dm.value = m + s / 60
  ds.value = s
})
</script>

<template>
  <div class="clock" :style="`--dh: ${dh}; --dm: ${dm}; --ds: ${ds}`">
    <div class="clock-pane">
      <div v-for="num in 12" :key="num" class="num" :style="`--i: ${num}`">{{ num }}</div>
    </div>
    <div class="hour"></div>
    <div class="min"></div>
    <div class="sec"></div>
  </div>
</template>

<style lang="scss" scoped>
.clock {
  width: 380px;
  height: 380px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 20px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  --step: 60s;
  // background: conic-gradient(#333 0 15deg, #cddc39 0deg 30deg);
  // background: repeating-conic-gradient(#333 0 15deg, #cddc39 0deg 30deg);
  // background: repeating-conic-gradient(#333 0 1deg, #cddc39 0deg 30deg);
  //   background: repeating-conic-gradient(from -0.5deg, #333 0 1deg, transparent 0deg 30deg),
  //     repeating-conic-gradient(from -0.5deg, #ccc 0 1deg, transparent 0deg 6deg);
  //   border-radius: 50%;
  //   -webkit-mask: radial-gradient(transparent 145px, red 0);
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: repeating-conic-gradient(from -0.5deg, #333 0 1deg, transparent 0deg 30deg),
      repeating-conic-gradient(from -0.5deg, #ccc 0 1deg, transparent 0deg 6deg);
    border-radius: 50%;
    -webkit-mask: radial-gradient(transparent 145px, red 0);
  }
}
.clock-pane {
  width: 250px;
  height: 250px;
  position: absolute;
}
.num {
  position: absolute;
  offset-path: path(
    'M250 125c0 69.036-55.964 125-125 125S0 194.036 0 125 55.964 0 125 0s125 55.964 125 125z'
  );
  offset-rotate: 0deg;
  //   offset-distance: 100%;
  offset-distance: calc((var(--i) * 30 / 360) * 100% - 25%);
}
.hour {
  position: absolute;
  width: 4px;
  height: 60px;
  background-color: #333;
  transform-origin: center bottom;
  transform: translateY(-50%) rotate(0);
  animation: clock calc(var(--step) * 60 * 12) infinite linear;
  animation-delay: calc(-1 * var(--step) * var(--dh) * 60);
}
.min {
  position: absolute;
  width: 3px;
  height: 90px;
  background-color: #333;
  transform-origin: center bottom;
  transform: translateY(-50%) rotate(0);
  animation: clock calc(var(--step) * 60) infinite linear;
  animation-delay: calc(-1 * var(--step) * var(--dm));
}
.sec {
  position: absolute;
  width: 2px;
  height: 110px;
  background-color: red;
  transform-origin: center bottom;
  transform: translateY(-50%) rotate(0);
  animation: clock var(--step) infinite steps(60);
  animation-delay: calc(-1 * var(--step) * var(--ds) / 60);
  &::after {
    content: '';
    width: 14px;
    height: 14px;
    border: 3px solid #333;
    position: absolute;
    left: 50%;
    bottom: 0;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, 50%);
  }
}

@keyframes clock {
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>
