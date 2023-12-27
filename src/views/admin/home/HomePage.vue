<script setup lang="ts">
import CalendarSample from '@/components/modules/CalendarSample.vue'
import { ref, computed } from 'vue'
import { Search, Delete, Edit, Check, Message, Star } from '@element-plus/icons-vue'
import { useSettingStore } from '@/stores/setting'
// import ColorUnit from '@/util/ColorUnit'

const settingStore = useSettingStore()

const startOrEnd = ref('start')
const setStartOrEnd = () => {
  if (startOrEnd.value == 'start') {
    startOrEnd.value = 'end'
  } else {
    startOrEnd.value = 'start'
  }
}

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
  {
    label: 'Ant Design Vue',
    color: [
      ['primary', '#1677ff'],
      ['success', '#52c41a'],
      ['warning', '#faad14'],
      ['danger', '#ff4d4f'],
      ['error', '#ff4d4f'],
      ['info', '#1677ff']
    ]
  }
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
  '#9b59b6',
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


const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}


</script>
<template>
  <el-divider class="divider" content-position="center">全局主题</el-divider>
  <div class="theme-item">
    <span>主题颜色</span>
    <el-color-picker
      v-model="themeConfig.primary"
      :predefine="colorList"
      @change="changePrimary"
    />
  </div>
  <div class="theme-item">
    <span>暗黑模式</span>
    <!-- <SwitchDark /> -->
  </div>
  <el-row style="margin-bottom: 15px">
    <div class="demo-color-warp">
      <div
        class="demo-color-box"
        v-for="(item, key) in _theme"
        :key="key"
        @click="setThemeColor(item.color, item.label)"
        :style="{ '--color': item.color[0][1] }"
      >
        <span class="demo-color__label">{{ item.label }}</span>
        <span class="demo-color__value">{{ item.color[0][0] }}</span>
        <span class="demo-color__value">{{ item.color[0][1] }}</span>
        <ul class="demo-color__list">
          <template v-for="(colorItem, colorKey) in item.color" :key="colorKey">
            <li v-if="colorKey > 0" :style="{ '--color': colorItem[1] }">
              <!--                <span>{{ colorItem[0] }}</span>-->
              <!--                <span>{{ colorItem[1] }}</span>-->
            </li>
          </template>
        </ul>
      </div>
    </div>
    <span>当前主题：{{ themeName }}</span>
  </el-row>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
  <el-row class="mb-4">
    <el-button disabled>Default</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
  </el-row>

  <el-row>
    <el-button plain disabled>Plain</el-button>
    <el-button type="primary" plain disabled>Primary</el-button>
    <el-button type="success" plain disabled>Success</el-button>
    <el-button type="info" plain disabled>Info</el-button>
    <el-button type="warning" plain disabled>Warning</el-button>
    <el-button type="danger" plain disabled>Danger</el-button>
  </el-row>

  <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  <div>{{ $t('message.hello') }}</div>
  <el-button @click="setStartOrEnd">click</el-button>
  <div :style="{ display: 'flex', 'justify-content': startOrEnd }">
    <CalendarSample />
  </div>
</template>

<style scoped lang="scss">
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
