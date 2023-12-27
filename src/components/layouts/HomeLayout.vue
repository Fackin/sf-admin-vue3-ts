<script setup lang="ts">
// import { RouterView } from 'vue-router'
</script>

<template>
  <div class="home-layout">
    <slot></slot>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home-layout {
    display: flex;
    place-items: center;
    min-height: 100vh;
  }
}
</style>
