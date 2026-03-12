<script lang="ts">
export default {
  name: 'MenuButton',
  components: {}
}
</script>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    isActive: boolean
  }>(),
  { isActive: false }
)
</script>

<template>
  <button :class="['menubutton', isActive ? 'active' : '']" type="button">
    <span></span>
  </button>
</template>

<style scoped>
.menubutton {
  position: relative;
  width: 3rem;
  height: 3rem;
  margin-left: 3rem;
  border: none;
  cursor: pointer;
  z-index: 1000;
}
.menubutton:hover {
  opacity: 0.7;
}
.menubutton span {
  width: 2rem;
  height: 4px;
  display: block;
  position: absolute;
  top: 18px;
  left: 7px;
  border-radius: 7px;
  transition-duration: 0.5s;
  transition-timing-function: swing;
  background-color: var(--color-background-mute);
}
.menubutton span:before {
  width: 1rem;
  height: 4px;
  content: '';
  position: absolute;
  right: 0;
  top: -9px;
  border-radius: 7px;
  transition-duration: 0.5s;
  transition-timing-function: swing;
  background-color: var(--color-background-mute);
}
.menubutton span:after {
  width: 1rem;
  height: 4px;
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  border-radius: 7px;
  transition-duration: 0.5s;
  transition-timing-function: swing;
  background-color: var(--color-background-mute);
}
@media screen and (max-width: 768px) {
  .menubutton {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
    margin: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 30px;
    background: var(--el-color-primary);
    transition: background-color 0.2s;
  }
  .menubutton span {
    top: 30px;
    left: 20px;
    background: var(--color-background-mute);
  }
  .menubutton span:before,
  .menubutton span:after {
    background: var(--color-background-mute);
  }

  /* .menubutton.active span {
    width: 0;
  }
  .menubutton.active span:before {
    width: 2rem;
    left: 0;
    transform: translateY(9px) rotate(45deg);
  }
  .menubutton.active span:after {
    width: 2rem;
    transform: translateY(-9px) rotate(-45deg);
  } */

  .menubutton.active span {
    transform: translateY(9px) rotate(45deg);
  }
  .menubutton.active span:before {
    /* width: 0; */
    left: 8px;
    transform: translateY(0px) rotate(-90deg);
  }
  .menubutton.active span:after {
    /* width: 2rem; */
    left: 8px;
    transform: translateY(0px) rotate(-90deg);
  }
}
</style>
