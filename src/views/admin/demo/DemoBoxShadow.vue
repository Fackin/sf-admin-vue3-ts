<script setup lang="ts" name="DemoBoxShadow">
import { Check, Close } from '@element-plus/icons-vue'
import { reactive, computed, ref } from 'vue'

interface IBoxShadow {
  inset: string | null
  offsetX: string | number
  offsetY: string | number
  blur: string | number
  spread: string | number
  color: string
}

interface IBoxShadowElement {
  id: string | number
  name: string
  boxShadow: IBoxShadow
}
const defaultBoxShadow = {
  inset: '',
  offsetX: 5,
  offsetY: -5,
  blur: 5,
  spread: 0,
  color: ''
}

const elementList = ref<IBoxShadowElement[]>([])
const curElementId = ref<string | number>('')
const curActive = ref<number>(0)

const boxShadow = computed(() => {
  return elementList.value && elementList.value.length > 0
    ? elementList.value[curActive.value]?.boxShadow
    : null
})
const boxShadowStyle = computed(
  () =>
    elementList.value && elementList.value.length > 0
      ? elementList.value.reduce(
          (prev, cur, index, arr) =>
            `${prev} ${cur.boxShadow.inset} ${cur.boxShadow.offsetX}px ${cur.boxShadow.offsetY}px ${
              cur.boxShadow.blur
            }px ${cur.boxShadow.spread}px ${cur.boxShadow.color}${
              index < arr.length - 1 ? ',' : ';'
            }`,
          `box-shadow:`
        )
      : ''
  // `box-shadow: ${boxShadow.inset} ${boxShadow.offsetX}px ${boxShadow.offsetY}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`
)
const handleAddTag = () => {
  elementList.value.push({
    id: elementList.value.length + 1,
    name: `element${elementList.value.length + 1}`,
    boxShadow: { ...defaultBoxShadow }
  })
}
const handleDeleteTag = (index: number) => {
  elementList.value.splice(index, 1)
}
const handleClickTag = (tag: IBoxShadowElement, index: number) => {
  console.log(tag)
  const { id, boxShadow } = tag
  //   const { inset, offsetX, offsetY, blur, spread, color } = boxShadow
  curElementId.value = id
  curActive.value = index
  //   boxShadow.inset = inset
  //   boxShadow.offsetX = offsetX
  //   boxShadow.offsetY = offsetY
  //   boxShadow.blur = blur
  //   boxShadow.spread = spread
  //   boxShadow.color = color
}
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card header="config">
        <!-- <el-divider content-position="left">config</el-divider> -->
        <el-form
          label-position="right"
          label-width="120px"
          style="max-width: 460px"
          v-if="curElementId && boxShadow"
        >
          <el-form-item label="inset">
            <el-switch
              v-model="boxShadow.inset"
              :active-action-icon="Check"
              :inactive-action-icon="Close"
              active-value="inset"
              inactive-value=" "
            />
          </el-form-item>
          <el-form-item label="offset-x">
            <el-slider v-model="boxShadow.offsetX" show-input :min="-150" :max="150" />
          </el-form-item>
          <el-form-item label="offset-y">
            <el-slider v-model="boxShadow.offsetY" show-input :min="-150" :max="150" />
          </el-form-item>
          <el-form-item label="blur-radius">
            <el-slider v-model="boxShadow.blur" show-input :min="0" :max="200" />
          </el-form-item>
          <el-form-item label="spread-radius">
            <el-slider v-model="boxShadow.spread" show-input :min="-100" :max="100" />
          </el-form-item>
          <el-form-item label="color">
            <el-color-picker v-model="boxShadow.color" show-alpha />
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card header="view">
        <!-- <el-divider content-position="center">{{ boxShadowStyle }}</el-divider> -->
        {{ boxShadowStyle }}
        <div><el-button @click="handleAddTag">Add</el-button></div>
        <div>
          <el-tag
            v-for="(tag, index) in elementList"
            :key="tag.id"
            class="mx-1"
            closable
            :type="curElementId == tag.id ? '' : 'info'"
            @click="() => handleClickTag(tag, index)"
            @close="() => handleDeleteTag(index)"
          >
            {{ tag.name }}
          </el-tag>
        </div>
        <div class="view-warpper">
          <div class="box-warpper" :style="boxShadowStyle"></div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.view-warpper {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-warpper {
  width: 100px;
  height: 100px;
  border: 1px solid #121212;
  border-radius: 50%;
//   border: none;
//   background-color: transparent;
  box-shadow: 0 0 12px 12px #121212;
}
</style>
