<script setup lang="ts">
import { ref } from 'vue'

defineOptions({name: 'DemoCalendar'})

const startOrEnd = ref('start')
const setStartOrEnd = () => {
  if (startOrEnd.value == 'start') {
    startOrEnd.value = 'end'
  } else {
    startOrEnd.value = 'start'
  }
}
</script>

<template>
  <el-button @click="setStartOrEnd">click</el-button>
  <div :style="{ display: 'flex', 'justify-content': startOrEnd }">
    <CalendarSample />
  </div>
</template>

<style lang="scss" scoped></style>
