<script setup lang="ts" name="SubMenu">
import { useRouter, type RouteRecordRaw } from 'vue-router'
import { computed } from 'vue'
import { isExternal } from '@/util/validate'
import { useAuthStore } from '@/stores/auth'

interface Props {
  item: RouteRecordRaw
}

const props = defineProps<Props>()

// 子菜单
const itemChildren = computed((): RouteRecordRaw[] => props.item.children || [])
console.log(itemChildren)
// 子菜单长度
const itemChildrenLength = computed((): number => itemChildren.value?.length || 0)
// 唯一的子菜单
const theOnlyOneChild = computed((): RouteRecordRaw | null => {
  if (itemChildrenLength.value > 1) {
    return null
  } else if (itemChildrenLength.value === 1) {
    return itemChildren.value[0]
  } else {
    return { ...props.item }
  }
})

const authStore = useAuthStore()

const router = useRouter()
const handleClickMenu = (item: RouteRecordRaw) => {
  // 跳转外部链接
  if (isExternal(item.path)) return (window as any).open(item.path, '_blank')
  // authStore.addTagsMenus(item)
  router.push(item.path)
}
</script>

<template>
  <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
    <el-menu-item :index="theOnlyOneChild.path" @click="handleClickMenu(theOnlyOneChild)">
      <!-- <el-icon><document /></el-icon> -->
      <!-- <el-icon> -->
        <svg-icon v-if="theOnlyOneChild.meta?.icon" :fullName="theOnlyOneChild.meta.icon" />
      <!-- </el-icon> -->
      <span>{{ theOnlyOneChild.name }}</span>
    </el-menu-item>
  </template>
  <el-sub-menu v-else :index="props.item.path">
    <template #title>
      <!-- <el-icon><location /></el-icon> -->
      <!-- <el-icon> -->
        <svg-icon v-if="props.item.meta?.icon" :fullName="props.item.meta.icon" />
      <!-- </el-icon> -->
      <span>{{ props.item.name }}</span>
    </template>
    <template v-if="props.item.children">
      <sub-menu v-for="child in props.item.children" :key="child.path" :item="child"></sub-menu>
    </template>
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>
