<script lang="ts" setup>
import { FullScreen, ChatDotRound, Sunny, MoonNight, UserFilled, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { toggleDark, toggleFullscreen } from '../composables/index'
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'
import { useSettingStore } from '@/stores/setting'
import GlobalLanguage from './GlobalLanguage.vue'


const globalStore = useGlobalStore()
const settingStore = useSettingStore()

let isNightTheme = ref(settingStore.themeConfig.isDark)

const handleToggleDark = () => {
    isNightTheme.value = !isNightTheme.value
    settingStore.setThemeConfig({isDark: isNightTheme.value})
    toggleDark()
}

const { toggle } = toggleFullscreen(undefined)
const handleToggleFullscreen = () => {
    toggle()
}
const { locale } = useI18n()

const handleLanguageChange = (lang: string) => {
  locale.value = lang
  globalStore.changeLanguage(lang)
  // if (lang == 'en') {
  //   ElMessage.success('Switch Language Successfully!')
  // } else {
  //   ElMessage.success('切换语言成功！')
  // }
}
</script>
<script lang="ts">
export default {
  name: 'NavbarRight'
}
</script>
<template>
  <div class="navbar-right-wrapper">
    <!--  -->
    <!-- 全屏显示 -->
    <div class="navbar-right-item" @click="handleToggleFullscreen">
      <el-icon color="#fff"><FullScreen /></el-icon>
    </div>
    <!-- 消息中心 -->
    <div class="navbar-right-item">
      <el-icon color="#fff"><ChatDotRound /></el-icon>
    </div>
    <!-- 国际化语言 -->
    <div class="navbar-right-item">
      <GlobalLanguage />
    </div>
    <!-- <el-dropdown trigger="click" @command="handleLanguageChange">
      <div class="navbar-right-item">
        <svg-icon name="iconoir:language" type="ify"></svg-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="globalStore.language === 'zh-cn'" command="zh-cn"> 中文 </el-dropdown-item>
          <el-dropdown-item :disabled="globalStore.language === 'en'" command="en"> English </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown> -->
    <!-- 暗黑模式 -->
    <!-- <div class="navbar-right-item no-hover">
      <el-switch
        v-model="isNightTheme"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="MoonNight"
      ></el-switch>
    </div> -->
    <div class="navbar-right-item" @click="handleToggleDark">
      <transition name="el-zoom-in-top">
        <!-- <Transition mode="out-in"> -->
        <!-- </Transition> -->
        <el-icon v-if="isNightTheme"><MoonNight /></el-icon>
      <!-- </transition>
      <transition name="el-zoom-in-bottom"> -->
        <el-icon v-else><Sunny /></el-icon>
        <!-- <Transition mode="in-out"> -->

        <!-- </Transition> -->
      </transition>
    </div>
    <!-- 用户头像 -->
    <div class="navbar-right-item">
        <el-avatar size="small" :icon="UserFilled" />
    </div>
        <!-- 个人中心 -->
        <!-- 退出登录 -->
    <!-- 设置 -->
    <div class="navbar-right-item">
      <!-- <el-icon><Setting /></el-icon> -->
      <svg-icon name="more" type="svg" color="#fff"/>
      <!-- <svg-icon name="Setting" type="ep" color="#fff"/> -->
      <!-- <svg-icon name="bug" color="#fff"/> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar-right-wrapper {
  height: 100%;
  display: flex;
  flex-direction: row;
}
.navbar-right-item {
  padding: 0 8px;
  display: grid;
  align-items: center;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: var(--el-color-primary);
  }
  &.no-hover:hover {
    background-color: transparent;
  }
}
</style>
