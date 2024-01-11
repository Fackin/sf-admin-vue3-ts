<script lang="ts" setup>
import TagsView from './TagsView.vue'
import MainFullScreen from './FullScreen.vue'

defineOptions({ name: 'TagsBar' })
const props = defineProps(['el'])

</script>
<template>
  <div class="tagsbar-wrapper">
    <TagsView class="tagsbar-box" />
    <MainFullScreen :el="props.el"/>
  </div>
</template>
<style lang="scss" scoped>
.tagsbar-wrapper {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  // overflow-x: hidden;
  // border-bottom: 1px solid var(--color-border);
}
.tagsbar-box {
    flex: 1;
}
.fullscreen {
  position: fixed;
  top: 5px;
  right: 5px;
}
</style>
