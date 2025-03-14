<script setup lang="ts">
import { ref } from 'vue'

const backgroundColor = ref('#000')
const textColor = ref('#fff')

const handleSwap = () => {
  const temp = backgroundColor.value
  backgroundColor.value = textColor.value
  textColor.value = temp
}
const formatterColors = (value: any) => {
  if (value.length === 4) {
    return `${value.slice(0, 1)}${value.slice(1, 2)}${value.slice(1, 2)}${value.slice(
      2,
      3
    )}${value.slice(2, 3)}${value.slice(3, 4)}${value.slice(3, 4)}`.toUpperCase()
  } else {
    return value.toUpperCase()
  }
}
</script>

<template>
  <el-row
    class="page-wrap"
    :style="`--backgroundColor: ${backgroundColor}; --textColor: ${textColor};`"
  >
    <div class="content-box">
      <h1>
        <span :style="`color: ${textColor}`">Passes</span
        ><span :style="`color: ${backgroundColor}`"> WCAG</span>
      </h1>
      <div class="flex-box">
        <el-color-picker v-model="backgroundColor" :show-alpha="false"></el-color-picker>
        <el-input
          class="color-input"
          v-model="backgroundColor"
          placeholder=""
          :formatter="formatterColors"
        ></el-input>
        <div class="result-box">
          <div>1.23</div>
        </div>
        <el-input
          class="color-input"
          v-model="textColor"
          placeholder=""
          :formatter="formatterColors"
        ></el-input>
        <el-color-picker v-model="textColor" :show-alpha="false"></el-color-picker>
        <!-- <input type="color" id="background" name="background" v-model="textColor" /> -->
      </div>
    </div>
    <el-col :span="12" class="color-box"> </el-col>
    <el-col :span="12" class="color-box">
      <el-button class="swap" @click="handleSwap">swap colors</el-button>
    </el-col>
  </el-row>
</template>

<style scoped>
.page-wrap {
  --backgroundColor: #000;
  --textColor: #fff;
  position: relative;
  background: linear-gradient(90deg, var(--backgroundColor) 50%, var(--textColor) 50%);
}
.color-box {
  height: 100vh;
  color: var(--textColor);
  /* background-blend-mode: multiply; */
}
.content-box {
  text-align: center;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 60px);
}
.content-box > h1 {
  color: #fff;
  mix-blend-mode: difference;
  margin-bottom: 40px;
}
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  /* box-shadow: 2px 2px 10px #ccc; */
  border-radius: 8px;
  height: 60px;
  filter: drop-shadow(2px 2px 10px #ccc)
}
.result-box {
  /* width: 100px;
  height: 100px; */
  border-radius: 50%;
  padding: 20px;
  background: #fff;
}
.result-box > div {
  font-size: 40px;
  color: #fff;
  font-weight: 600;
  line-height: 120px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: rgb(230, 153, 2);
}
.color-input {
  width: 120px;
  font-size: 20px;
}
/* ::v-deep .el-input__wrapper {
    box-shadow: none;
} */
.color-input ::v-deep .el-input__inner {
  color: #000;
}
:deep(
    .color-input .el-input__wrapper,
    .color-input .el-input__wrapper.is-focus,
    .color-input .el-input__wrapper:hover
  ) {
  box-shadow: none;
}
.color-input:nth-of-type(2) ::v-deep .el-input__inner {
  text-align: right;
}
</style>
