<script setup lang="ts" name="index">
import { computed } from 'vue'
import { getBreadcrumbByRouteKey } from './utils'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const breadcrumbs = computed(() =>
  getBreadcrumbByRouteKey(route.name as string, authStore.authMenus, '').map((item) => ({
    ...item,
    label: item.name,
    options: item.children,
    hasChildren: item.children && item.children.length > 0
  }))
)

const handleCommand = (menu) => {
    console.log(menu)
    router.push(menu.path)
}
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">
      <el-dropdown v-if="item.hasChildren" @command="handleCommand">
        <span class="global-breadcrumb-label cursor-pointer">
          <svg-icon
            style="margin-right: 4px"
            size="16"
            v-if="item.meta?.icon"
            :fullName="item.meta.icon"
          />
          {{ item.label }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="menu in item.options" :key="menu.path" :command="menu">
              <svg-icon
                style="margin-right: 4px"
                size="16"
                v-if="menu.meta?.icon"
                :fullName="menu.meta.icon"
              />
              {{ menu.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div v-else class="global-breadcrumb-label">
        <svg-icon
          style="margin-right: 4px"
          size="16"
          v-if="item.meta?.icon"
          :fullName="item.meta.icon"
        />
        {{ item.label }}
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.global-breadcrumb-label {
  color: #fff;
}
</style>
