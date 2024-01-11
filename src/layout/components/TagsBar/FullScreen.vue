<script setup lang="ts" name="MainFullScreen">
import { toggleFullscreen } from '../../composables/index'

const props = defineProps(['el'])
const { toggle, isFullscreen } = toggleFullscreen(props.el)

const handleToggleFullscreen = () => {
  toggle()
}
</script>

<template>
  <div class="main-fullscreen" @click="handleToggleFullscreen">
    <svg-icon :name="isFullscreen ? `bx:exit-fullscreen` : `bx:fullscreen`" type="ify" size="20"></svg-icon>
  </div>
</template>

<style lang="scss" scoped>

.main-fullscreen {
  width: 40px;
  text-align: center;
  margin-bottom: -4px;
  cursor: pointer;
}
</style>
