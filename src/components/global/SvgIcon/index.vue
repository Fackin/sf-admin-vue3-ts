<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconType } from '../../types'

interface Props {
  name?: string
  color?: string
  type?: IconType
  fullName?: string
  class?: string
  size?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  // color: "#fff",
  type: 'svg',
  class: '',
  size: '14'
})

const iconName = computed((): string => {
  const cName = props.fullName ? props.fullName.split('@')[0] : props.name
  const cType = props.fullName ? props.fullName.split('@')[1] : props.type
  if (`${cType}` === 'svg') {
    return `#icon-${cName}`
  } else {
    return `${cName}`
  }
})
const refColor = computed((): string => `${props.color}`)
const refType = computed((): string => {
  return props.fullName ? props.fullName.split('@')[1] : props.type
})
const svgClass = computed((): string => {
  if (`${refType.value}` === 'svg') {
    return `svg-icon icon-${iconName.value} ${props.class}`
  } else {
    return `svg-icon ${props.class}`
  }
})

const svgSize = computed(() => (props.size ? `${props.size}` : '14'))
const svgWidth = computed(() => (props.size ? `${props.size}px` : '1em'))
const svgHeight = computed(() => (props.size ? `${props.size}px` : '1em'))
</script>
<template>
  <el-icon :size="svgSize" :class="svgClass" v-bind="$attrs" :color="refColor">
    <Icon v-if="refType == 'ify'" :class="svgClass" :icon="iconName" />
    <component  v-if="refType == 'ep'" :is="iconName" />
    <svg v-if="refType == 'svg'" aria-hidden="true" :width="svgWidth" :height="svgHeight">
      <use :xlink:href="iconName" :fill="refColor" />
    </svg>
  </el-icon>
</template>
<style lang="scss" scoped>
.svg-icon {
  //   width: 1em;
  //   height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  // vertical-align: text-top;
}
</style>
