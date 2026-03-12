<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'

/**
 * 作为一个公用组件的思考：
 * 1. 组件可以提供哪些参数？ 输入：placeholder，modelValue；输出：update:modelValue。 还可以增加 height width 等。
 * 2. 组件的哪些部分依赖三方？ 依赖elementPlus 的 el-input 组件。 依赖elementPlus 的 el-icon 组件。 公共样式的主题色和背景色
 * 3. 如果抽离为公共组件，需要封装哪些样式？ 封装搜索框的样式、聚焦状态的样式。 封装聚焦状态的样式。 封装icon的样式。
 */


const props = defineProps<{
  placeholder?: string
  modelValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isActiveInput = ref(false)
const inputRef = ref()

watch(
  () => isActiveInput.value,
  (val) => {
    if (!val) {
      emit('update:modelValue', '')
    }
    if (val) {
      inputRef.value?.focus()
    }
  }
)

const handleInput = (value: string) => {
  emit('update:modelValue', value)
}

const handleClickSearch = () => {
  if (isActiveInput.value) {
    emit('update:modelValue', '')
    return
  }
  isActiveInput.value = true
}
const handleFocus = () => {
  isActiveInput.value = true
}

const handleBlur = () => {
  isActiveInput.value = false
  emit('update:modelValue', '')
}
const handleChange = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    class="search-wrapper flex justify-center items-center"
    :class="{ 'is-focus': isActiveInput }"
  >
    <div class="search-icon-wrapper flex justify-center items-center" :class="{ 'icon-only': !isActiveInput }" @click="handleClickSearch">
      <Search style="width: 15px; height: 15px" />
    </div>
    <div class="search-input" :style="{ width: isActiveInput ? '240px' : '0px' }">
      <el-input
        ref="inputRef"
        :model-value="modelValue"
        class="search-input-inner"
        :class="{ 'search-input-active': !isActiveInput }"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<style>
.search-input-active .el-input__wrapper {
  width: 0px;
  padding: 1px 0;
}
.search-input-active .el-input__suffix {
  width: 0px;
}
.search-input-inner .el-input__wrapper {
  box-shadow: none;
}
.search-input-inner .el-input__wrapper.is-focus {
  box-shadow: none;
}
</style>
<style lang="scss" scoped>
.search-wrapper.is-focus {
  width: 256px;
  // box-shadow: 0 0 0 1px var(--el-color-primary);
  box-shadow: 0 0 0 1px var(--el-color-primary), 0 2px 4px rgba(0, 0, 0, 0.1);
  // transition: all 0.6s delay 0.6s;
}
.search-wrapper {
  position: relative;
  height: 32px;
  width: 32px; // 修改为仅图标宽度
  border-radius: 32px;
  overflow: hidden;
  /* 初始状态无阴影 */
  box-shadow: none;
  /* 设置过渡效果 */
  transition: all 0.6s;
  .search-icon-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: var(--color-background);
    z-index: 99;
    cursor: pointer;
    transition: all 0.6s;
    &.icon-only {
      // background: var(--color-background-soft); // 未激活时的背景色
      &:hover {
        // background: var(--color-background-mute); // 悬停效果
        background: var(--color-background-soft);
      }
    }
  }

  .search-input {
    position: absolute;
    right: 16px;
    top: 0;
    background: var(--color-background);
    border-radius: 32px;
    transition: all 0.6s;
  }
  &.is-focus .search-input {
    opacity: 1;
  }

  .search-input-inner {
    --el-input-border-radius: 32px 0 0 32px;
  }
}
</style>
