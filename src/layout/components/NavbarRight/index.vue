<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { computed, type Ref, ref, watch } from 'vue'
import { useSettingStore } from '@/stores/setting'
import SettingBar from './SettingBar.vue'
import type { ILayoutBtnConfig, GlobalBtnItem } from '@/stores/types'
import { GlobalBtnList } from '@/constants/global'
import { Search } from '@element-plus/icons-vue'
import SearchInput from '@/components/modules/SearchInput.vue'

const settingStore = useSettingStore()

const search = ref('')
const isActiveInput = ref(true)
const inputRef = ref()

const btnConfig: Ref<ILayoutBtnConfig> = computed(
  (): ILayoutBtnConfig => settingStore.layoutBtnConfig
)

const cList = computed((): GlobalBtnItem[] =>
  GlobalBtnList.filter((item) => btnConfig.value[item.id])
)
watch(
  () => search.value,
  (val) => {
    console.log(val, 'search')
  }
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
    <!-- 搜索 -->
    <div class="flex justify-center items-center">
      <!-- <div
        v-if="!isActiveInput"
        class="flex justify-center items-center"
        style="width: 32px; height: 32px; border-radius: 100%; background: #999; z-index: 99"
        @click="() => (isActiveInput = true)"
      >
        <Search style="width: 24px; height: 24px" />
      </div>
      <div class="search-input" :style="{ width: isActiveInput ? '240px' : '0px' }">
        <el-input
          ref="inputRef"
          v-model="search"
          class="search-input-inner"
          :class="{ 'search-input-active': !isActiveInput }"
          style="border-radius: 100%"
          placeholder="Please Input"
          :suffix-icon="Search"
          @focus="() => (isActiveInput = true)"
          @blur="() => (isActiveInput = false)"
        />
      </div> -->
      <SearchInput v-model="search" placeholder="Please Input" />
    </div>
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

<style>
/* .search-input-active .el-input__wrapper {
  width: 0px;
  padding: 0;
}
.search-input-active .el-input__suffix {
  width: 0px;
} */
</style>
<style lang="scss" scoped>
.search-input {
  transition: all 0.6s;
}
.search-input-inner {
  --el-input-border-radius: 32px;
}

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