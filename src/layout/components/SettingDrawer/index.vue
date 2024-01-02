<script setup lang="ts" name="SettingDrawer">

import { ref } from 'vue'
import { useEventBus, settingShowKey } from '@/util/eventBus'
import ThemeConfig from './ThemeConfig.vue'
import LayoutBtnConfig from './LayoutBtnConfig.vue'

const visible = ref(false)
const bus = useEventBus(settingShowKey)
bus.on((_show) => visible.value = !!_show)

</script>

<template>

  <el-drawer v-model="visible" :show-close="false" :with-header="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">{{ $t('setting.settings') }}</h4>
      <el-button type="text" @click="close"><el-icon class="el-icon--left"><CircleCloseFilled /></el-icon></el-button>
    </template>

    <el-divider content-position="center">全局主题</el-divider>
    <ThemeConfig />

    <el-divider content-position="center">按钮配置</el-divider>
    <LayoutBtnConfig />
  </el-drawer>
</template>

<style lang="scss" scoped></style>