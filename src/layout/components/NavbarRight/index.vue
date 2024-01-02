<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { computed, type Ref } from 'vue'
import { useSettingStore } from '@/stores/setting'
import SettingBar from './SettingBar.vue'
import type { ILayoutBtnConfig, GlobalBtnItem } from '@/stores/types'
import { GlobalBtnList } from '@/constants/global'

const settingStore = useSettingStore()

const btnConfig: Ref<ILayoutBtnConfig> = computed(
  (): ILayoutBtnConfig => settingStore.layoutBtnConfig
)

const cList = computed((): GlobalBtnItem[] =>
  GlobalBtnList.filter((item) => btnConfig.value[item.id])
)
</script>
<script lang="ts">
import GlobalLanguage from './GlobalLanguage.vue'
import NightTheme from './NightTheme.vue'
import FullScreenBar from './FullScreen.vue'
import SearchBar from './SearchBar.vue'
import MessageBar from './MessageBar.vue'
export default {
  name: 'NavbarRight',
  components: {
    SearchBar,
    FullScreenBar,
    MessageBar,
    GlobalLanguage,
    NightTheme
  }
}
</script>
<template>
  <div class="navbar-right-wrapper">
    <!-- 自定义控制 -->
    <el-tooltip
      v-for="btn in cList"
      :key="btn.id"
      effect="dark"
      :content="btn.name"
      placement="bottom"
    >
      <div class="navbar-right-item">
        <component :is="btn.component"></component>
      </div>
    </el-tooltip>
    <!-- 用户头像 -->
    <div class="navbar-right-item">
      <el-avatar size="small" :icon="UserFilled" />
    </div>
    <!-- 个人中心 -->
    <!-- 退出登录 -->
    <!-- 设置 -->
    <div class="navbar-right-item">
      <SettingBar />
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
  padding: 0;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    background-color: var(--el-color-primary);
  }
  &.no-hover:hover {
    background-color: transparent;
  }
}
</style>
@/constants/config