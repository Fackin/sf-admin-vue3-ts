<script setup lang="ts" name="TagsView">
import { ref } from 'vue'
defineOptions({ name: 'TagsView' })

const list = [
  {
    name: '首页',
    path: '/home',
    id: 1,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  },
  {
    name: '工作台',
    path: '/home',
    id: 2,
    icon: 'home'
  },
  {
    name: '用户管理',
    path: '/home',
    id: 3,
    icon: ''
  },
  {
    name: '富文本',
    path: '/home',
    id: 4,
    icon: 'Home'
  },
  {
    name: '你好 world',
    path: '/home',
    id: 5,
    icon: 'Home'
  }
]

const currentTab = ref(1)
</script>

<template>
  <div class="tags-view-container">
    <el-link icon="DArrowLeft" :underline="false" class="el-tabs__nav-prev el-tabs__btn"></el-link>
    <el-scrollbar class="tags-view-wrapper" wrap-class="scrollbar-wrap" view-class="scrollbar-view">
      <div class="chrome-2-tabs">
        <a
          v-for="item in list"
          :key="item.id"
          class="scrollbar-item tab-item"
          :class="{ active: currentTab === item.id }"
          @click="currentTab = item.id"
        >
          {{ item.name }}
        </a>
      </div>
    </el-scrollbar>
    <el-link icon="DArrowRight" :underline="false" class="el-tabs__nav-next el-tabs__btn"></el-link>
  </div>
</template>

<style lang="scss" scoped>
@use './chrome-1.scss';
@use './chrome-2.scss';
.tags-view-container {
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
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
}
</style>
