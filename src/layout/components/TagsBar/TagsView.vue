<script setup lang="ts" name="TagsView">
import { ref, getCurrentInstance, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { type RouteRecordRaw, useRouter, useRoute} from 'vue-router'

defineOptions({ name: 'TagsView' })

const authStore = useAuthStore()

// const list = [
//   {
//     name: '首页',
//     path: '/home',
//     id: 1,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   },
//   {
//     name: '工作台',
//     path: '/home',
//     id: 2,
//     icon: 'home'
//   },
//   {
//     name: '用户管理',
//     path: '/home',
//     id: 3,
//     icon: ''
//   },
//   {
//     name: '富文本',
//     path: '/home',
//     id: 4,
//     icon: 'Home'
//   },
//   {
//     name: '你好 world',
//     path: '/home',
//     id: 5,
//     icon: 'Home'
//   }
// ]

const currentTab = ref(1)

const router = useRouter()
const route = useRoute()

const isActive = (item: RouteRecordRaw) => {
  return route.path === item.path
}

const handleClickMenu = (item: RouteRecordRaw) => {
  // 跳转外部链接
  // if (isExternal(path)) return window.open(path, '_blank')
  // authStore.addTagsMenus(item)
  router.push(item.path)
}

// 右键菜单的 left
const menuLeft = ref(0)
// 右键菜单的 top
const menuTop = ref(0)
// 右键菜单是否展示
const menuVisible = ref(false)
// 右键选择的菜单tag
const selectedTag = ref<RouteRecordRaw>()
const instance = getCurrentInstance()

const openMenu = (tag: RouteRecordRaw, e: _MouseEvent) => {
  console.log(tag, e)
  const menuMinWidth = 105
  // 当前组件距离浏览左端的距离
  const offsetLeft = instance!.proxy!.$el.getBoundingClientRect().left
  // 当前组件宽度
  const offsetWidth = instance!.proxy!.$el.offsetWidth
  // 面板最大的左边距
  const maxLeft = offsetWidth - menuMinWidth
  // 面板距离指针的距离
  const left15 = e.clientX - offsetLeft + 15

  menuLeft.value = (left15 > maxLeft ? maxLeft : left15)
  menuTop.value = e.clientY
  menuVisible.value = true

  selectedTag.value = tag

}

const closeMenu = () => {
  menuVisible.value = false
}

watch(menuVisible, (value) => {
  value ? document.body.addEventListener('click', closeMenu) : document.body.removeEventListener('click', closeMenu)
})


// 关闭页签
const closeTag = (val: RouteRecordRaw | undefined) => {
  if (val) {
    const proIndex = authStore.removeTagsMenus(val)
    if (!isActive(val)) return
    const newTag = authStore.tagsMenus[proIndex]
    router.push(newTag ? newTag.path : '/admin/home')
  }
}
// 关闭其他页签
const closeOtherTag = (val: RouteRecordRaw | undefined) => {
  if (val) {
    authStore.removeOtherTagsMenus(val)
    if (isActive(val)) return
    router.push(val ? val.path : '/admin/home')
  }
}
// 关闭所有页签
const closeAllTag = () => {
  authStore.removeAllTagsMenus()
  router.push('/admin/home')
}

</script>

<template>
  <div class="tags-view-container">
    <el-link icon="DArrowLeft" :underline="false" class="el-tabs__nav-prev el-tabs__btn"></el-link>
    <el-scrollbar class="tags-view-wrapper" wrap-class="scrollbar-wrap" view-class="scrollbar-view">
      <div class="chrome-2-tabs">
        <a
          v-for="item in authStore.tagsMenus"
          :key="item.path"
          class="scrollbar-item tab-item"
          :class="{ active: isActive(item) }"
          @click="handleClickMenu(item)"
          @contextmenu.prevent="openMenu(item, $event)"
        >
          <span>{{ item.name }}</span>
          <el-icon class="tab-close" :size="12" @click.prevent.stop="closeTag(item)"><Close /></el-icon>
      </a>
      </div>
    </el-scrollbar>
    <el-link icon="DArrowRight" :underline="false" class="el-tabs__nav-next el-tabs__btn"></el-link>
    <ul v-show="menuVisible" class="context-menu" :style="{left: `${menuLeft}px`, top: `${menuTop}px`}">
      <li>刷新</li>
      <li @click="closeTag(selectedTag)">关闭</li>
      <li @click="closeOtherTag(selectedTag)">关闭其他</li>
      <li @click="closeAllTag()">关闭所有</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use './chrome-1.scss';
@use './chrome-2.scss';
.tags-view-container {
  width: 100%;
  height: 40px;
  display: flex;
  // position: relative;
  overflow-x: hidden;
  .tags-view-wrapper {
    flex: 1;
    // overflow-x: auto;
  }
  .scrollbar-view::-webkit-scrollbar {
    width: 2px;
  }
  .scrollbar-view::-webkit-scrollbar-button{
    background-color: pink;
    border-radius: 2px;
    width: 2px;
    }
  .el-tabs_btn {
    position: absolute;
  }
  .el-tabs__nav-prev {
    border-right: 1px solid var(--color-border);
  }
  .el-tabs__nav-next {
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
  }
  .tab-item {
    white-space: nowrap;
  }
  .tab-close {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    margin-left: 5px;
    vertical-align: text-top;
    &:hover {
      background-color: var(--color-border-hover);
    }
  }
  .context-menu {
    z-index: 200;
    background-color: var(--color-background);
    position: absolute;
    list-style-type: none;
    box-shadow: 2px 3px 3px 0 #00000030;
    padding: 5px 0;
    margin: 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    li {
      cursor: pointer;
      padding: 2px 15px;
      margin: 0;
      &:hover {
        background-color: var(--color-background-soft);
      }
    }
  }
}
// a:-webkit-any-link {
//     color: -webkit-link;
//     cursor: pointer;
//     text-decoration: underline;
// }
</style>
