<script setup lang="ts" name="SettingBar">
import { useEventBus, settingShowKey } from '@/util/eventBus'

const bus = useEventBus(settingShowKey)

</script>

<template>
  <div class="h-full w-full flex flex-items-center flex-justify-center" @click="() => bus.emit(true)">
    <svg-icon name="more" type="svg" color="#fff" />
  </div>
</template>

<style lang="scss" scoped></style>
