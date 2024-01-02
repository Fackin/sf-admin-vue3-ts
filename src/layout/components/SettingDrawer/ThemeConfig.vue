<script setup lang="ts" name="ThemeConfig">
import { ref, computed } from 'vue'

import { useSettingStore } from '@/stores/setting'
// import ColorUnit from '@/util/ColorUnit'

const settingStore = useSettingStore()

const themeName = ref('默认主题')

const _theme = [
  {
    label: '默认主题',
    color: [
      ['primary', '#409EFF'],
      ['success', '#67C23A'],
      ['warning', '#E6A23C'],
      ['danger', '#F56C6C'],
      ['error', '#F56C6C'],
      ['info', '#909399']
    ]
  },
  {
    label: 'Naive UI',
    color: [
      ['primary', '#18a058'],
      ['success', '#18a058'],
      ['warning', '#f0a020'],
      ['danger', '#d03050'],
      ['error', '#d03050'],
      ['info', '#2080f0']
    ]
  },
  {
    label: 'Arco Design',
    color: [
      ['primary', '#165dff'],
      ['success', '#00b42a'],
      ['warning', '#ff7d00'],
      ['danger', '#f53f3f'],
      ['error', '#f53f3f'],
      ['info', '#909399']
    ]
  },
//   {
//     label: 'Ant Design Vue',
//     color: [
//       ['primary', '#1677ff'],
//       ['success', '#52c41a'],
//       ['warning', '#faad14'],
//       ['danger', '#ff4d4f'],
//       ['error', '#ff4d4f'],
//       ['info', '#1677ff']
//     ]
//   }
]

const setThemeColor = (colorMap: string[][], label: string) => {
  themeName.value = label
  settingStore.setThemeColor(colorMap)
}

// ---------------

const themeConfig = computed(() => settingStore.themeConfig)
// 预定义主题颜色
const colorList = [
  // DEFAULT_PRIMARY,
  '#DAA96E',
  '#0C819F',
  '#722ed1',
  '#27ae60',
  '#ff5c93',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6'
]
// 修改主题颜色
const changePrimary = (val: string | null) => {
  // if (!val) {
  //   val = DEFAULT_PRIMARY
  // ElMessage({
  //   type: 'success',
  //   message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`,
  // })
  // }
  settingStore.setThemePrimaryColor(val)
}
</script>

<template>
  <el-row style="margin-bottom: 15px">
    <span>当前主题：{{ themeName }}</span>
    <div class="demo-color-warp">
      <div
        class="demo-color-box"
        v-for="(item, key) in _theme"
        :key="key"
        @click="setThemeColor(item.color, item.label)"
        :style="{ '--color': item.color[0][1] }"
      >
        <span class="demo-color__label">{{ item.label }}</span>
        <ul class="demo-color__list">
          <template v-for="(colorItem, colorKey) in item.color" :key="colorKey">
            <li v-if="colorKey > 0" :style="{ '--color': colorItem[1] }"></li>
          </template>
        </ul>
      </div>
    </div>
  </el-row>
  <div class="theme-item">
    <span>主题颜色</span>
    <el-color-picker v-model="themeConfig.primary" :predefine="colorList" @change="changePrimary" />
  </div>
</template>

<style lang="scss" scoped>
.demo-color-warp {
  width: 100%;
  .demo-color-box {
    width: 100px;
    display: inline-block;
    background-color: var(--color);
    margin-right: 20px;
    color: #fff;
    > span {
      display: block;
    }
    .demo-color__list {
      list-style-type: none;
      height: 20px;
      display: flex;
      flex-direction: row;
      padding: 0;
      > li {
        display: inline-block;
        background-color: var(--color);
        height: 30px;
        width: 40px;
      }
    }
  }
}
</style>
