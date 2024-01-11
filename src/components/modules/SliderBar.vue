<script setup lang="ts" name="SliderBar">
interface IProps {
  debounce: number | string
}
const props = withDefaults(defineProps<IProps>(), {
  debounce: 5
})
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
