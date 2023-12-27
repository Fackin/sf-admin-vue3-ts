<script setup lang="ts">
// import { ref } from 'vue'
// import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'
// import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import type { LocalType } from '@/lang/types'


const globalStore = useGlobalStore()
// const { locale } = useI18n()

const handleLanguageChange = (lang: LocalType) => {
  // locale.value = lang
  globalStore.changeLanguage(lang)
  if (lang == 'en') {
      ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    // duration: 0,
  })
    ElMessage.success('Switch Language Successfully!')
  } else {
    console.log('3')
    ElMessage.success('切换语言成功！')
  }
}
</script>

<template>
  <el-dropdown class="h-full flex flex-items-center" trigger="click" @command="handleLanguageChange">
    <div  class="h-full flex flex-items-center">
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
<style lang="scss" scoped>
</style>
