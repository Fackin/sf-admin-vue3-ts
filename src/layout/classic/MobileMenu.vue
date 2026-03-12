<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import SubMenu from './SubMenu.vue'
import MenuButton from './MenuButton.vue'
import { useRoute, type RouteRecordRaw } from 'vue-router'

const authStore = useAuthStore()

const menus = computed(() => authStore.authMenus)

const isOpenMenu = ref(false)

const route = useRoute()
const activeMenu = computed(() => {
  return route.path
})

const handleClose = () => {
  isOpenMenu.value = false
}
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  handleClose()
}
</script>
<script lang="ts">
export default {
  name: 'MobileMenu'
}
</script>
<template>
  <!-- <div v-if="isOpenMenu" class="dark:mobile-menu-dark mobile-menu" >
    <div style="width: 100%; height: 104px;" @click="handleClose"></div>
    <div class="menu-box">
      <el-menu
        :default-active="activeMenu"
        background-color="#060d37"
        text-color="#fff"
        :collapse="false"
        @select="handleSelect"
      >
        <SubMenu v-for="route in menus" :key="route.path" :item="route as RouteRecordRaw"></SubMenu>
      </el-menu>
    </div>
  </div> -->
  <el-drawer
    v-model="isOpenMenu"
    :show-close="false"
    :with-header="false"
    direction="btt"
    size="80%"
    :modal="true"
    :z-index="99"
    :append-to-body="false"
    modal-class="drawer-modal"
    body-class="drawer-body"
    custom-class="drawer-custom"
    style="height: calc(100vh - 104px); padding: 0"
  >
    <div class="menu-box">
      <el-menu
        :default-active="activeMenu"
        background-color="#060d37"
        text-color="#fff"
        :collapse="false"
        @select="handleSelect"
      >
        <SubMenu v-for="route in menus" :key="route.path" :item="route as RouteRecordRaw"></SubMenu>
      </el-menu>
    </div>
  </el-drawer>

  <MenuButton :isActive="isOpenMenu" @click="() => (isOpenMenu = !isOpenMenu)" />
</template>
<style>
.drawer-custom .el-drawer__body {
  padding: 0px;
}
</style>
<style lang="scss" scoped>
// :root {
//   --el-menu-item-height: 40px;
// }
.mobile-menu-dark {
  background-color: #000;
}

.mobile-menu {
  --el-drawer-padding-primary: 0;
  // width: 100%;
  // height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  // background-color: #060d37;
  // overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-box {
  // height: calc(100% - 104px);
  height: 100%;
  overflow-y: auto;
  background-color: #060d37;
  padding: 20px 0;
  border-radius: 0;
}
.el-menu {
  // width: 100%;
  flex: 1;
  overflow: auto;
  border: none;
}
</style>
