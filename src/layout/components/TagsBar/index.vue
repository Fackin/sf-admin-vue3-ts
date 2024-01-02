<script lang="ts" setup>
import { FullScreen } from '@element-plus/icons-vue'
// import { ref } from 'vue'
import { toggleFullscreen } from '../../composables/index'
import TagsView from './TagsView.vue'

defineOptions({ name: 'TagsBar' })
const props = defineProps(['el'])
// console.log(props)
const { toggle } = toggleFullscreen(props.el)

const handleToggleFullscreen = () => {
    toggle()
}
</script>
<script lang="ts">
export default {
  name: 'NavbarRight'
}
</script>
<template>
  <div class="tagsbar-wrapper">
    <TagsView class="tagsbar-box" />
    <div class="tagsbar-operate" @click="handleToggleFullscreen">
        <el-icon><FullScreen /></el-icon>
    </div>
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
.tagsbar-operate {
  width: 40px;
  text-align: center;
  margin-bottom: -4px;
}
</style>
