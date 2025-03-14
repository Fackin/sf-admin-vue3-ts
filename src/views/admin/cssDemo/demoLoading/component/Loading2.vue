<script setup lang="ts"></script>

<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 45px;
  aspect-ratio: 1;
  --c: conic-gradient(from -90deg,#000 90deg,#0000 0);
  background: var(--c), var(--c);
  background-size: 40% 40%;
  animation: l19 1s infinite alternate;
}
@keyframes l19 {
 0%,
 10%  {background-position: 0 0,0            calc(100%/3)}
 50%  {background-position: 0 0,calc(100%/3) calc(100%/3)}
 90%,
 100% {background-position: 0 0,calc(100%/3) 0}
}
</style>
