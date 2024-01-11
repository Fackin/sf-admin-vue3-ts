<script setup lang="ts" name="DemoSwiperBanner">
import SwiperBanner from '@/components/modules/SwiperBanner.vue'

const options = [
  {
    img: 'https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/L108.d7c6f061.png'
  },
  {
    img: 'https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/L100.98e3daa4.jpg'
  },
  {
    img: 'https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/L101.0a6f1b83.jpg'
  },
  {
    img: 'https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/L105.d7efc1fe.png'
  }
]
</script>

<template>
  <SwiperBanner :options="options" />
</template>

<style lang="scss" scoped></style>
