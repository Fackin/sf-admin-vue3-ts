<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import { ElMessage } from 'element-plus'
import type { LocalType } from '@/lang/types'

const globalStore = useGlobalStore()

const handleLanguageChange = (lang: LocalType) => {
  globalStore.changeLanguage(lang)
  if (lang == 'en') {
    ElMessage.success('Switch Language Successfully!')
  } else {
    ElMessage.success('切换语言成功！')
  }
}
</script>

<template>
  <el-dropdown class="h-full w-full" trigger="click" @command="handleLanguageChange">
    <div class="h-full w-full flex flex-items-center flex-justify-center">
      <svg-icon name="iconoir:language" type="ify" color="#fff"></svg-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="globalStore.language === 'zh-cn'" command="zh-cn">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="globalStore.language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="scss" scoped></style>
