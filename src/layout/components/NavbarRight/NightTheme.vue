<script setup lang="ts" name="NightTheme">
import { ref } from 'vue'
import { toggleDark } from '../../composables/index'
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()

let isNightTheme = ref(settingStore.themeConfig.isDark)

const handleToggleDark = () => {
  isNightTheme.value = !isNightTheme.value
  settingStore.setThemeConfig({ isDark: isNightTheme.value })
  toggleDark()
}
</script>

<template>
  <div
    class="h-full w-full grid grid-items-center grid-justify-center"
    style="padding: 0 8px"
    @click="handleToggleDark"
  >
    <transition name="el-zoom-in-top">
      <el-icon v-if="isNightTheme"><MoonNight /></el-icon>
      <el-icon v-else><Sunny /></el-icon>
    </transition>
  </div>
</template>

<style lang="scss" scoped></style>
