<script setup lang="ts" name="DemoLoading">
// import Loading1 from './component/Loading1.vue'
// import Loading2 from './component/Loading2.vue'
// import Loading3 from './component/Loading3.vue'
// import Loading4 from './component/Loading4.vue'
// import Loading5 from './component/Loading5.vue'
// import Loading6 from './component/Loading6.vue'
import { ref } from 'vue'
import axios from 'axios'
import { Search } from '@element-plus/icons-vue'
// import FormData from "form-data";

// const formData = {
//   prompt: "a black dog open a yellow door",
//   output_format: "webp"
// };

// const response = await axios.postForm(
//   `https://api.stability.ai/v2beta/stable-image/generate/core`,
//   axios.toFormData(formData, new FormData()),
//   {
//     validateStatus: undefined,
//     responseType: "arraybuffer",
//     headers: {
//       Authorization: `Bearer sk-woPP5bc3unUcRONxh8qgHDxZKwWnS6IgA6BfIbdmVIa5Oelv`,
//       Accept: "image/*"
//     },
//   },
// );

// if(response.status === 200) {
//   fs.writeFileSync("./lighthouse.webp", Buffer.from(response.data));
// } else {
//   throw new Error(`${response.status}: ${response.data.toString()}`);
// }
const input = ref()
const url = ref()
const loading = ref(false)

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  var binary = ''
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
const handleEnter = async (value: string) => {
  console.log(value)
  url.value = ''

  const formData = {
    prompt: value,
    output_format: 'webp'
  }
  loading.value = true
  const response = await axios.postForm(
    `https://api.stability.ai/v2beta/stable-image/generate/core`,
    axios.toFormData(formData, new FormData()),
    {
      validateStatus: undefined,
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer sk-dnhYULGwdH8vEktxi4eQ1g6q7HUueYPbhVOV8Syu0MVnGoYP`,
        Accept: 'image/*'
      }
    }
  )
  loading.value = false

  if (response.status === 200) {
    console.log(response.data)
    // fs.writeFileSync('./lighthouse.webp', Buffer.from(response.data))
    url.value = 'data:image/jpeg;base64,' + arrayBufferToBase64(response.data)
  } else {
    throw new Error(`${response.status}: ${response.data.toString()}`)
  }
}
</script>

<template>
  <!-- <Loading1 />
  <Loading2 />
  <Loading3 />
  <Loading4 />
  <Loading5 />
  <Loading6 /> -->
  <el-input v-model="input" @change="handleEnter">
    <template #append>
      <el-button :icon="Search" />
    </template>
  </el-input>
  <el-image
    v-if="url"
    style="width: 100px; height: 100px"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="[url]"
    :initial-index="0"
    fit="cover"
    :loading="loading"
    :src="url"
    lazy
  />
</template>

<style lang="scss" scoped></style>
