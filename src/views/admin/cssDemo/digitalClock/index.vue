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
  <p>1、使用counter-reset 为content赋值</p>
  <p>2、css @property</p>
  <p>3、animation</p>
  <!-- <span style="--num: 0"></span> -->
  <div class="digital-clock" :style="`--dh: ${dh}; --dm: ${dm}; --ds: ${ds}`">
    <span class="hour"></span>
    <span class="split">:</span>
    <span class="min"></span>
    <span class="split">:</span>
    <span class="sec"></span>
  </div>
</template>

<style scoped>
/* @property --h {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
@keyframes num {
  to {
    --h: 10
  }
} */
/* span::after {
  transition: 1s --h;
} */
/* span::after {
  counter-reset: num var(--h);
  content: counter(num);
  animation: num 1s infinite steps(10);
} */
/* span:hover::after {
  --h: 59;
} */
.digital-clock {
  font-size: 128px;
  font-weight: 700;
}
@property --h {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
@property --m {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
@property --s {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
@keyframes hour {
  to {
    --h: 24
  }
}
@keyframes minitus {
  to {
    --m: 60
  }
}
@keyframes seconds {
  to {
    --s: 60
  }
}
.hour::after{
  counter-reset: hour var(--h);
  content: counter(hour, decimal-leading-zero);
  animation: hour calc(60s * 60 * 24) infinite steps(24);
  animation-delay: calc( -60s * 60 * var(--dh) );
}
.min::after{
  counter-reset: minitus var(--m);
  content: counter(minitus, decimal-leading-zero);
  animation: minitus calc(60s * 60) infinite steps(60);
  animation-delay: calc( -60s * var(--dm) );
}
.sec::after{
  counter-reset: seconds var(--s);
  content: counter(seconds, decimal-leading-zero);
  animation: seconds 60s infinite steps(60);
  animation-delay: calc( -1s * var(--ds) );
}

@keyframes shark {
  0%, 100%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
}
.split{
  animation: shark 1s step-end infinite;
}
</style>
