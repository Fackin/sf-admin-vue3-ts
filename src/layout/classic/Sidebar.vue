<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Expand,
  Fold,
} from '@element-plus/icons-vue'
import { useLayoutStore } from '@/stores/layout'
import { storeToRefs } from 'pinia'

const store = useLayoutStore()
const { isCollapse } = storeToRefs(store)

// const isCollapse = ref(true)

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
    
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
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
  background-color: #545c64;
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
.classic-sidebar {
  :deep(.el-sub-menu__title) {
   height: 40px;
   line-height: 40px;
  }
}
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
