<script setup lang="ts" name="LayoutBtnConfig">
import { computed, type Ref } from 'vue'
import { useSettingStore } from '@/stores/setting'
import type { ILayoutBtnConfig } from '@/stores/types'
import { GlobalBtnList } from '@/constants/global'

const settingStore = useSettingStore()

const btnConfig: Ref<ILayoutBtnConfig> = computed(
  (): ILayoutBtnConfig => settingStore.layoutBtnConfig
)

const handleOnChange = (id: string, val: boolean) => {
  settingStore.setLayoutBtnConfig({ [id]: val })
}
</script>

<template>
  <div class="flex flex-justify-between">
    <el-check-tag
      v-for="btn in GlobalBtnList"
      :key="btn.id"
      :checked="btnConfig[btn.id]"
      @change="(status: boolean) => handleOnChange(btn.id, status)"
    >
      <svg-icon :name="btn.icon" :type="btn.iconType"></svg-icon>
    </el-check-tag>
  </div>
</template>

<style lang="scss" scoped></style>
@/constants/config