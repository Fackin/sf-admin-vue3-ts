<script lang="ts" setup>
import { computed } from 'vue'
import {
  Expand,
  Fold,
} from '@element-plus/icons-vue'
import { useLayoutStore } from '@/stores/layout'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import SubMenu from './SubMenu.vue'
import { useRoute } from 'vue-router'

const layoutStore = useLayoutStore()
const { isCollapse } = storeToRefs(layoutStore)

const authStore = useAuthStore()

const menus = computed(() => authStore.authMenus)

// const isCollapse = ref(true)
const route = useRoute()
const activeMenu = computed(() => {
  return route.path
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<script lang="ts">
export default {
  name: 'ClassicSidebar'
}
</script>
<template>
  <div class="dark:classic-sidebar-dark classic-sidebar">
    <h5 class="logo-wrapper">
      <div class="logo">SF</div>
      <Transition name="fade-left">
        <div class="logo-text" v-show="!isCollapse">Shadowfiend</div>
      </Transition>
    </h5>
    
    <!-- 
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff" -->
    <el-menu
      :default-active="activeMenu"
      background-color="#060d37"
      text-color="#fff"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <SubMenu v-for="route in menus" :key="route.path" :item="route" />
    </el-menu>


    <div class="collapse-icon-wrapper">
      <el-icon class="collapse-icon" v-if="isCollapse" @click="isCollapse = false"><Expand color="#fff" size="24"/></el-icon>
      <el-icon class="collapse-icon" v-else @click="isCollapse = true"><Fold color="#fff" size="24" /></el-icon>
    </div>
  </div>

</template>
<style lang="scss" scoped>
// :root {  
//   --el-menu-item-height: 40px;
// }
.classic-sidebar-dark {
  background-color: #000;
}
.classic-sidebar {
  // width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #060d37;
  // overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo-wrapper {
  padding: 12px;
  display: flex;
  flex-direction: row;
}
.logo {
  width: 40px;
  height: 40px;
  background-color: #2e9763;
  font-size: 34px;
  line-height: 38px;
  border-radius: 6px;
  font-family: Impact;
  text-align: center;
  z-index: 1;
}
.logo-text {
  font-size: 22px;
  margin-left: 8px;
  color: #fff;
}
.el-menu {
  // width: 100%;
  flex: 1;
  overflow: auto;
  border: none;
}
// .el-menu .el-menu-item {
//   height: 40px;
//   line-height: 40px;
// }
// .classic-sidebar {
//   :deep(.el-sub-menu__title) {
  //  height: 40px;
  //  line-height: 40px;
//   }
// }
.collapse-icon-wrapper {
  text-align: right;
  padding: 22px;
  height: 64px;
  // line-height: 64px;
  font-size: 20px;
}
.collapse-icon {
  cursor: pointer;
}


.fade-left-enter-active {
  // transition: all 0.3s ease-out;
  // opacity: 1;
  // transform: none
  transition: all 0.2s ease-in;
}

.fade-left-leave-active {
  transition: all 0.2s ease-out;
  // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  // opacity: 1;
}

.fade-left-enter-from,
.fade-left-leave-to {
  transform: translateX(20px);
  // transform: translate3d(-100%, 0, 0);
  opacity: 0;
}

</style>
