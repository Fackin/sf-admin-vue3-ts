<script lang="ts" setup>
// import { ref } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import NavbarRight from '../components/NavbarRight.vue'

const store = useLayoutStore()
</script>
<script lang="ts">
export default {
  name: 'ClassicHeader'
}
</script>
<template>
  <div class="classic-header">
    <div>
      <Transition name="fade-left">
        <div class="logo-text" v-show="store.isCollapse">Shadowfiend</div>
      </Transition>
    </div>
    <NavbarRight />
  </div>
</template>
<style lang="scss" scoped>
.classic-header {
  // width: 100%;
  height: 64px;
  background-color: #545c64;
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

</style>
