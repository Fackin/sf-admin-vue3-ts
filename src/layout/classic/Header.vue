<script lang="ts" setup>
// import { ref } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import { NavbarRight, Breadcrumb } from '../components'

const layoutStore = useLayoutStore()
</script>
<script lang="ts">
export default {
  name: 'ClassicHeader'
}
</script>
<template>
  <div class="classic-header">
    <div class="flex flex-items-center color-white">
      <Transition name="fade-left">
        <div class="logo-text flex flex-items-center" v-show="layoutStore.isCollapse">
          Shadowfiend 
          <el-divider style="border-color: #fff" direction="vertical" />
        </div>
      </Transition>
      <div class="overflow-box">
        <Breadcrumb />
      </div>
    </div>
    <NavbarRight />
  </div>
</template>
<style lang="scss" scoped>
.classic-header {
  // width: 100%;
  height: 64px;
  background-color: #060d37;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  // padding-right: 10px;
}

.logo-text {
  font-size: 22px;
  color: #fff;
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
  transform: translateX(-20px);
  // transform: translate3d(-100%, 0, 0);
  opacity: 0;
}

.overflow-box {
  overflow-x: auto;
}
</style>
