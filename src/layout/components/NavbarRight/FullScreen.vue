<script setup lang="ts" name="FullScreen">
import { toggleFullscreen } from '../../composables/index'

const { toggle } = toggleFullscreen(undefined)

const handleToggleFullscreen = () => {
  toggle()
}
</script>

<template>
  <div
    class="h-full w-full flex flex-items-center flex-justify-center"
    @click="handleToggleFullscreen"
  >
    <el-icon color="#fff"><FullScreen /></el-icon>
  </div>
</template>

<style lang="scss" scoped></style>
